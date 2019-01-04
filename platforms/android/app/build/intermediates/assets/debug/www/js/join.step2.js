myApp.onPageInit('join-step2', function (page) {
    var useParent = "no";

    $('#joinForm #phone').mask('000-0000-0000');
    $('#joinForm #parentPhone').mask('000-0000-0000');

    // 보호자가 사용시 체크
    $$("#iconParentUse").on('click', function() {
        if (useParent == "no") {
            $$("#iconParentUse").html('<i class="material-icons">check</i>');            
            $$("#parentPhoneInput").show();
            useParent = "yes";
        } else {
            $$("#iconParentUse").html('<i class="material-icons">check_box_outline_blank</i>');            
            $$("#parentPhoneInput").hide();
            $("#joinForm #parentPhone").val('');
            useParent = "no";
        }
    });

    // 회원 가입
    $$("#btnGotoJoinStep3").on('click', function() {
        joinUser(useParent);
    });
});

// 회원가입
function joinUser(useParent) {
    // 이름 검사
    if ( !$$('#joinForm #name').val() ) {
        myApp.alert("이름을 입력해주세요.", "PayN");
    } else if ( $('#joinForm #name').val().length < 2 || $('#joinForm #name').val().length > 4 ) {
        myApp.alert("이름은 2글자 이상 4글자 이하로 입력해 주세요.", "PayN");
    }

    // 이메일 검사
    else if ( !$$("#joinForm #email").val() ) {
        myApp.alert("이메일을 입력해주세요.", "PayN");
    } else if ( !regEmail.test($("#joinForm #email").val()) ) {
        myApp.alert("이메일 형식이 올바르지 않습니다.", "PayN");
    } 

    // 학생 전화번호 검사
    else if ( !$$("#joinForm #phone").val() ) {
        myApp.alert("학생 전화번호를 입력해 주세요.", "PayN");
    } 

    // 부모님 전화번호 검사
    else if ( useParent == "yes" && !$("#joinForm #parentPhone").val() ) {
        myApp.alert("부모님 전화번호를 입력해 주세요.", "PayN");
    } else if ( useParent == "yes" && $("#joinForm #phone").val() == $("#joinForm #parentPhone").val() ) {
        myApp.alert("학생 전화번호와 부모님 전화번호가 동일합니다. 다시 확인해 주세요.", "PayN");
    } 

    // 비밀번호 검사
    else if ( !$$('#joinForm #passwd').val() ) {
        myApp.alert("비밀번호를 입력해주세요.", "PayN");
    } else if ( !$$('#joinForm #passwd2').val() ) {
        myApp.alert("비밀번호 확인을 입력해주세요.", "PayN");
    } else if ( $$('#joinForm #passwd').val() != $$('#joinForm #passwd2').val() ) {
        myApp.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.", "PayN");
    } else if ( $('#joinForm #passwd').val().length < 6 || $('#joinForm #name').val().length > 20 ) {
        myApp.alert("비밀번호는 6글자 이상 20글자 이하로 입력해 주세요.", "PayN");
    }

    else { 
        mainView.router.loadPage('join.step3.html');
    }   
}