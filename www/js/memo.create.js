var Note_Content = "";
var Note_Default = "수업 이외";
var Note_Numbering = 0;

myApp.onPageInit("Note", function (page) {
    
    $(document).ready(function () {
        $$("#content").text();

        var NPCS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + (NowTime.getHours() - 9) + "]");

        if (NPCS == "" || NPCS == null) {
            
            if(localStorage.getItem("Note_Numbering_" + Note_Default) == null){
                Note_Numbering = 0;
                localStorage.setItem("Note_Numbering_" + Note_Default,Note_Numbering);
            }else{
                Note_Numbering = parseInt(localStorage.getItem("Note_Numbering_"+Note_Default));
    
            }

        } else {
            
            if(localStorage.getItem("Note_Numbering_" + NPCS) == null){
                Note_Numbering = 0;
                localStorage.setItem("Note_Numbering_" + NPCS,Note_Numbering);
            }else{
                Note_Numbering = parseInt(localStorage.getItem("Note_Numbering_" + NPCS));
    
            }
        }

        

    });
    


    $$('#note_save').on('click', function () {
        console.log(Note_Numbering);
        
        Note_Content = $$("#content").val();
        console.log("Note_Content : "+Note_Content);

        var CS = localStorage.getItem("T_Subject_Name[" + NowTime.getDay() + "][" + (NowTime.getHours() - 9) + "]");
        
        if(CS == "" || CS == null){
            Note_Numbering += 1;

            localStorage.setItem("Note_Numbering_" + Note_Default ,Note_Numbering);
            localStorage.setItem("수업 이외["+ Note_Numbering +"]",Note_Content);
            console.log("TURE : "+Note_Numbering);
        }else{
            Note_Numbering += 1;

            localStorage.setItem("Note_Numbering_" + CS,Note_Numbering);
            localStorage.setItem(CS+"["+ Note_Numbering +"]",Note_Content);
            console.log("FALSE : "+Note_Numbering);
        }
        
        mainView.router.loadPage('home.page.html');
    });


});
