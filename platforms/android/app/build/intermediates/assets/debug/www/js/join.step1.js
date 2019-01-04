myApp.onPageInit('join-step1', function(page){
    //체크박스 체크 상태 초기화
    var agree1 = false;
    var agree2 = false;
    var agree3 = false;

    //jQuery를 이용한 slimScroll() 사용 -> div 태그 height를 180px로 초기화
    $('#agreeBox1').slimScroll({
        height: '180px'
    });
    $('#agreeBox2').slimScroll({
        height: '180px'
    });
    $('#agreeBox3').slimScroll({
        height: '180px'
    });

    $$('#iconAgree1').on('click', function(){
        if(agree1 == true){
            agree1 = false;
            $$('#iconAgree1').html('<i class="material-icons">check_box_outline_blank</i>');
            $('#agreeBox1').slimScroll({
                height: '180px'
            });

        }else{
            agree1 = true;
            $$('#iconAgree1').html('<i class="material-icons">check</i>');
            $('#agreeBox1').slimScroll({
                height: '50px'
            });

        }
    });
    $$('#iconAgree2').on('click', function(){
        if(agree2 == true){
            agree2 = false;
            $$('#iconAgree2').html('<i class="material-icons">check_box_outline_blank</i>');
            $('#agreeBox2').slimScroll({
                height: '180px'
            });

        }else{
            agree2 = true;
            $$('#iconAgree2').html('<i class="material-icons">check</i>');
            $('#agreeBox2').slimScroll({
                height: '50px'
            });
        }
    });
    $$('#iconAgree3').on('click', function(){
        if(agree3 == true){
            agree3 = false;
            $$('#iconAgree3').html('<i class="material-icons">check_box_outline_blank</i>');
            $('#agreeBox3').slimScroll({
                height: '180px'
            });

        }else{
            agree3 = true;
            $$('#iconAgree3').html('<i class="material-icons">check</i>');
            $('#agreeBox3').slimScroll({
                height: '50px'
            });

        }
    });

    $$('#btnGotoJoinStep2').on('click', function(){
        if(!agree1 || !agree2 || !agree3){
            myApp.alert("회원등록을 위해서는 서비스 이용 및 정보 수집에 동의해 주셔야 합니다.'Eye Memo'");
        }else{
            //mainView.router.loadPage('join.step2.html');
        }
    });



});

