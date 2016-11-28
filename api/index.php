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
  ->route( '/api/filesOfPerson'
         , 'FilesDataSource'
         , array( 'security'         => 'login'
                , 'allowEmptyFilter' => true
                , 'filterMappings'   => array( array( 'get'  => 'id'
                                                    , 'fields' => 'id'
                                                    )
                                             , array( 'get'  => 'user_id'
                                                    , 'fields' => 'user_id'
                                                    )
                                             )
                )
         )
;
