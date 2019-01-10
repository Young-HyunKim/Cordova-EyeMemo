var Sub_Add_Limit = 12;

var subject_code = new Array();
var subject_name = new Array();


myApp.onPageInit("Register-Subject", function (page) {

    var count = 0;

    $(document).ready(function () {

        for (var i = 0; i < Sub_Add_Limit ; i++) {
            subject_code[i] = "";
            console.log("SubjectCode : " + subject_code[i]);
        }

        for (var i = 0; i < Sub_Add_Limit ; i++) {
            subject_name[i] = "";
            console.log("SubjectName : " + subject_name[i]);
        }

    });

    $('#Subject_List').slimScroll({
        height: '360px'
    });

    $$('#back').on('click', function () {
        mainView.router.loadPage('home.default.html');
        SelectSubjectList();
    });
    
    
    $$('#S_save').on('click', function () {
        mainView.router.loadPage('Time.subject.html');
        console.log(count);

        for (var i = 0; i < count; i++) {
            if(count == (i+1)){
                ValueInput(count);
                console.log("for문 : PASS"+ (i+1));
            }
            
        }

        
        function ValueInput(count){
           
            for (var i = 0; i < count; i++) {
                subject_code[i] = "" + (i+1);
                subject_name[i] = $$("#" + "Subject_" + (i+1)).val();

                console.log("PASS"+ (i+1));

                localStorage.setItem("Subject_Code["+ i +"]",subject_code[i]);
                localStorage.setItem("R_Subject_Name["+ i +"]",subject_name[i]);

                console.log("subject_code[Content] : " + subject_code[i]);
                console.log("Subject_name[Content] : " + subject_name[i]);
            }
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