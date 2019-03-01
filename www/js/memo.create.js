var Note_Content = "";
var Note_Default = "수업 이외";

myApp.onPageInit("Note", function (page) {
    var Note_Numbering = 0;
    localStorage.setItem("Note_Numbering",Note_Numbering);

    $$('#note_save').on('click', function () {
        
        Note_Content = $$("#content").val();
        console.log("Note_Content : "+Note_Content);

        var CS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + (NowTime.getHours() - 9) + "]");
        
        if(CS == "" || CS == null){
            Note_Numbering += 1;
            localStorage.setItem("수업 이외["+ Note_Numbering +"]",Note_Content);
        }else{
            Note_Numbering += 1;
            localStorage.setItem(CS+"["+ Note_Numbering +"]",Note_Content);
        }
        
        mainView.router.loadPage('home.page.html');
    });


});
