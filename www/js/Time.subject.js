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
            
            console.log("tc_subject_name : " +tc_subject_name[i]);
        }

        for (var i = 0; i < Add_Limit ; i++) {
            time_code[i] = 0;

            console.log("time_code : " +time_code[i]);
        }

    });


    $$('#btn-Save').on('click', function () {
        mainView.router.loadPage('home.default.html');
        SelectSubjectList();
        $('#Subject-Null').hide();
        
        IS_SubjectRegister = 1;

    });

   

    $$('#btn-Save').on('click', function () {
        //var k = 1;
        console.log(count);

        for (var i = 0; i < count; i++) {
            if(count == (i+1)){
                ValueInput(count);
                console.log("for문 : PASS"+ (i+1));
            }
            
        }


        if(count == k){

            ValueInput(count);
            console.log("PASS"+ (k));

        }else if(count == (k + 1)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 1));

        }else if(count == (k + 2)){
            
            ValueInput(count); 
            console.log("PASS"+ (k + 2));
            
        }else if(count == (k + 3)){
           
            ValueInput(count);
            console.log("PASS"+ (k + 3));

        }else if(count == (k + 4)){
           
            ValueInput(count);
            console.log("PASS"+ (k + 4));

        }else if(count == (k + 5)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 5));

        }else if(count == (k + 6)){
           
            ValueInput(count);
            console.log("PASS"+ (k + 6));

        }else if(count == (k + 7)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 7));

        }else if(count == (k + 8)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 8));

        }else if(count == (k + 9)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 9));

        }else if(count == (k + 10)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 10));

        }else if(count == (k + 11)){
            
            ValueInput(count);
            console.log("PASS"+ (k + 11));

        }else if(count == (k + 12)){
           
            ValueInput(count);
            console.log("PASS"+ (k + 12));

        }else{

        }


        function ValueInput(count){
           
            for (let i = 0; i < count; i++) {
                time_code[i] = 9 + i;
                tc_subject_name[i] = $$("#" + DayName + "_Subject_" + (i+1)).val();

                console.log("PASS"+ (i+1));

                console.log("Time_code[Content] : " + time_code[i]);
                console.log("Subject_name[Content] : " + tc_subject_name[i]);
            }
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
