<?php
/* ��������� ���������� �� ����������, ������� �������� ����� �������� �����. 
   ���� �� ����������, �� �� �� �������.
   ���� ����� �������� ������ �������� �� �� ������� */
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['message'])) {$message = $_POST['message']; if ($message == '') {unset($message);}}
if (isset($_POST['captcha_validation'])){$captcha_validation = $_POST['captcha_validation']; if ($captcha_validation == '') {unset($captcha_validation);}}
if (isset($_POST['captcha'])){$captcha = $_POST['captcha'];}

 

/* ��������� ��������� �� ��� ���� */
if (isset($name) && isset($email) && isset($message) && isset($captcha_validation))
{

/* ��������� ������������ ����� ����� */
  if ($captcha == $captcha_validation)
  {
	  
/* ���� ����� �����, ���������� ��������� */
/* ��������� ��������� */
$address = "test@test";
$sub = "��������� � ����� BlogGood.ru!!!";
$mes = "���: $name \nE-mail: $email \n���������� ������: \n$message";

/* ����������� �� �������� ������ */
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = windows-1251\r\nFrom:$email");
      if ($verify == 'true')
      {
       echo "��������� ����������!";
      }
      else 
	  {
	  echo "��������� �� ����������!";
	  }
  }
  else
  {
  echo "�� �� ��������� ����� ����� � ��������";
  }
 

}
else
{
echo "�� ��������� �� ��� ����!";
}
?>