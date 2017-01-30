<?php

br()->importLib('DataSource');

class FilesDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_files', array('defaultOrder' => array('created_at'=> -1)));

    $this->before('select', function($dataSource, &$filter){

      if (!br($filter,'id')) {

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
      }


    });

    $this->on('calcFields', function($dataSource, &$row){

    });

    // DML
    $this->before('insert', function($dataSource, &$row, &$transientData) {
        if (!br($row,'user_id')) {
            $login = br()->auth()->getLogin();
            $row['user_id'] = $login['id'];
        }
    });

    $this->before('insert,update', function($dataSource, &$row, &$transientData) {
      if (br($row,'mail')) {
        $transientData['mail'] = 1;
      }
      unset($row['mail']);
    });

    $this->after('insert,update', function($dataSource, $row, &$transientData) {
      if (br($transientData,'mail')) {
        if ($userIndo = br()->db()->getRow('SELECT * FROM 3d_users WHERE id = ?',$row['user_id'])) {
            $userIndo['pacientInfo'] = $row;
            $userIndo['name'] = $userIndo['firstname'].' '.$userIndo['lastname'];
            $message = br()->renderer()->fetch('new-study-mail.html', array('data' => $userIndo));
            br()->sendMail( $userIndo['email']
                          , 'Новое исследование'
                          , $message
                          );
        }
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
    $this->on('getPersonName', function($dataSource, $params) {

      if (br($params,'id')) {
        return br()->db()->getValue( 'SELECT IF(is_clinic = 1,firstname,CONCAT(firstname," ",lastname)) FROM 3d_users WHERE id = ?',$params['id']);
      }

    });


  }

}

