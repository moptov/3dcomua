<?php

require_once(__DIR__ . '/bright/Bright.php');
require_once(__DIR__ . '/3rdparty/phpQuery/phpQuery.php');

$rows = br()->db()->getRows('SELECT * FROM hcizs_comprofiler WHERE id = 686');

foreach ($rows as $key => $row) {

  // if (br($row, 'cb_kt')) {
  //   $doc = phpQuery::newDocument($row['cb_kt']);
  //   foreach($doc->find('tr') as $el) {
  //     foreach (pq($el)->find('td') as $td) {
  //       logme(pq($el)->text());
  //     }
  //   }
  //   phpQuery::unloadDocuments();    
  // }



 //  $sql = br()->placeholder( 'UPDATE 3d_users
 //                                SET clinic_name = ?
 //                                  , clinic_vrach = ?
 //                                  , firstname = ?
 //                                  , lastname = ?
 //                                  , phone = ?'
 //                          , br($row, 'cb_clinica')
 //                          , br($row, 'cb_kto')
 //                          , br($row, 'firstname')
 //                          , br($row, 'lastname')
 //                          , br($row, 'cb_phone')
 //                          );

	// if ($gorodID =  br()->db()->getValue('SELECT id FROM 3d_city WHERE UPPER(name) LIKE UPPER("%'.trim($row['cb_gorod']).'%") ')) {
 //    $sql .= br()->placeholder(', city_id = ?', $gorodID);
	// }

 //  $sql .= br()->placeholder( ' WHERE id = ?', $row['id']);
 //  br()->db()->runQuery($sql);

}

