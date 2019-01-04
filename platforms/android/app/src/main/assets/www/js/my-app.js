// Initialize app
var myApp = new Framework7({
    modalTitle: 'Eye Memo', // Default title for modals (Alert, Confirm, Prompt)
    material: true,         // enable Material theme
    template7Pages: true,    // enable Template7 rendering for Ajax and Dynamic pages
    cashe: false,           // disable caching. As Framework7 uses Ajax to load HTML content for pages it is good to use caching, especially if your content in those pages updates not very often.
});

// 정규식 - 이메일 유효성 검사
var regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; 

// 정규식 - 전화번호 유효성 검사
var regPhone = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    var isChecked = 1;
    
    // 로그인 상태 확인
    if ( isChecked ) {
        mainView.router.loadPage('home.default.html');
    } else {
        mainView.router.loadPage('login.html');
    }
});