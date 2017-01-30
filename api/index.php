<?php

br()->importLib('RESTBinder');
br()->importDataSource('users');

function dataSourcesLoader($className) {

  if (preg_match('#DataSource$#', $className)) {
    $fileName = dirname(__DIR__).'/datasources/'.$className.'.php';
    if (file_exists($fileName)) {
      require_once($fileName);
    }
  }

}

spl_autoload_register('dataSourcesLoader');

$rest = new BrRESTBinder();
$rest
  ->route(new BrRESTUsersBinder(new BrDataSourceUsers()))
  ->route( '/api/mainContent'
         , 'ContentDataSource'
         , array( 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             , array( 'get'  => 'alias'
                                                    , 'fields' => 'alias'
                                                    )
                                             )
                )
         )
  ->route( '/api/currentUsers'
         , 'CurrentUsersDataSource'
         , array( 'security'         => 'login'
                , 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             )
                )
         )
  ->route( '/api/type'
         , 'TypeDataSource'
         , array( 'security'         => 'login'
                , 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             )
                )
         )
  ->route( '/api/captcha'
         , 'CaptchaDataSource'
         , array( 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             )
                )
         )
  ->route( '/api/city'
         , 'CityDataSource'
         , array( 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             )
                )
         )
  ->route( '/api/contact'
         , 'ContactDataSource'
         , array( 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                           , array( 'get'    => 'keyword'
                                                  , 'type'   => 'contains'
                                                  , 'fields' => array('adress', 'tel1', 'tel2', 'email')
                                                  )
                                             , array( 'get'  => 'city_id'
                                                    , 'fields' => 'city_id'
                                                    )
                                             )
                )
         )
  ->route( '/api/zap'
         , 'ZapDataSource'
         , array( 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                           , array( 'get'    => 'keyword'
                                                  , 'type'   => 'contains'
                                                  , 'fields' => array('fio', 'phone')
                                                  )
                                             , array( 'get'  => 'city_id'
                                                    , 'fields' => 'city_id'
                                                    )
                                             , array( 'get'  => 'contact_id'
                                                    , 'fields' => 'contact_id'
                                                    )
                                             )
                )
         )
  ->route( '/api/filesOfPerson'
         , 'FilesDataSource'
         , array( 'security'         => 'login'
                , 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                           , array( 'get'    => 'keyword'
                                                  , 'type'   => 'contains'
                                                  , 'fields' => array('fio', 'inspection')
                                                  )
                                             , array( 'get'  => 'user_id'
                                                    , 'fields' => 'user_id'
                                                    )
                                             )
                )
         )
  ->route( '/api/persons'
         , 'PersonDataSource'
         , array( 'security'         => 'login'
                , 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                           , array( 'get'    => 'keyword'
                                                  , 'type'   => 'contains'
                                                  , 'fields' => array('firstname', 'lastname', 'email', 'phone')
                                                  )
                                             , array( 'get'  => 'type_id'
                                                    , 'fields' => 'type_id'
                                                    )
                                             , array( 'get'  => 'city_id'
                                                    , 'fields' => 'city_id'
                                                    )
                                             , array( 'get'  => 'type_person'
                                                    , 'fields' => 'type_person'
                                                    )
                                             , array( 'get'  => 'scope'
                                                    , 'fields' => 'scope'
                                                    )
                                             , array( 'get'  => 'user_id'
                                                    , 'fields' => 'user_id'
                                                    )
                                             )
                )
         )

;
