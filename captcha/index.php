<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<title>����� �� BlogGood.ru</title>
</head>

<body>
<form action="form-handler.php" method="post">
<p>������� ���:<br>
<input type="text" name="name"></p>
<p>������� email:<br>
<input type="text" name="email"></p>
<p>������� ���������:<br>
<textarea name="message" cols="40" rows="5" ></textarea>
</p>
<!-- ������� ����� �� ����� captcha.php -->
<?php require ("captcha.php"); ?>

<input name="captcha_validation" style=" margin-bottom:11px" type="text" size="6" maxlength="5"></p>
<p><input type="submit" class="bt1" value="��������� ���������"></p>
</form>
</body>
</html>
