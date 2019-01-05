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

$(document).ready(function () {
    openDB();
    createPrivateTable();
    createSheduleTable();
});



function selectSuject_Name() {
    db.transaction(function (tr) {
        var C_DayCode = 0;
        var C_Hours = 0;

        var Today = new Date();
        
        C_DayCode = Today.getDay().toString();
        C_Hours = Today.getHours();
      
        
        var selectSQL = 'select tc_subject_name from Schedule where week_code = ? and time_code = ? ';
        tr.executeSql(selectSQL, [C_DayCode,C_Hours], function (tr, rs) {
            console.log("노트 저장 -> 현재 요일 : "+ C_DayCode )
            console.log("노트 저장 -> 현재 시간 : "+ C_Hours )
            console.log("노트 저장 -> 현재 과목 : "+ rs.rows.item(0).tc_subject_name )
            //$$("#C_Subject").text(rs.rows.item(0).tc_subject_name);
           
            Note_SubjectName = (rs.rows.item(0).tc_subject_name);
            console.log("Note_SubjectName : "+ Note_SubjectName)

        }, function (tr, err) {
            alert('DB오류 ' + err.message + err.code);
        }
        );
    });
};

// 데이터 입력 트랜잭션 실행
function insertNote() {
    db.transaction(function (tr) {

        var insertSQL = 'insert into Private_Storage(subject_name, notes) values(?, ?)';

        tr.executeSql(insertSQL, [Note_SubjectName, Note_Content], function (tr, rs) {
        
            console.log('과목 명 : ' + Note_SubjectName + ' 노트 내용 : ' + Note_Content + ' 입력되었습니다.');

        }, function (tr, err) {
            alert('DB오류 ' + err.message + err.code);
        }
        );
    });
}