<?php

require_once(__DIR__ . '/bright/Bright.php');


$rows = br()->db()->getRows('SELECT * FROM hcizs_comprofiler');

foreach ($rows as $key => $row) {

  $sql = br()->placeholder( 'UPDATE 3d_users
                                SET clinic_name = ?
                                  , clinic_vrach = ?
                                  , firstname = ?
                                  , lastname = ?
                                  , phone = ?'
                          , br($row, 'cb_clinica')
                          , br($row, 'cb_kto')
                          , br($row, 'firstname')
                          , br($row, 'lastname')
                          , br($row, 'cb_phone')
                          );

	if ($gorodID =  br()->db()->getValue('SELECT id FROM 3d_city WHERE UPPER(name) LIKE UPPER("%'.trim($row['cb_gorod']).'%") ')) {
    $sql .= br()->placeholder(', city_id = ?', $gorodID);
	}

  $sql .= br()->placeholder( ' WHERE id = ?', $row['id']);
  br()->db()->runQuery($sql);

}

