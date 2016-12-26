<?php

br()->importLib('DataSource');

class PersonDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_users', array('defaultOrder' => array('name'=> 1)));

    $this->before('select', function($dataSource, &$filter){

        // if ($login = br()->auth()->getLogin()) {
        //   if (br($login,'isPower')) {
        //     if (!br($filter,'user_id')) {
        //         if ($login = br()->auth()->getLogin()) {
        //             $filter['user_id'] = $login['id'];
        //         }
        //     }
        //   } else {
        //     $filter['user_id'] = $login['id'];
        //   }
        // } else {
        //     $filter['id'] = -1;
        // }

        // if (!br($filter,'user_id')) {
        //     if ($login = br()->auth()->getLogin()) {
        //         $filter['user_id'] = $login['id'];
        //     }
        // }

    });

    $this->on('calcFields', function($dataSource, &$row){
        $row['city'] = br()->db()->getValue( 'SELECT name FROM 3d_city WHERE id = ?'
                                                      , $row['city_id']
                                                      );
    });

    // DML
    $this->before('insert', function($dataSource, &$row, $transientData) {
        // if (!br($row,'user_id')) {
        //     $login = br()->auth()->getLogin();
        //     $row['user_id'] = $login['id'];
        // }
    });

    $this->before('update', function($dataSource, &$row, $transientData, $old) {

    });

    $this->before('remove', function($dataSource, &$row, $transientData) {

    });

    $this->after('insert', function($dataSource, &$row, $transientData) {

    });

    $this->after('update', function($dataSource, &$row, $transientData, $old) {

    });

    $this->after('remove', function($dataSource, &$row, $transientData) {

    });

    // commands
    $this->on('someCommand', function($dataSource, $params) {

      throw new Exception('Not implemented');

    });


  }

}

