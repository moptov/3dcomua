<p>‚ведите числа с картинки: <br>
		<?php 
		$i=1;
		do
		{
		$num[$i] = mt_rand(0,9);
		echo "<img src='images/".$num[$i].".gif' border='0' align='bottom' vspace='5px' class='captcha'>";
		$i++;
		}
		while ($i<6);
		$captcha = $num[1].$num[2].$num[3].$num[4].$num[5];
		?>
<input name="captcha" type="hidden" value="<?php echo $captcha ;?>">