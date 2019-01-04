var subject_code = "";
var subject_name = "";

var subject_code_1 = "";
var subject_name_1 = "";

var subject_code_2 = "";
var subject_name_2 = "";

var subject_code_3 = "";
var subject_name_3 = "";

var subject_code_4 = "";
var subject_name_4 = "";

var subject_code_5 = "";
var subject_name_5 = "";

var subject_code_6 = "";
var subject_name_6 = "";

var subject_code_7 = "";
var subject_name_7 = "";

var subject_code_8 = "";
var subject_name_8 = "";

var subject_code_9 = "";
var subject_name_9 = "";

var subject_code_10 = "";
var subject_name_10 = "";

var subject_code_11 = "";
var subject_name_11 = "";

var subject_code_12 = "";
var subject_name_12 = "";


myApp.onPageInit("Register-Subject", function (page) {

    var count = 0;
    var IndexTemp = 0;

    $('#Subject_List').slimScroll({
        height: '360px'
    });

    $$('#back').on('click', function () {
        mainView.router.loadPage('home.default.html');
        SelectSubjectList();
    });
    

    

    $$('#S_save').on('click', function () {
        switch (count) {
            case 1: Execusion1();
                break;

            case 2: Execusion2();
                break;

            case 3: Execusion3();
                break;

            case 4: Execusion4();
                break;

            case 5: Execusion5();
                break;

            case 6: Execusion6();
                break;

            case 7: Execusion7();
                break;

            case 8: Execusion8();
                break;

            case 9: Execusion9();
                break;

            case 10: Execusion10();
                break;

            case 11: Execusion11();
                break;

            case 12: Execusion12();
                break;

        }

        function Execusion1(){
            Input1();
        }

        function Execusion2(){
            Input1();
            Input2();
        }

        function Execusion3(){
            Input1();
            Input2();
            Input3();
        }

        function Execusion4(){
            Input1();
            Input2();
            Input3();
            Input4();
        }

        function Execusion5(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
        }
        
        function Execusion6(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
        }

        function Execusion7(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
        }

        function Execusion8(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
            Input8();
        }

        function Execusion9(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
            Input8();
            Input9();
        }

        function Execusion10(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
            Input8();
            Input9();
            Input10();
        }

        function Execusion11(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
            Input8();
            Input9();
            Input10();
            Input11();
        }

        function Execusion12(){
            Input1();
            Input2();
            Input3();
            Input4();
            Input5();
            Input6();
            Input7();
            Input8();
            Input9();
            Input10();
            Input11();
            Input12();
        }

        
        function Input1() {
            subject_code_1 = "" + 1;
            subject_name_1 = $$("#" + "Subject_" + 1).val();

            insertSubject1();
        }

        function Input2() {
            subject_code_2 = "" + 2;
            subject_name_2 = $$("#" + "Subject_" + 2).val();

            insertSubject2();
        }

        function Input3() {
            subject_code_3 = "" + 3;
            subject_name_3 = $$("#" + "Subject_" + 3).val();

            insertSubject3();
        }

        function Input4() {
            subject_code_4 = "" + 4;
            subject_name_4 = $$("#" + "Subject_" + 4).val();

            insertSubject4();
        }

        function Input5() {
            subject_code_5 = "" + 5;
            subject_name_5 = $$("#" + "Subject_" + 5).val();

            insertSubject5();
        }

        function Input6() {
            subject_code_6 = "" + 6;
            subject_name_6 = $$("#" + "Subject_" + 6).val();

            insertSubject6();
        }

        function Input7() {
            subject_code_7 = "" + 7;
            subject_name_7 = $$("#" + "Subject_" + 7).val();

            insertSubject7();
        }

        function Input8() {
            subject_code_8 = "" + 8;
            subject_name_8 = $$("#" + "Subject_" + 8).val();

            insertSubject8();
        }

        function Input9() {
            subject_code_9 = "" + 9;
            subject_name_9 = $$("#" + "Subject_" + 9).val();

            insertSubject9();
        }

        function Input10() {
            subject_code_10 = "" + 10;
            subject_name_10 = $$("#" + "Subject_" + 10).val();

            insertSubject10();
        }

        function Input11() {
            subject_code_11 = "" + 11;
            subject_name_11 = $$("#" + "Subject_" + 11).val();

            insertSubject11();
        }

        function Input12() {
            subject_code_12 = "" + 12;
            subject_name_12 = $$("#" + "Subject_" + 12).val();

            insertSubject12();
        }

        mainView.router.loadPage('Time.subject.html');
    });


    $$("#btn_Add_Content").on('click', function () {
        count += 1;

        if(count == 13){
            myApp.alert("최대 12개 까지 입력하실 수 있습니다.");
            count=12;
        }

        IndexTemp = count;
        var html = "";

        html += "<li class='item-content' id='" + "List_" + count + "'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + ".</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' id='" + "Subject_" + count + "' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#Subject").show();
        $$("#Subject").append(html);

    });


    $$("#btn_Sub_Content").on('click', function () {
        var html = "";

        html += "<li class='item-content id='Subject_List'>"
            + "<div class='item-inner'>"
            + "<div class='item-title label'>" + count + ".</div>"
            + "<div class='item-input'>"
            + "<input type='text' name='title' placeholder='일정을 입력하세요.'>"
            + "</div>"
            + "</div>"
            + "</li>"

        $$("#Subject").show();
        $$("#" + "List_" + count).remove(html);


        if (count == 0) {
            count = 0;
            IndexTemp = count;
        } else {
            count -= 1;
            IndexTemp = count;
        }

    });

});