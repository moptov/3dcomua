<?php

br()->importLib('DataSource');

class ContactDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_contact', array('defaultOrder' => array('id'=> 1)));

    $this->before('select', function($dataSource, &$filter){
        // if ($login = br()->auth()->getLogin()) {
        //   if (br($login,'isAdmin')) {
        //     $filter[] = array('id'  => array('$ne' => 1));
        //   }
        // }

    });

    $this->on('calcFields', function($dataSource, &$row){
      if (br($row,'city_id')) {
        $row['city'] = br()->db()->getValue('SELECT name FROM 3d_city WHERE id = ?', $row['city_id']);
      }
    });

    // DML
    $this->before('insert', function($dataSource, &$row, $transientData) {

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

