<?php
/* Проверяем существуют ли переменные, которые передала форма обратной связи. 
   Если не существуют, то мы их создаем.
   Если форма передала пустые значения мы их удаляем */
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['message'])) {$message = $_POST['message']; if ($message == '') {unset($message);}}
if (isset($_POST['captcha_validation'])){$captcha_validation = $_POST['captcha_validation']; if ($captcha_validation == '') {unset($captcha_validation);}}
if (isset($_POST['captcha'])){$captcha = $_POST['captcha'];}

 

/* Проверяем заполнены ли все поля */
if (isset($name) && isset($email) && isset($message) && isset($captcha_validation))
{

/* Проверяем правильность ввода капчи */
  if ($captcha == $captcha_validation)
  {
	  
/* если капча верна, отправляем сообщение */
/* Настройки сообщения */
$address = "test@test";
$sub = "Сообщение с сайта BlogGood.ru!!!";
$mes = "Имя: $name \nE-mail: $email \nСодержание письма: \n$message";

/* Уведомление об отправки письма */
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");
      if ($verify == 'true')
      {
       echo "Сообщение отправлено!";
      }
      else 
	  {
	  echo "Сообщение не отправлено!";
	  }
  }
  else
  {
  echo "Вы не правильно ввели цифры с картинки";
  }
 

}
else
{
echo "Вы заполнили не все поля!";
}
?>