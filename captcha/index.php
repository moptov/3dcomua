<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<title>Капча на BlogGood.ru</title>
</head>

<body>
<form action="form-handler.php" method="post">
<p>Введите имя:<br>
<input type="text" name="name"></p>
<p>Введите email:<br>
<input type="text" name="email"></p>
<p>Введите сообщение:<br>
<textarea name="message" cols="40" rows="5" ></textarea>
</p>
<!-- выводим капчу из файла captcha.php -->
<?php require ("captcha.php"); ?>

<input name="captcha_validation" style=" margin-bottom:11px" type="text" size="6" maxlength="5"></p>
<p><input type="submit" class="bt1" value="Отправить сообщение"></p>
</form>
</body>
</html>
