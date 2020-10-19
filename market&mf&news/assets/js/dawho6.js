(function ($) {
  // 2004 tomato 因為每頁共用所以從 aosInit.securejs 移植
  AOS.init({
    startEvent: 'load',
  });

  // 設定網站公告
  //109.9.13 (日) 02:00～06:00
  var now = Math.floor(Date.now() / 1000);
  var endTime = Math.floor(new Date('2020-09-13 06:00:00').getTime() / 1000);
  if (endTime > now) {
    getAnnounce();
  }
  function getAnnounce() {
    // announce lightbox
    if (getCookie('dawhoAnnounce') === undefined) {
      $.get('/js/announces/announce01.securejs?v=200908', function (data) {
        var lbox_height;
        $('body').append(data);
        $('.lboxed .close').on('click', function () {
          setCookie();
          // $('.lboxed, .lboxed--overlay').remove();
          // $('.lboxed, .lboxed--overlay').css({ 'display': 'none' });
          $(this).parents('.lboxed').css({ 'display': 'none' });
          $(this).parents('.lboxed').siblings('.lboxed--overlay').css({ 'display': 'none' });
        });
        lightbox_overflow();
        $(window).resize(function () {
          lightbox_overflow();
        });
      });
    }
  }

  function setCookie() {
    expire_days = 1;
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "dawhoAnnounce=01" + "; " + expires + ';path=/';
  }

  function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split("=");
      if (temp[0] == objName) return unescape(temp[1]);
    }
  }

  // scroll event
  $(document).scroll(function () {
    // menu scroll fix
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= 20) {
      $('.head').addClass('head_active');
    }
    if (scrollTop < 20) {
      $('.head').removeClass('head_active');
    }
    // fix btn
    if (scrollTop >= 500) {
      $('#fix_btn').addClass('fix_btn_active');
    }
    if (scrollTop < 500) {
      $('#fix_btn').removeClass('fix_btn_active');
    }
  });

  // click event
  $('.open-lbox').click(function (e) {
    e.preventDefault();
    var $lboxid = $(this).data('lboxid');
    var $linkname = $(this).data('linkname');
    var $link = $(this).data('link');
    openlbox($lboxid, $linkname, $link);
  });

  // Get script path
  var curScriptElement = document.currentScript; 

  function openlbox($lboxid, $linkname, $link) {
    var url = location.href;
    var g_url = '/js/announces/lightbox.securejs';
    if (url.indexOf('https://bank.sinopac.com/') != -1) {
      g_url = '../../js/announces/lightbox.securejs';
    } else if (url.indexOf('dawho/dawho_tw') != -1) { // for test
      var scriptPath = curScriptElement.src;
      var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' ) +1 );
      g_url = scriptFolder + 'announces/lightbox.securejs';
    }    
    $.get(g_url, function (data) {
      var lbox_height;
      $('body').append(data);
      $('#linkname').text($linkname);
      $('#link').attr("href", $link);
      $('.lboxed .close').on('click', function () {
        $('.lboxed, .lboxed--overlay').remove();
      });
      lightbox_overflow();
      $(window).resize(function () {
        lightbox_overflow();
      });
    });
  }

  function lightbox_overflow() {
    lbox_height = $('.lboxed__outer > div').outerHeight();
    if ($(window).height() < lbox_height) {
      $('.lboxed__outer, .lboxed').css('height', '100%');
    } else {
      $('.lboxed__outer, .lboxed').css('height', '');
    }
  }

  $('.goto').on('click', function (e) {
    e.preventDefault();
    var gotoid = $(this).data('gotoid');
    var offset = $(this).data('gotooffset') || 0;
    $('html, body').animate({
      scrollTop: $(gotoid).offset().top - $('header').outerHeight() - offset
    }, 500);
  });

  // 2004 tomato 因為每頁共用所以從 kvScrollto.securejs 移植
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
    }
  });

  // 立即下載
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    // 手機裝置
    $('#footer_download_apple').on('click', function () {
      var chromeAgent = navigator.userAgent.match('CriOS');
      if (chromeAgent) {
        // ios chrome 不能另開視窗
        $(this).attr('target', '_self')
      }
    })
  }
  else {
    // PC 取消按鈕點擊
    $('#footer_download_apple').attr('href', 'javascript:void(0)').attr('target', '_self').css('cursor', 'default');
    $('#footer_download_google').attr('href', 'javascript:void(0)').attr('target', '_self').css('cursor', 'default');
  }
})($);