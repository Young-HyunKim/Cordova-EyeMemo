var NowTime = new Date();
var count = 0;
var CDES_count = 0;
var CD_WeekofDay = 0;
var N_Subject_Name = "의학용어";

var S_Code = "";
var S_Name = "";
var Color_Code = "";

var Subject_List_Code = new Array();

myApp.onPageInit("home-default", function (page) {

    showHomeTabSchedule();
    CurrentDateTime();

    $(document).ready(function () {
        $("#btn-table").css("margin", "0 auto");
        $$("#Subject-Null").css('border', 'solid #E21830');

    });


    $("#SN").css("margin", "0 auto");
    $("#note").css("margin", "0 auto");
    $("#scanner").css("margin", "0 auto");
    $("#timer").css("margin", "0 auto");

    $("#Subject-Null").css('border', 'solid #E21830');
    $("#Note-Null").css('border', 'solid #E21830');
    $("#Pic-Null").css('border', 'solid #E21830');


    $('#Note_List').slimScroll({
        height: '280px'
    });

    $('#Pic_List').slimScroll({
        height: '210px'
    });

    $('#MediaList').slimScroll({
        height: '360px'
    });

    $('#Subject-List').slimScroll({
        height: '360px'
    });


    $$('#btnSearch').on('click', function () {
        Search();
    });

    $$('#btn_schedule').on('click', function () {
        showHomeTabSchedule();
    });

    $$('#btn_home').on('click', function () {
        showHomeTabMain();
    });

    $$('#btn_folder').on('click', function () {
        showHomeTabFolder();
    });

    $$('#btn_setting').on('click', function () {
        showHomeTabsetting();
    });


    var set_CDT = setInterval(ContnetSet, 1000);

    function ContnetSet() {
        var Today = new Date();
        CD_WeekofDay = Today.getDay();

        switch (CD_WeekofDay) {
            case 1: CD_WeekofDay = '월요일';
                break;

            case 2: CD_WeekofDay = '화요일';
                break;

            case 3: CD_WeekofDay = '수요일';
                break;

            case 4: CD_WeekofDay = '목요일';
                break;

            case 5: CD_WeekofDay = '금요일';
                break;

            case 6: CD_WeekofDay = '토요일';
                break;

            case 0: CD_WeekofDay = '일요일';
                break;

        }

        $$("#CurrentWeekOfDay").text(" " + CD_WeekofDay);
        $$("#CurrentDate").text(Today.toLocaleDateString());
        $$("#CurrentTime").text(Today.toLocaleTimeString());
    }


    function CurrentDateTime() {

        var html = "";

        html += "<div class='content-block'>"
            + "<p style='text-align: center; margin-bottom: -5px; margin-top: 10px;'>"
            + "<span id='CurrentDate'> </span>"

            + "<span id='CurrentWeekOfDay'> </span><br>"
            + "</p>"
            + "<h1 style='text-align: center; margin-top: -5px; margin-bottom: 5px;'>"
            + "<span id='CurrentTime'> </span>"
            + "</h1>"
            + "</div>";

        $$("#Now_CDT").show();
        $$("#Now_CDT").append(html);

        $("#Now_CDT").css('border', 'solid #E21830');

    }

    $$('#Search_Subject').on('click', function () {
        N_Subject_Name = $$("#keyword").val();
        console.log("검색 과목명 : " + N_Subject_Name);
        Select_Notes();
    });
});




function showHomeTabSchedule() {
    $$("#btn_schedule").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_home").removeClass('about-color').removeClass('color-red');
    $$("#btn_folder").removeClass('about-color').removeClass('color-red');
    $$("#btn_portal").removeClass('about-color').removeClass('color-red');
    $$("#btn_setting").removeClass('about-color').removeClass('color-red');
}

function showHomeTabMain() {
    $$("#btn_home").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_schedule").removeClass('about-color').removeClass('color-red');
    $$("#btn_folder").removeClass('about-color').removeClass('color-red');
    $$("#btn_portal").removeClass('about-color').removeClass('color-red');
    $$("#btn_setting").removeClass('about-color').removeClass('color-red');
}

function showHomeTabFolder() {
    $$("#btn_folder").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_schedule").removeClass('about-color').removeClass('color-red');
    $$("#btn_home").removeClass('about-color').removeClass('color-red');
    $$("#btn_portal").removeClass('about-color').removeClass('color-red');
    $$("#btn_setting").removeClass('about-color').removeClass('color-red');
}

function showHomeTabsetting() {
    $$("#btn_setting").addClass('about-color').addClass('color-red');    //about-color : 탭 색상, color-brown : 탭 글자 색상
    $$("#btn_schedule").removeClass('about-color').removeClass('color-red');
    $$("#btn_folder").removeClass('about-color').removeClass('color-red');
    $$("#btn_portal").removeClass('about-color').removeClass('color-red');
    $$("#btn_home").removeClass('about-color').removeClass('color-red');
}


function C_selectSuject() {
    db.transaction(function (tr) {
        var C_DayCode = 0;
        var C_Hours = 0;

        var Today = new Date();

        C_DayCode = Today.getDay().toString();
        C_Hours = Today.getHours();


        var selectSQL = 'select tc_subject_name from Schedule where week_code = ? and time_code = ? ';
        tr.executeSql(selectSQL, [C_DayCode, C_Hours], function (tr, rs) {
            console.log("현재 요일 : " + C_DayCode)
            console.log("현재 시간 : " + C_Hours)
            console.log("현재 과목 : " + rs.rows.item(0).tc_subject_name)
            $$("#C_Subject").text(rs.rows.item(0).tc_subject_name);


        }, function (tr, err) {
            alert('DB오류 ' + err.message + err.code);
        }
        );
    });
};


function Select_Notes() {
    $('#Note-Null').hide();
    $('#Pic-Null').hide();
    db.transaction(function (tr) {


        var selectSQL = 'select notes, subject_name from Private_Storage where subject_name = ? ';

        tr.executeSql(selectSQL, [N_Subject_Name], function (tr, rs) {
            console.log(rs.rows.item(0).subject_name + " 노트 검색")
            console.log("노트 내용 : " + rs.rows.item(0).notes)
            console.log("검색 과목 : " + N_Subject_Name)


            for (var i = 0; i < rs.rows.length; i++) {
                $$("#Notes").show();
                $$("#Subject-Note-" + i).remove(html);

                var html = "";

                html += "<div class='card' id='Subject-Note-" + i + "' style= 'margin: 30px;'>"
                    + "<div class='content-block' style= 'padding-top: 20px; padding-bottom: 30px;'>"
                    + "<h3 style='text-align: center; margin-bottom: -5px; margin-top: 10px;'>"
                    + rs.rows.item(i).notes
                    + "</h3>"
                    + "</div>"
                    + "</div>";

                $$("#Notes").show();
                $$("#Notes").append(html);

                $("#Subject-Note-" + i).css('border', 'solid #E21830');

            }

        }, function (tr, err) {
            alert('DB오류 ' + err.message + err.code);
        }
        );
    });
}


$(document).ready(function () {
    for (var i = 0; i < Sub_Add_Limit; i++) {
        Subject_List_Code[i] = "";
        console.log("Subject_List_Code : " + Subject_List_Code[i]);
    }
});


$(document).ready(function () {
   
});


function SelectScheduleList() {
    var html = "";

    html += "<div class='card' id='Schedule-Card-" + 1 + "' style= 'margin: 30px; color:" + Color_Code + ";'>"
        + "<div class='content-block' style= 'padding-top: 30px; padding-bottom: 30px;'>"
        + "<p style='text-align: center; margin-bottom: -5px; margin-top: 10px;'>"
        + "<span>" + ((9) + "시 00분 ~ " + (9) + "시 50분") + "</span><br>"
        + "</p>"

        + "<h2 style='text-align: center; margin-top: -5px; margin-bottom: 5px;'>"
        + "<span id='Subject-Name-" + 1 + "'>" + Subject_List_Code_1 + "</span>"
        + "</h1>"
        + "</div>"
        + "</div>";

    $$("#Today_Subject").show();
    $$("#Today_Subject").append(html);

    $("#" + "Schedule-Card-" + 1).css('border', 'solid ' + Color_Code);

}


var Subject_List_Code_1 = "";
var Subject_List_Code_2 = "";
var Subject_List_Code_3 = "";
var Subject_List_Code_4 = "";
var Subject_List_Code_5 = "";
var Subject_List_Code_6 = "";
var Subject_List_Code_7 = "";
var Subject_List_Code_8 = "";
var Subject_List_Code_9 = "";
var Subject_List_Code_10 = "";
var Subject_List_Code_11 = "";
var Subject_List_Code_12 = "";
var Subject_List_Code_13 = "";



function set_Color(CDES) {
    switch (CDES) {

        case 1: Color_Code = '#FF0000';
            break;

        case 2: Color_Code = '#0054FF';
            break;

        case 3: Color_Code = '#FF007F';
            break;

        case 4: Color_Code = '#ABF200';
            break;

        case 5: Color_Code = '#FFE400';
            break;

        case 6: Color_Code = '#b162ff';
            break;

        case 7: Color_Code = '#e564e5;';
            break;

        case 8: Color_Code = '#ff56ab;';
            break;

        case 9: Color_Code = '#ff9f19;';
            break;

        case 10: Color_Code = '#ebc50b';
            break;

        case 11: Color_Code = '#e6d739';
            break;

        case 12: Color_Code = "#74d941";
            break;

        case 13: Color_Code = "#9fc93c";
            break;

        default: Color_Code = "#fff";
    }
}


function SelectSubjectList() {
    db.transaction(function (tr) {

        var Today = new Date();
        //var CD_WeekofDay = 0;
        var DayCode = Today.getDay();


        var SelectSQL = 'select tc_subject_name from Schedule where week_code = ?';
        tr.executeSql(SelectSQL, [DayCode], function (tr, rs) {  // DayCode 변경 요망.
            CDES_count = rs.rows.length;

            console.log('요일 코드 : ' + DayCode);
            console.log('과목 수 : ' + rs.rows.length);

            switch (CDES_count) {
                case 1: C_Execusion1();
                    break;

                case 2: C_Execusion2();
                    break;

                case 3: C_Execusion3();
                    break;

                case 4: C_Execusion4();
                    break;

                case 5: C_Execusion5();
                    break;

                case 6: C_Execusion6();
                    break;

                case 7: C_Execusion7();
                    break;

                case 8: C_Execusion8();
                    break;

                case 9: C_Execusion9();
                    break;

                case 10: C_Execusion10();
                    break;

                case 11: C_Execusion11();
                    break;

                case 12: C_Execusion12();
                    break;

                case 13: C_Execusion13();
                    break;


            }

            function C_Execusion1() {
                C_Input1();
            }

            function C_Execusion2() {
                C_Input1();
                C_Input2();
            }

            function C_Execusion3() {
                C_Input1();
                C_Input2();
                C_Input3();
            }

            function C_Execusion4() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
            }

            function C_Execusion5() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
            }

            function C_Execusion6() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
            }

            function C_Execusion7() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
            }

            function C_Execusion8() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
            }

            function C_Execusion9() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
                C_Input9();
            }

            function C_Execusion10() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
                C_Input9();
                C_Input10();
            }

            function C_Execusion11() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
                C_Input9();
                C_Input10();
                C_Input11();
            }

            function C_Execusion12() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
                C_Input9();
                C_Input10();
                C_Input11();
                C_Input12();
            }

            function C_Execusion13() {
                C_Input1();
                C_Input2();
                C_Input3();
                C_Input4();
                C_Input5();
                C_Input6();
                C_Input7();
                C_Input8();
                C_Input9();
                C_Input10();
                C_Input11();
                C_Input12();
                C_Input13();
            }



            function C_Input1() {
                Subject_List_Code_1 = (rs.rows.item(0).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(0).tc_subject_name);
                SelectSubjectCode1();

            }

            function C_Input2() {
                Subject_List_Code_2 = (rs.rows.item(1).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(1).tc_subject_name);
                SelectSubjectCode2();
            }

            function C_Input3() {
                Subject_List_Code_3 = (rs.rows.item(2).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(2).tc_subject_name);
                SelectSubjectCode3();
            }

            function C_Input4() {
                Subject_List_Code_4 = (rs.rows.item(3).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(3).tc_subject_name);
                SelectSubjectCode4();
            }

            function C_Input5() {
                Subject_List_Code_5 = (rs.rows.item(4).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(4).tc_subject_name);
                SelectSubjectCode5();;
            }

            function C_Input6() {
                Subject_List_Code_6 = (rs.rows.item(5).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(5).tc_subject_name);
                SelectSubjectCode6();
            }

            function C_Input7() {
                Subject_List_Code_7 = (rs.rows.item(6).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(6).tc_subject_name);
                SelectSubjectCode7();
            }

            function C_Input8() {
                Subject_List_Code_8 = (rs.rows.item(7).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(7).tc_subject_name);
                SelectSubjectCode8();
            }

            function C_Input9() {
                Subject_List_Code_9 = (rs.rows.item(8).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(8).tc_subject_name);
                SelectSubjectCode9();
            }

            function C_Input10() {
                Subject_List_Code_10 = (rs.rows.item(9).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(9).tc_subject_name);
                SelectSubjectCode10();
            }

            function C_Input11() {
                Subject_List_Code_11 = (rs.rows.item(10).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(10).tc_subject_name);
                SelectSubjectCode11();;
            }

            function C_Input12() {
                Subject_List_Code_12 = (rs.rows.item(11).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(11).tc_subject_name);
                SelectSubjectCode12();
            }

            function C_Input13() {
                Subject_List_Code_13 = (rs.rows.item(12).tc_subject_name);
                console.log("SelectSubjectList() 과목명 : " + rs.rows.item(12).tc_subject_name);
                SelectSubjectCode13();
            }


        }, function (tr, err) {
            alert('DB오류 ' + err.message + err.code);
        }
        );


    });
}

