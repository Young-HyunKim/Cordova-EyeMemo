myApp.onPageInit('login', function(page){
    //이메일 텍스트, 비밀번호 텍스트 초기화
    $$('#loginForm #email').val('');
    $$('#loginForm #passwd').val('');
    

    //로그인
    $$('#btnLogin').on('click', function(){
        login();
    });

    //사용자등록
    $$('#btnJoin').on('click', function(){
        mainView.router.loadPage('join.step1.html');
    });
});

//로그인 함수
function login(){
    if( !$$('#loginForm #email').val() ){
        myApp.alert('이메일을 입력해주세요.', 'Eye Memo');
    }else if( !$$('#loginForm #passwd').val() ){
        myApp.alert('비밀번호를 입력해주세요.', 'Eye Memo');
    }else{
        myApp.alert('이메일과 비밀번호를 입력하였습니다.', 'Eye Memo');
    }
}


















