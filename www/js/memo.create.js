var Note_Content = "";
var Note_Default = "수업 이외";

myApp.onPageInit("Note", function (page) {

    $$('#note_save').on('click', function () {
        
        Note_Content = $$("#content").val();       
        var CS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + (NowTime.getHours() - 9) + "]");
        
        if(CS == ""){
            localStorage.setItem(Note_Default,Note_Content);
        }else{
            localStorage.setItem(CS,Note_Content);
        }
        
        mainView.router.loadPage('home.page.html');
    });


});
