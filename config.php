<?php

$dbConfig = __DIR__.'/config.db.php';

br()->halt( file_exists($dbConfig)
          , 'Almost ready. Just one step for the great new application - please rename <b>/config.db.php.example</b> to <b>/config.db.php</b> and configure database connection.'
          );

require_once($dbConfig);

br()->config()->set('site-name', 'Another one great site');

br()->auth()->setAttr('usersTable.name', '3d_users');
br()->auth()->setAttr('usersTable.loginField', 'email');
br()->auth()->setAttr('usersTable.passwordField', 'paswd');
br()->auth()->setAttr('usersAPI.select', 'anyone login');
br()->auth()->setAttr('usersAPI.insert', 'anyone');
br()->auth()->setAttr('usersAPI.remove', 'anyone');
br()->auth()->setAttr('usersAPI.update', 'anyone');

br()->config()->set('Logger/File/Active', true);
