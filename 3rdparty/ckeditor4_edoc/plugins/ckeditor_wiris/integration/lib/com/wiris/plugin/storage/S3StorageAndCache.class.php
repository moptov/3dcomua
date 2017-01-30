<?php

// S3 PHP SDK. To use another technique to include the SDK (such Composer or Phar) see http://docs.aws.amazon.com/aws-sdk-php/v2/guide/quick-start.html
require_once(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(__DIR__)))))))))) . '/bright/Br.php');
require_once(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(__DIR__)))))))))) . '/config.php');
require_once(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(dirname(__DIR__)))))))))) . '/app/lib/eDoctrinaAWS.php');


/**
 * This sample demonstrate how to implement a cache class for storing and retrieving WIRIS cache from Amazon Simple Storage Service (S3).
 * This class implements the com.wiris.plugin.storage.StorageAndCacheinterface. See http://www.wiris.com/pluginwiris_engine/docs/api for a description of the interface.
 *
 * <b>Prerequisites:</b> You must have a valid Amazon Web Services account, and be signed up to use Amazon S3. For more information on Amazon
 * S3, see http://aws.amazon.com/s3.
 * Fill in your AWS access credentials in the provided credentials file
 * template, and be sure to move the file to the default location
 * (~/.aws/credentials) where the sample code will load the credentials from.
 * <p>
 * <b>WARNING:</b> To avoid accidental leakage of your credentials, DO NOT keep
 * the credentials file in your source directory.
 *
 * http://aws.amazon.com/security-credentials
 **/


class com_wiris_plugin_storage_S3StorageAndCache implements com_wiris_plugin_storage_StorageAndCache{

    public function init($obj, $config) {
    }

    /**
     * Given a content, computes a digest of it. This digest must be unique in order to use it as identifier of the content.
     * For example, the digest can be the md5 sum of the content.
     *
     * @param content
     * @return A computed digest of the content.
     */
    public function codeDigest($content) {
        // Using WIRIS Md5Tools to encode the content to MD5.
        // It is strongly recommended to use MD5 class to generate the md5 string to avoid consistence issues.
        $digest = com_wiris_system_Md5Tools::encodeString($content);

        $url = 'uploads/wiris/formulas/' . $digest . '.ini';
        $url = eDoctrinaAWS::uploadSecureData($content, $url);

        return $digest;
    }

    /**
     * Given a computed digest, returns the respective content.
     * You might need to store the relation digest content during the codeDigest.
     *
     * @param digest A computed digest.
     * @return The content associated to the computed digest. If it is not found, this method should return null.
     */
    public function decodeDigest($digest) {
        $url = eDoctrinaAWS::baseSecureUrl() . 'uploads/wiris/formulas/' . $digest . ".ini";
        logme('WIRIS: ' . $url);
        return file_get_contents($url);
    }

    /**
     * Given a computed digest, returns the stored data associated with it.
     * This should be a cache system. As a cache there is a contract between the implementation and the caller:
     * If the data is not found, the caller is responsible to regenerate and store the data.
     * The cache is free to remove any data.
     *
     * @param digest A computed digest.
     * @param service The service that request the data
     * @return The data associated with the digest. If it is not found, this method should return null.
     */
    public function retreiveData($digest, $service) {
        return null;
    }

    /**
     * Associates a data stream with a computed digest. Note that data are not shared by different service. Thus,
     * the pair digest and service must be the "primary key" of the data.
     * @param  $digest  A computed digest.
     * @param  $service The service that stores data.
     * @param  $stream  The data to be stored.
     */
    public function storeData($digest, $service, $stream) {
        // Adds an object to a bucket.
        // For more information see: http://docs.aws.amazon.com/aws-sdk-php/v2/api/class-Aws.S3.S3Client.html#_putObject.
        $url = 'uploads/wiris/formulas/' . $digest . $this->getExtension($service);
        $url = eDoctrinaAWS::uploadSecureData($stream, $url);
        logme('WIRIS: ' . $url);
    }

    /**
     * Given a MD5 digest returns the associated folder structure.
     * @param digest
     * @return Associated folder structure.
     */
    private function getFolderStore($digest) {
        return substr($digest, 0, 2) . "/" . substr($digest, 2, 2);
    }

    /**
     * Given a service like png or svg, returns the associated extension.
     * @param service
     * @return The associated file extension. If the service is not an image servive (svg or png) returns "txt"
     * file extension.
     */
    private function getExtension($service) {
        if($service === "png") {
            return "png";
        }
        if($service === "svg") {
            return "svg";
        }
        return $service . ".txt";
    }

    /**
     * Given a service like png, svg returns the associated Content-Type HTTP header.
     * @param service
     * @return The associated HTTP header. If the service is not an image service (svg or png) returns "text/plain" header.
     */
    private function getExtensionEncoding($service) {
        if ($service == "png")
            return "image/png";
        if ($service == "svg")
            return "image/svg+xml";
        return "text/plain";
    }
}
