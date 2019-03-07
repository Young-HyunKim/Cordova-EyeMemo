var count = 0;
var CDES_count = 0;
var CurrentDate_WeekofDay = 0;
var Temporary_Subject_Name = "";
var Color_Code = "#000";
var Sub_Add_Limit = 12;
var Stack_Is_Subject = "";
var Stack_Count = 0;

var NowTime = new Date();
var Subject_List_Code = new Array();

$(document).ready(function () {
    for (var i = 0; i < Sub_Add_Limit; i++) {
        Subject_List_Code[i] = "";
        console.log("Subject_List_Code : " + Subject_List_Code[i]);
    }
});

myApp.onPageInit("home-page", function (page) {


    $(document).ready(function () {
        $("#btn-table").css("margin", "0 auto");
        $$("#Subject-Null").css('border', 'solid #E21830');
    });

    $(document).ready(function () {
        $$("#btn_schedule").addClass('about-color').addClass('color-red'); 
    });

    $("#SN").css("margin", "0 auto");
    $("#note").css("margin", "0 auto");
    $("#scanner").css("margin", "0 auto");
    $("#timer").css("margin", "0 auto");
    

    $("#Subject-Null").css('border', 'solid #E21830');
    $("#Note-Null").css('border', 'solid #E21830');
    $("#Pic-Null").css('border', 'solid #E21830');

    
/*
    $('#Note_List').slimScroll({
        height: '280px'
    });

    $('#Pic_List').slimScroll({
        height: '210px'
    });

    
*/

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


    $(document).ready(function () {
        CurrentDateTime();
        setInterval(CurrentSubject,1000);
        setInterval(ContentSet, 1000);
    });

    function ContentSet() {
        var Today = new Date();
        CurrentDate_WeekofDay = Today.getDay();

        switch (CurrentDate_WeekofDay) {
            case 1: CurrentDate_WeekofDay = '월요일';
                break;

            case 2: CurrentDate_WeekofDay = '화요일';
                break;

            case 3: CurrentDate_WeekofDay = '수요일';
                break;

            case 4: CurrentDate_WeekofDay = '목요일';
                break;

            case 5: CurrentDate_WeekofDay = '금요일';
                break;

            case 6: CurrentDate_WeekofDay = '토요일';
                break;

            case 0: CurrentDate_WeekofDay = '일요일';
                break;

        }

        $$("#CurrentWeekOfDay").text(" " + CurrentDate_WeekofDay);
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

    function CurrentSubject(){
        
        var CS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + (NowTime.getHours() - 9) + "]");
        //console.log(CS);
        
        if(CS == "" || CS == null){
            $$("#C_Subject").text("수업이 없습니다!");
        }else{
            $$("#C_Subject").text(CS);
        }
        
    }


    $$('#Search_Subject').on('click', function () {
        var Sub_Name = $$("#keyword").val();
        

        if(Sub_Name == "" || Sub_Name == null){
            myApp.alert("과목명을 입력해주세요!");

        }else{
            
            Stack_Is_Subject = Sub_Name;

            console.log("Stack_Is_Subject : " + Stack_Is_Subject);

            if (Stack_Count == 0 && Stack_Is_Subject == Sub_Name) {
                Stack_Count += 1;

                console.log("Stack_Count : " + Stack_Count);
                console.log("Stack : " + "True");

                console.log(localStorage.getItem("Note_Numbering"));
                console.log("ParseInt : " + parseInt(localStorage.getItem("Note_Numbering")));

                var Note_Limit = parseInt(localStorage.getItem("Note_Numbering"));

                for (let index = 0; index < Note_Limit + 1; index++) {
                    console.log(localStorage.getItem("Note_Numbering"));
                    console.log("Sub_Name : " + Sub_Name);

                    var Sub_Note = localStorage.getItem(Sub_Name + "[" + index + "]");
                    Show_Notes(Sub_Note);

                    Sub_Name = Sub_Name;
                }
                
            }else{
                
            }

            
            
            
        }
        
    });

    function Show_Notes(N_content){
        var html = "";
        
        html += "<li>"
             + "<a href='#' class='item-link item-content'>"
             + "<div class='item-inner'>"
             + "<div class='item-title-row'>"
             + "<div class='item-title'>"+N_content+"</div>"
             + "</div>"
             + "<div class='item-title'></div>"
             + "</div>"
             + "</a>"
             + "</li>";

        $$("#Notes").show();
        $$("#Notes").append(html);

        console.log(html);
    }

    function Select_Notes(Note_Content){
        var html = "";
        var i = 0;

        i+=1;

        html += "<div class='card' id='Subject-Note-" + i + "' style= 'margin: 30px;'>"
            + "<div class='content-block' style= 'padding-top: 20px; padding-bottom: 30px;'>"
            + "<h3 style='text-align: center; margin-bottom: -5px; margin-top: 10px;'>"
            + Note_Content
            + "</h3>"
            + "</div>"
            + "</div>";
           
        $$("#memo-list").show();
        $$("#memo-list").append(html);

        $("#Subject-Note-"+ i ).css('border', 'solid #E21830');
    }

    function Null_Schedule(){
        var html = "";

        html +="<div class='card' id='Subject-Null' style= ' margin: 30px;'>"
             +"<div class='content-block' style='padding-top: 10px; padding-bottom: 10px;'>"
             +"<p style='text-align: center;'> <img id='NN' style='width: 30%; height: 30%;' src='img/outline_notification_important_black_48.png'></p>"
             +"<h2 style='text-align: center; margin-bottom: -5px; margin-top: 10px;'> 강의 일정이 없습니다.</h2>"
             +"</div>"
             +"</div>"

        $$("#Today_Subjects").show();
        $$("#Today_Subjects").append(html);     
                        
    }

    function Null_Notes(){
        var html = "";

        html +="<div class='card' id='Note-Null' style=' margin: 30px; border-color : crimson'>"
             +"<div class='content-block' style='padding-top: 10px; padding-bottom: 10px;'>"
             +"<p style='text-align: center;'>"
             +"<img id='NN' style='width: 30%; height: 30%;' src='img/baseline_note_black_48.png'>"
             +"</p>"
             +"<h2 style='text-align: center; margin-bottom: -5px; margin-top: 10px;'> 메모가 없습니다.</h2>"
             +"</div>"
             +"</div>";

        $$("#Notes").show();
        $$("#Notes").append(html);
        $("Note-Null").css('border', 'solid #E21830');
        
    }

    function Null_Pictures(){
        var html = "";

        html +="<div class='card' id='Pic-Null' style=' margin: 30px;'>"
             +"<div class='content-block' style='padding-top: 10px; padding-bottom: 10px;'>"
             +"<p style='text-align: center;'> <img id='NN' style='width: 30%; height: 30%;'src='img/baseline_insert_photo_black_48.png'></p>"
             +" <h2 style='text-align: center; margin-bottom: -5px; margin-top: 10px;'> 사진이 없습니다.</h2>"
             +"</div>"
             +"</div>";
        
        $$("#Pictures").show();
        $$("#Pictures").append(html);
        $("Pictures").css('border', 'solid #E21830');      
    }


    $(document).ready(function () {
        Get_Subject();
    });
    
    function Get_Subject() {
        for (let i = 0; i < Add_Limit; i++) {
            
            var TS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + i + "]");

            if (TS != null) {
                
                for (let r = 0; r < Add_Limit; r++) {
                    
                    let Scan_TS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + r + "]");
                    let Scan_RS = localStorage.getItem("R_Subject_Name[" + i + "]");
                   
                    var Register_Subjects ="";

                    for (let c = 0; c < Add_Limit; c++) {
                        if(TS == localStorage.getItem("R_Subject_Name[" + c +"]" )){
                            Set_Color(1+c);   
                        }
                        
                    }

                }

                Today_SubjectList(i + 1, i + 9, TS);

            }else{

            }
    
        }
    
    }
    
    function Today_SubjectList(Id_Number, Time_Code, Subject_Content) {
        console.log(Id_Number, Time_Code, Subject_Content);
    
        var html = "";
    
        html += "<div class='card' id='Schedule-Card-" + Id_Number + "' style= 'margin: 30px; color:" + Color_Code + "; border-radius: 7px;'>"
            + "<div class='content-block' style= 'padding-top: 30px; padding-bottom: 30px;'>"
            + "<p style='text-align: center; margin-bottom: -5px; margin-top: 10px;'>"
            + "<span>" + ((Time_Code) + "시 00분 ~ " + (Time_Code) + "시 50분") + "</span><br>"
            + "</p>"
    
            + "<h2 style='text-align: center; margin-top: -5px; margin-bottom: 5px;'>"
            + "<span id='Subject-Name-" + Id_Number + "'>" + Subject_Content + "</span>"
            + "</h1>"
            + "</div>"
            + "</div>";
    
        $$("#Today_Subjects").show();
        $$("#Today_Subjects").append(html);
    
        $("#" + "Schedule-Card-" + Id_Number).css('border', 'solid ' + Color_Code);
    
    }

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


function Current_SelectSubject() {

};

function SelectNoteList() {
    $('#Note-Null').hide();
    $('#Pic-Null').hide();

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
}


var Subject_List_Code = new Array();

function Set_Color(Color_Number) {
    console.log("Color_Number : "+Color_Number);

    switch (Color_Number) {

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
