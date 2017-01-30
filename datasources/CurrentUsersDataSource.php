<?php

require_once(__DIR__.'/PersonDataSource.php');

class CurrentUsersDataSource extends PersonDataSource {

  function __construct() {

    parent::__construct();

    $this->before('select', function($dataSource, &$filter, &$t, &$options) {

      $login = br()->auth()->getLogin();
      $filter[] = array('id' => $login['id']);
      
    });

 }

}