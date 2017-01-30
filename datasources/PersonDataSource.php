<?php

br()->importLib('DataSource');

class PersonDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_users', array('defaultOrder' => array('firstname'=> 1,'lastname'=> 1)));

    $this->before('select', function($dataSource, &$filter){

      $scope = br(br($filter, 'scope'))->split();
      unset($filter['scope']);

      if (br($scope)->exists('inactive')) {
        $filter[] =  array('status' => 0);
      } else
      if (br($scope)->exists('inactive')) {
        $filter[] =  array('status' => 1);
      }

      $type_person = br(br($filter, 'type_person'))->split();
      unset($filter['type_person']);


      if (br($type_person)->exists('clinik')) {
        $filter[] =  array('is_clinic' => 1);
      } else
      if (br($type_person)->exists('doctors')) {
        $filter[] =  array('is_clinic' => 0);
      }

    });

    $this->on('calcFields', function($dataSource, &$row){
      $row['city'] = br()->db()->getValue('SELECT name FROM 3d_city WHERE id = ?', $row['city_id']);
      $row['type'] = br()->db()->getValue('SELECT name FROM 3d_users_type WHERE id = ?', $row['type_id']);
      $row['flag']['is_clinic'] = (br($row,'is_clinic')) ? true : false;
      $row['flag']['status'] = (br($row,'status')) ? true : false;
    });

    // DML
    $this->before('insert', function($dataSource, &$row, $transientData) {
      if ((br($row,'pass'))&&(br($row,'pass2'))) {
        if ($row['pass'] != $row['pass2']) {
          throw new BrAppException('Пароли не совпалают');
        } else {
          $row['paswd'] = password_hash($row['pass'], PASSWORD_DEFAULT);
        }
      }
      if (br($row,'type_id') != 2) {
        unset($row['contact_id']);
      }
      unset($row['pass']);
      unset($row['pass2']);
      unset($row['captcha_code']);
      unset($row['captcha_img']);
    });

    $this->before('update', function($dataSource, &$row, $transientData, $old) {
      if ((br($row,'pass'))&&(br($row,'pass2'))) {
        if ($row['pass'] != $row['pass2']) {
          throw new BrAppException('Пароли не совпалают');
        } else {
          $row['paswd'] = password_hash($row['pass'], PASSWORD_DEFAULT);
        }
      }
      unset($row['pass']);
      unset($row['pass2']);
      unset($row['captcha_code']);
      unset($row['captcha_img']);

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
    $this->on('getCurrentUser', function($dataSource, $params) {

      return br()->auth()->getLogin();

    });


  }

}

