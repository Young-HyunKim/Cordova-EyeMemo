var Week_Code = 1;
var Is_Check = 1;


var IS_SubjectRegister = 0;

var tc_subject_name_1 = "";
var tc_subject_name_2 = "";
var tc_subject_name_3 = "";
var tc_subject_name_4 = "";
var tc_subject_name_5 = "";
var tc_subject_name_6 = "";
var tc_subject_name_7 = "";
var tc_subject_name_8 = "";
var tc_subject_name_9 = "";
var tc_subject_name_10 = "";
var tc_subject_name_11 = "";
var tc_subject_name_12 = "";
var tc_subject_name_13 = "";

var time_code_1 = 0;
var time_code_2 = 0;
var time_code_3 = 0;
var time_code_4 = 0;
var time_code_5 = 0;
var time_code_6 = 0;
var time_code_7 = 0;
var time_code_8 = 0;
var time_code_9 = 0;
var time_code_10 = 0;
var time_code_11 = 0;
var time_code_12 = 0;
var time_code_13 = 0;

myApp.onPageInit("Time-subject", function (page) {

    var count = 0;
    var DayName = "Mons";

    var IndexTemp_Mon = 0;
    var IndexTemp_Tues = 0;
    var IndexTemp_Wednes = 0;
    var IndexTemp_Thurs = 0;
    var IndexTemp_Fri = 0;

    $$('#btn-Save').on('click', function () {
        mainView.router.loadPage('home.default.html');
        SelectSubjectList();
        $('#Subject-Null').hide();
        
        IS_SubjectRegister = 1;

    });

    $$('#btn-Save').on('click', function () {

        switch (count) {
            case 1: S_Execusion1();
                break;

            case 2: S_Execusion2();
                break;

            case 3: S_Execusion3();
                break;

            case 4: S_Execusion4();
                break;

            case 5: S_Execusion5();
                break;

            case 6: S_Execusion6();
                break;

            case 7: S_Execusion7();
                break;

            case 8: S_Execusion8();
                break;

            case 9: S_Execusion9();
                break;

            case 10: S_Execusion10();
                break;

            case 11: S_Execusion11();
                break;

            case 12: S_Execusion12();
                break;

            case 13: S_Execusion13();
                break;

        }

        function S_Execusion1(){
            S_Input1();
        }

        function S_Execusion2(){
            S_Input1();
            S_Input2();
        }

        function S_Execusion3(){
            S_Input1();
            S_Input2();
            S_Input3();
        }

        function S_Execusion4(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
        }

        function S_Execusion5(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
        }
        
        function S_Execusion6(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
        }

        function S_Execusion7(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
        }

        function S_Execusion8(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
        }

        function S_Execusion9(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
            S_Input9();
        }

        function S_Execusion10(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
            S_Input9();
            S_Input10();
        }

        function S_Execusion11(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
            S_Input10();
            S_Input11();
        }

        function S_Execusion12(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
            S_Input9();
            S_Input10();
            S_Input11();
            S_Input12();
        }

        function S_Execusion13(){
            S_Input1();
            S_Input2();
            S_Input3();
            S_Input4();
            S_Input5();
            S_Input6();
            S_Input7();
            S_Input8();
            S_Input9();
            S_Input10();
            S_Input11();
            S_Input12();
            S_Input13();
        }

        function S_Input1() {
            time_code_1 = 9;
            tc_subject_name_1 = $$("#" + DayName + "_Subject_" + 1).val();

            S_insertSubject1();
        }

        function S_Input2() {
            time_code_2 = 10;
            tc_subject_name_2 = $$("#" + DayName + "_Subject_" + 2).val();

            S_insertSubject2();
        }

        function S_Input3() {
            time_code_3 = 11;
            tc_subject_name_3 = $$("#" + DayName + "_Subject_" + 3).val();

            S_insertSubject3();
        }

        function S_Input4() {
            time_code_4 = 12;
            tc_subject_name_4 = $$("#" + DayName + "_Subject_" + 4).val();

            S_insertSubject4();
        }

        function S_Input5() {
            time_code_5 = 13;
            tc_subject_name_5 = $$("#" + DayName + "_Subject_" + 5).val();

            S_insertSubject5();
        }

        function S_Input6() {
            time_code_6 = 14;
            tc_subject_name_6 = $$("#" + DayName + "_Subject_" + 6).val();

            S_insertSubject6();
        }

        function S_Input7() {
            time_code_7 = 15;
            tc_subject_name_7 = $$("#" + DayName + "_Subject_" + 7).val();

            S_insertSubject7();
        }

        function S_Input8() {
            time_code_8 = 16;
            tc_subject_name_8 = $$("#" + DayName + "_Subject_" + 8).val();

            S_insertSubject8();
        }

        function S_Input9() {
            time_code_9 = 17;
            tc_subject_name_9 = $$("#" + DayName + "_Subject_" + 9).val();

            S_insertSubject9();
        }

        function S_Input10() {
            time_code_10 = 18;
            tc_subject_name_10 = $$("#" + DayName + "_Subject_" + 10).val();

            S_insertSubject10();
        }

        function S_Input11() {
            time_code_11 = 19;
            tc_subject_name_1 = $$("#" + DayName + "_Subject_" + 11).val();

            S_insertSubject11();
        }

        function S_Input12() {
            time_code_12 = 20;
            tc_subject_name_1 = $$("#" + DayName + "_Subject_" + 12).val();

            S_insertSubject12();
        }

        function S_Input13() {
            time_code_12 = 21;
            tc_subject_name_1 = $$("#" + DayName + "_Subject_" + 13).val();

            S_insertSubject13();
        }


    });

    
    $('#Mons_List').slimScroll({
        height: '360px'
    });

    $('#Tues_List').slimScroll({
        height: '360px'
    });

    $('#Wednes_List').slimScroll({
        height: '360px'
    });

    $('#Thurs_List').slimScroll({
        height: '360px'
    });

    $('#Fri_List').slimScroll({
        height: '360px'
    });


    $$('#btn_Monday').on('click', function () {
        DayName = "Mons";
        Week_Code = 1;
        count = IndexTemp_Mon;
    });

    $$('#btn_Tuesday').on('click', function () {
        DayName = "Tues";
        Week_Code = 2;
        count = IndexTemp_Tues;
    });

    $$('#btn_Wednesday').on('click', function () {
        DayName = "Wednes";
        Week_Code = 3;
        count = IndexTemp_Wednes;
    });

    $$('#btn_Thursday').on('click', function () {
        DayName = "Thurs";
        Week_Code = 4;
        count = IndexTemp_Thurs;
    });

    $$('#btn_Friday').on('click', function () {
        DayName = "Fris";
        Week_Code = 5;
        count = IndexTemp_Fri;
    });




    $$("#btn_Add_MonContent").on('click', function () {
        count += 1;
        
        if(count == 13){
            myApp.alert("최대 12교시 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp_Mon = count;
        var html = "";

        html += "<li class='item-content' id='" + DayName + "_List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + DayName + "_Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName).append(html);
    });

    $$("#btn_Sub_MonContent").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Mons_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);


        if (count == 0) {
            count = 0;
            IndexTemp_Mon = count;
        } else {
            count -= 1;
            IndexTemp_Mon = count;
        }

    });


    $$("#btn_Add_TuesContent").on('click', function () {
        count += 1;

        if(count == 12){
            myApp.alert("최대 12교시 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp_Tues = count;
        var html = "";

        html += "<li class='item-content' id='" + DayName + "_List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + DayName + "_Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName).append(html);
    });

    $$("#btn_Sub_TuesContent").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Mons_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);

        if (count == 0) {
            count = 0;
            IndexTemp_Tues = count;
        } else {
            count -= 1;
            IndexTemp_Tues = count;
        }

    });


    $$("#btn_Add_WednesContent").on('click', function () {
        count += 1;

        if(count == 12){
            myApp.alert("최대 12교시 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp_Wednes = count;
        var html = "";

        html += "<li class='item-content' id='" + DayName + "_List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + DayName + "_Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName).append(html);
    });

    $$("#btn_Sub_WednesContent").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Mons_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);


        if (count == 0) {
            count = 0;
            IndexTemp_Wednes = count;
        } else {
            count -= 1;
            IndexTemp_Wednes = count;
        }

    });


    $$("#btn_Add_ThursContent").on('click', function () {
        count += 1;

        if(count == 12){
            myApp.alert("최대 12교시 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp_Thurs = count;
        var html = "";

        html += "<li class='item-content' id='" + DayName + "_List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + DayName + "_Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName).append(html);
    });

    $$("#btn_Sub_ThursContent").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Mons_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);


        if (count == 0) {
            count = 0;
            IndexTemp_Thurs = count;
        } else {
            count -= 1;
            IndexTemp_Thurs = count;
        }

    });


    $$("#btn_Add_FrisContent").on('click', function () {
        count += 1;

        if(count == 12){
            myApp.alert("최대 12교시 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp_Fri = count;

        var html = "";

        html += "<li class='item-content' id='" + DayName + "_List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + DayName + "_Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName).append(html);
    });

    $$("#btn_Sub_FrisContent").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Mons_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);


        if (count == 0) {
            count = 0;
            IndexTemp_Fri = count;
        } else {
            count -= 1;
            IndexTemp_Fri = count;
        }

    });


    showScheduleMonday();

    $$('#btn_Monday').on('click', function () {
        showScheduleMonday();
    });

    $$('#btn_Tuesday').on('click', function () {
        showScheduleTuesday();
    });

    $$('#btn_Wednesday').on('click', function () {
        showScheduleWednesday();
    });

    $$('#btn_Thursday').on('click', function () {
        showScheduleThursday();
    });

    $$('#btn_Friday').on('click', function () {
        showScheduleFriday();
    });

});

function showScheduleMonday() {
    $$("#btn_Monday").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_Tuesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Wednesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Thursday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Friday").removeClass('about-color').removeClass('color-red');
}

function showScheduleTuesday() {
    $$("#btn_Tuesday").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_Monday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Wednesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Thursday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Friday").removeClass('about-color').removeClass('color-red');
}

function showScheduleWednesday() {
    $$("#btn_Wednesday").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_Monday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Tuesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Thursday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Friday").removeClass('about-color').removeClass('color-red');
}

function showScheduleThursday() {
    $$("#btn_Thursday").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_Monday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Wednesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Tuesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Friday").removeClass('about-color').removeClass('color-red');
}

function showScheduleFriday() {
    $$("#btn_Friday").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_Monday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Wednesday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Thursday").removeClass('about-color').removeClass('color-red');
    $$("#btn_Tuesday").removeClass('about-color').removeClass('color-red');
}
