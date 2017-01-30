<?php

br()
  ->request()
    ->route('/logout', function() {
      br()->auth()->clearLogin();
      br()->response()->redirect('home');
    })
    ->route('/admkontakty', function() {
      if ($login = br()->auth()->getLogin()) {
        if ($login['isSuperAdmin']) {
          br()->config()->set('page-title', 'Настройка контактов');
          br()->renderer()->display('admkontakty.html');
        } else {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kabinet.html');
        }
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/content', function() {
      if ($login = br()->auth()->getLogin()) {
        if ($login['isSuperAdmin']) {
          br()->config()->set('page-title', 'Контент сайта');
          br()->renderer()->display('content.html');
        } else {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kabinet.html');
        }
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/city', function() {
      if ($login = br()->auth()->getLogin()) {
        if ($login['isSuperAdmin']) {
          br()->config()->set('page-title', 'Города');
          br()->renderer()->display('city.html');
        } else {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kabinet.html');
        }
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/users', function() {
      if ($login = br()->auth()->getLogin()) {
        if ($login['isPower']) {
          br()->config()->set('page-title', 'Пользователи');
          br()->renderer()->display('users.html');
        } else {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kabinet.html');
        }
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/kt', function() {
      if ($login = br()->auth()->getLogin()) {
        if ($login['isPower']) {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kt.html');
        } else {
          br()->config()->set('page-title', 'KT');
          br()->renderer()->display('kabinet.html');
        }
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/kabinet', function() {
      if ($login = br()->auth()->getLogin()) {
        br()->config()->set('page-title', 'KT');
        br()->renderer()->display('kabinet.html');
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/profile', function() {
      if ($login = br()->auth()->getLogin()) {
        br()->config()->set('page-title', 'Мой профиль пользователя');
        br()->renderer()->display('profile.html');
      } else {
        br()->config()->set('page-title', 'Вход в кабинет');
        br()->renderer()->display('sign-up.html');
      }
    })
    ->route('/zapis', function() {
      br()->config()->set('page-title', 'Запись на приём');
      br()->renderer()->display('zapis.html');
    })
    ->route('/sign-up', function() {
      br()->config()->set('page-title', 'Вход в кабинет');
      br()->renderer()->display('sign-up.html');
    })
    ->route('/kontakty', function() {
      br()->config()->set('page-title', 'Адреса 3D центров');
      br()->renderer()->display('kontakty.html');
    })
    ->route('/obuchenie', function() {
      br()->config()->set('page-title', 'Обучение');
      br()->renderer()->display('obuchenie.html');
    })
    ->route('/instruktsiya', function() {
      br()->config()->set('page-title', 'Инструкция кратко к программе Еz3D2009');
      br()->renderer()->display('instruktsiya.html');
    })
    ->route('/video-kurs', function() {
      br()->config()->set('page-title', 'Видео курс к программе Еz3D2009');
      br()->renderer()->display('video-kurs.html');
    })
    ->route('/klinicheskie-sluchai', function() {
      br()->config()->set('page-title', 'Клинические случаи');
      br()->renderer()->display('klinicheskie-sluchai.html');
    })
    ->route('/chto-zhe-skryto-ot-glaz-stomatologa', function() {
      br()->config()->set('page-title', 'Что же скрыто от глаз стоматолога?');
      br()->renderer()->display('chto-zhe-skryto-ot-glaz-stomatologa.html');
    })
    ->route('/terapevtam', function() {
      br()->config()->set('page-title', 'Терапевтам');
      br()->renderer()->display('terapevtam.html');
    })
    ->route('/khirurgam-implantologam', function() {
      br()->config()->set('page-title', 'Хирургам-имплантологам');
      br()->renderer()->display('khirurgam-implantologam.html');
    })
    ->route('/chelyustno-litsevym-khirurgam', function() {
      br()->config()->set('page-title', 'Челюстно-лицевым хирургам');
      br()->renderer()->display('chelyustno-litsevym-khirurgam.html');
    })
    ->route('/parodontologam', function() {
      br()->config()->set('page-title', 'Пародонтологам');
      br()->renderer()->display('parodontologam.html');
    })
    ->route('/ortopedam', function() {
      br()->config()->set('page-title', 'Ортопедам');
      br()->renderer()->display('ortopedam.html');
    })
    ->route('/ortodontam', function() {
      br()->config()->set('page-title', 'Ортодонтам');
      br()->renderer()->display('ortodontam.html');
    })
    ->route('/loram', function() {
      br()->config()->set('page-title', 'ЛОРам');
      br()->renderer()->display('loram.html');
    })
    ->route('/patsientam', function() {
      br()->config()->set('page-title', 'Пациентам');
      br()->renderer()->display('patsientam.html');
    })
    ->route('/chto-zhe-takoe-3d-kt', function() {
      br()->config()->set('page-title', 'Что же такое 3D КТ?');
      br()->renderer()->display('chto-zhe-takoe-3d-kt.html');
    })
    ->route('/bystro-i-bezopasno', function() {
      br()->config()->set('page-title', 'Быстро и безопасно');
      br()->renderer()->display('bystro-i-bezopasno.html');
    })
    ->route('/home', function() {
      br()->config()->set('page-title', '3D Center');
      br()->renderer()->display('index.html');
    })
    ->route('/index', function() {
      br()->config()->set('page-title', '3D Center');
      br()->renderer()->display('index.html');
    })
    ->route('/upload-image', function() {
      require_once(__DIR__ . '/UploadImageMy.php');
      $res = UploadImageMy::uploadFile($_FILES['upload']);
      $callback = $_REQUEST['CKEditorFuncNum'];
      echo '<script type="text/javascript">window.parent.CKEDITOR.tools.callFunction("'.$callback.'", "'.$res['full_path'].'", "'.$res['message'].'" );</script>';

    })
    ->routeIndex(function()  {
      br()->config()->set('page-title', '3D Center');
      br()->renderer()->display('index.html');
    })
    // ->route('/', function() {
    //   br()->config()->set('page-title', '3D Center');
    //   br()->renderer()->display('index.html');
    // })
    ->routeDefault()
;
