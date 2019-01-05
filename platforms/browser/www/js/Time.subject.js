var Week_Code = 1;
var Add_Limit = 12;

var Is_Check = 1;
var IS_SubjectRegister = 0;

var tc_subject_name = new Array();
var time_code = new Array();  


myApp.onPageInit("Time-subject", function (page) {

    var count = 0;
    var DayName = "Mons";

    var IndexTemp_Mon = 0;
    var IndexTemp_Tues = 0;
    var IndexTemp_Wednes = 0;
    var IndexTemp_Thurs = 0;
    var IndexTemp_Fri = 0;

    $(document).ready(function () {

        for (var i = 0; i < Add_Limit ; i++) {
            tc_subject_name[i] = "";
            
            console.log(tc_subject_name[i]);
        }

        for (var i = 0; i < Add_Limit ; i++) {
            time_code[i] = 0;

            console.log(time_code[i]);
        }

    });


    $$('#btn-Save').on('click', function () {
        mainView.router.loadPage('home.default.html');
        SelectSubjectList();
        $('#Subject-Null').hide();
        
        IS_SubjectRegister = 1;

    });

    $$('#btn-Save').on('click', function () {

        for(var i = 0 ; i<count; i++){
            if(i == count){
                S_Execusion1+i();

                console.log(i);
                break;

            }else{

            }
            
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
            time_code[0] = 9;
            tc_subject_name[0] = $$("#" + DayName + "_Subject_" + 1).val();

            S_insertSubject1();
        }

        function S_Input2() {
            time_code[1] = 10;
            tc_subject_name[1] = $$("#" + DayName + "_Subject_" + 2).val();

            S_insertSubject2();
        }

        function S_Input3() {
            time_code[2] = 11;
            tc_subject_name[2] = $$("#" + DayName + "_Subject_" + 3).val();
           
            console.log(tc_subject_name[2]);
            console.log(time_code[2]);

            S_insertSubject3();
        }

        function S_Input4() {
            time_code[3] = 12;
            tc_subject_name[3] = $$("#" + DayName + "_Subject_" + 4).val();

            S_insertSubject4();
        }

        function S_Input5() {
            time_code[4] = 13;
            tc_subject_name[4] = $$("#" + DayName + "_Subject_" + 5).val();

            S_insertSubject5();
        }

        function S_Input6() {
            time_code[5] = 14;
            tc_subject_name[5] = $$("#" + DayName + "_Subject_" + 6).val();

            S_insertSubject6();
        }

        function S_Input7() {
            time_code[6] = 15;
            tc_subject_name[6] = $$("#" + DayName + "_Subject_" + 7).val();

            S_insertSubject7();
        }

        function S_Input8() {
            time_code[7] = 16;
            tc_subject_name[7] = $$("#" + DayName + "_Subject_" + 8).val();

            S_insertSubject8();
        }

        function S_Input9() {
            time_code[8] = 17;
            tc_subject_name[8] = $$("#" + DayName + "_Subject_" + 9).val();

            S_insertSubject9();
        }

        function S_Input10() {
            time_code[9] = 18;
            tc_subject_name[9]= $$("#" + DayName + "_Subject_" + 10).val();

            S_insertSubject10();
        }

        function S_Input11() {
            time_code[10] = 19;
            tc_subject_name[10] = $$("#" + DayName + "_Subject_" + 11).val();

            S_insertSubject11();
        }

        function S_Input12() {
            time_code[11] = 20;
            tc_subject_name[11] = $$("#" + DayName + "_Subject_" + 12).val();

            S_insertSubject12();
        }

        function S_Input13() {
            time_code[12] = 21;
            tc_subject_name[12] = $$("#" + DayName + "_Subject_" + 13).val();

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


    function AddContent(DayName, count, DayName){
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
    }

    function SubContent(DayName, count, List_Day){
        var html = "";

        html += "<li class='item-content id='" + List_Day + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + "교시</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#" + DayName).show();
        $$("#" + DayName + "_List_" + count).remove(html);
    }
   


    $$("#btn_Add_MonContent").on('click', function () {
        count += 1;

        IndexTemp_Mon = count;

        if(count == (Add_Limit + 1)){
            myApp.alert(Add_Limit + "교시까지 입력하실 수 있습니다.");
            count = Add_Limit;

        }else{

            AddContent(DayName, count, DayName);
            
        }

    });

     

    $$("#btn_Sub_MonContent").on('click', function () {
        var List_Day ="Mons_List";
        
        SubContent(DayName, count, List_Day);

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

        IndexTemp_Tues = count;
       
        if(count == (Add_Limit + 1)){
            myApp.alert(Add_Limit + "교시까지 입력하실 수 있습니다.");
            count = Add_Limit;

        }else{

            AddContent(DayName, count, DayName);
            
        }
    });

    $$("#btn_Sub_TuesContent").on('click', function () {
        var List_Day ="Tues_List";
        
        SubContent(DayName, count, List_Day);

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

        IndexTemp_Wednes = count;

        if(count == (Add_Limit + 1)){
            myApp.alert(Add_Limit + "교시까지 입력하실 수 있습니다.");
            count = Add_Limit;

        }else{

            AddContent(DayName, count, DayName);
            
        }
    });

    $$("#btn_Sub_WednesContent").on('click', function () {
        var List_Day ="Wednes_List";
        
        SubContent(DayName, count, List_Day);


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

        IndexTemp_Thurs = count;

        if(count == (Add_Limit + 1)){
            myApp.alert(Add_Limit + "교시까지 입력하실 수 있습니다.");
            count = Add_Limit;

        }else{

            AddContent(DayName, count, DayName);
            
        }
    });

    $$("#btn_Sub_ThursContent").on('click', function () {
        var List_Day ="Thurs_List";
        
        SubContent(DayName, count, List_Day);


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

        IndexTemp_Fri = count;

        if(count == (Add_Limit + 1)){
            myApp.alert(Add_Limit + "교시까지 입력하실 수 있습니다.");
            count = Add_Limit;

        }else{

            AddContent(DayName, count, DayName);
            
        }

    });

    $$("#btn_Sub_FrisContent").on('click', function () {
        var List_Day ="Fri_List";
        
        SubContent(DayName, count, List_Day);


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
