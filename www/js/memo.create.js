var Note_Content = "";
var Note_SubjectName = "수업 이외";

myApp.onPageInit("Note", function (page) {

    $$('#note_save').on('click', function () {
        Note_Content = $$("#content").val();
        selectSuject_Name();
        Note_SubjectName = $$("#C_Subject").val();

        console.log("현재 과목명 : " + Note_SubjectName );
        console.log("노트 내용 : " + Note_Content );

        insertNote();
        mainView.router.loadPage('home.default.html');
    });


});
