<?php

br()
  ->request()
    ->route('/about.html', function() {
      br()->renderer()->display('about.html');
    })
    ->route('/vkhod-v-kabinet', function() {
      br()->config()->set('page-title', 'Вход в кабинет');
      br()->renderer()->display('vkhod-v-kabinet.html');
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
