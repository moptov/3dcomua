<?php

br()->importLib('DataSource');

class ZapDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_zapic', array('defaultOrder' => array('id'=> 1)));

    $this->before('select', function($dataSource, &$filter){
    });

    $this->on('calcFields', function($dataSource, &$row){

    });

    // DML
    $this->before('insert', function($dataSource, &$row, $transientData) {
    });

    $this->before('update', function($dataSource, &$row, $transientData, $old) {

    });

    $this->before('remove', function($dataSource, &$row, $transientData) {

    });

    $this->after('insert', function($dataSource, &$row, $transientData) {
      if (br($row,'contact_id')) {
        if ($contactInfo = br()->db()->getRow('SELECT * FROM 3d_contact WHERE id = ?',$row['contact_id'])) {
          if (br($contactInfo,'email')) {
            $userInfo = array();
            $userInfo['pacientInfo'] = $row;
            $userInfo['name'] = 'Здравствуйте!';
            $userInfo['desc'] = 'Поступила новая завка записи на приём для центра '.$contactInfo['adress'];
            $message = br()->renderer()->fetch('new-pasient-mail.html', array('data' => $userInfo));
            br()->sendMail( $contactInfo['email']
                          , 'Запись на приём'
                          , $message
                          );
          }
        }

        if ($usersInfo = br()->db()->getRows('SELECT * FROM 3d_users WHERE contact_id = ?',$row['contact_id'])) {
          foreach ($usersInfo as $key => &$userInfo) {
            $userInfo['pacientInfo'] = $row;
            $userInfo['name'] = 'Здравствуйте '.$userInfo['firstname'].' '.$userInfo['lastname'].'!';
            $userInfo['desc'] = 'Поступила новая завка записи на приём!';
            $message = br()->renderer()->fetch('new-pasient-mail.html', array('data' => $userInfo));
            br()->sendMail( $userInfo['email']
                          , 'Запись на приём'
                          , $message
                          );

          }
        }
      }
    });

    $this->after('update', function($dataSource, &$row, $transientData, $old) {

    });

    $this->after('remove', function($dataSource, &$row, $transientData) {

    });

    // commands
    $this->on('zap', function($dataSource, $params) {
      $res = array();
      $res['success'] = false;

      if ($id_cap = br()->db()->getValue( 'SELECT id FROM 3d_captcha WHERE id = ? AND code = ?&', $params['captcha_img'], $params['captcha_code'])) {
        $fields = $params;
        unset($fields['captcha_img']);
        unset($fields['captcha_code']);
        $row = $dataSource->insert($fields);
        $res['success'] = true;
      } else {
        $res['error'] = 'Не совпадает код';
        $res['error_field'] = 'captcha';
      }
      return $res;

    });

    $this->on('someCommand', function($dataSource, $params) {

      throw new Exception('Not implemented');

    });


  }

}

