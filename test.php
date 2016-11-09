<?php

require_once(__DIR__ . '/bright/Bright.php');
require_once(__DIR__ . '/3rdparty/phpQuery/phpQuery.php');

$rows = br()->db()->getRows('SELECT com.id,com.cb_kt FROM hcizs_comprofiler com 
                             INNER JOIN 3d_users us ON com.id = us.id');


foreach ($rows as $key => $row) {

 // ============================STEP 1=========================
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


 // ============================STEP 2=========================

  if (br($row, 'cb_kt')) {

    $doc = phpQuery::newDocument($row['cb_kt']);
    $colInRow = 0;

    foreach($doc->find('tr') as $numRow => $el) {
      $fieldsRow = array();
      foreach (pq($el)->find('td') as $numCol => $td) {
        if ($numRow == 0) {
          $colInRow++;
        } else { 
          if ($colInRow == 4) {
            if ($numCol == 0) {
              $fieldsRow['fio'] = trim(pq($td)->text());
            } elseif ($numCol == 1) {
              $fieldsRow['inspection'] = trim(pq($td)->text());
            } elseif ($numCol == 2) {
              // try {
              //   $fieldsRow['created_at'] = date("Y-m-d", strtotime(pq($td)->text()));
              // } catch (Exception $e) {
              // }
            } elseif ($numCol == 3) {
              $pq = pq($td);
              $fieldsRow['url'] = $pq->find('a')->attr('href');
            }
          } else {
            if ($numCol == 0) {
              $fieldsRow['fio'] = trim(pq($td)->text());
            } elseif ($numCol == 1) {
              $fieldsRow['inspection'] = trim(pq($td)->text());
            } elseif ($numCol == 2) {
              $pq = pq($td);
              $fieldsRow['url'] = $pq->find('a')->attr('href');
            }

          }
        }
      }

      if (($numRow != 0)&&($colInRow != 0)&&($fieldsRow)) {
        if ((br($fieldsRow,'url'))&&(br($fieldsRow,'fio'))) {
          $fieldsRow['user_id'] = $row['id'];
          $fileID = br()->db()->table('3d_files')->insert($fieldsRow);
        }
      }
    }
    phpQuery::unloadDocuments();    
  }


}

