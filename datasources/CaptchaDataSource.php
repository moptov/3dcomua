<?php

br()->importLib('DataSource');

class CaptchaDataSource extends BrDataSource {

  function __construct() {

    parent::__construct('3d_captcha', array('defaultOrder' => array('id'=> 1)));

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

    });

    $this->after('update', function($dataSource, &$row, $transientData, $old) {

    });

    $this->after('remove', function($dataSource, &$row, $transientData) {

    });

    // commands
    $this->on('getCaptcha', function($dataSource, $params) {
        return br()->db()->getRow('SELECT image, id FROM 3d_captcha WHERE id = ?',rand(1,20));    
    });


  }

}

