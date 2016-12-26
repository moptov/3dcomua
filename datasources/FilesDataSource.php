<?php

br()->importLib('DataSource');

class FilesDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_files', array('defaultOrder' => array('created_at'=> -1)));

    $this->before('select', function($dataSource, &$filter){

        if ($login = br()->auth()->getLogin()) {
          if (br($login,'isPower')) {
            if (!br($filter,'user_id')) {
                if ($login = br()->auth()->getLogin()) {
                    $filter['user_id'] = $login['id'];
                }
            }
          } else {
            $filter['user_id'] = $login['id'];
          }
        } else {
            $filter['id'] = -1;
        }

        if (!br($filter,'user_id')) {
            if ($login = br()->auth()->getLogin()) {
                $filter['user_id'] = $login['id'];
            }
        }

    });

    $this->on('calcFields', function($dataSource, &$row){

    });

    // DML
    $this->before('insert', function($dataSource, &$row, $transientData) {
        if (!br($row,'user_id')) {
            $login = br()->auth()->getLogin();
            $row['user_id'] = $login['id'];
        }
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

