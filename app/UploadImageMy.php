<?php

class UploadImageMy {

  static function uploadFile($param) {

  	logme($param);

  	$res = array('message' => '', 'full_path' => '');
  	$newName = end(explode(".", $param['name']));

		$name =rand(1, 1000).'-'.md5($param['name']).'.'.$newName;
		move_uploaded_file($param['tmp_name'], "images/".$name);
		$res['full_path'] = br()->request()->host() . br()->request()->baseUrl() . '/images/'.$name;
		$res['message'] = "Файл ".$param['name']." загружен";
		$size=@getimagesize('images/'.$name);
		if($size[0]<50 OR $size[1]<50){
			unlink('images/'.$name);
			$res['message'] = "Файл не является допустимым изображением";
			$res['full_path'] = '';
		}

  }

}

