<?php

require_once(dirname(__DIR__).'/bright/Bright.php');

if (!br()->isConsoleMode()) { br()->panic('Console mode only'); }

require_once(dirname(__DIR__) . '/app/lib/eDoctrinaS3.php');
require_once(dirname(__DIR__) . '/app/lib/eDoctrinaAWS.php');

logme('----------------------');
$pass = "vyach77";
$options = array('cost' => 10);
$hash = '$2y$10$cRBFgQ8Hw8NiveYCohesX.pwDIHiQCeByTlZIChB3QhmaCdxihUE.';
logme(password_hash($pass, PASSWORD_DEFAULT));
logme(password_hash($pass, PASSWORD_DEFAULT));
logme(password_hash($pass, PASSWORD_BCRYPT, $options));
logme(password_hash($pass, PASSWORD_BCRYPT));
logme(md5($pass));
logme($hash);
$res = password_verify($pass, $hash) ? 1 : 0;
logme($res);


// vyach777