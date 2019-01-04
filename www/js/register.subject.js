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


    $(document).ready(function () {
        openDB();
        createTable();
    });


    var db = null;

    // 데이터베이스 생성 및 오픈
    function openDB() {
        db = window.openDatabase('SubjectDB', '1.0', 'SubjectDB', 1024 * 1024);
        console.log('1_DB 생성...');
    }

    function createTable() {
        db.transaction(function (tr) {
            var createSQL = 'create table if not exists SubjectRegister(subject_code text, subject_name text)';
            tr.executeSql(createSQL, [], function () {
                console.log('SubjectRegister_테이블 생성_sql 실행 성공...');
            }, function () {
                console.log('SubjectRegister_테이블 생성_sql 실행 실패...');
            });
        }, function () {
            console.log('SubjectRegister_테이블 생성 트랜잭션 실패...롤백은 자동');
        }, function () {
            console.log('SubjectRegister_테이블 생성 트랜잭션 성공...');
        });


        
        /*
        db.transaction(function (tr) {
            var createSQL = 'create table if not exists Schedule(week_code integer, time_code text, tc_subject_name text)';
            tr.executeSql(createSQL, [], function () {
                console.log('Schedule_테이블생성_sql 실행 성공...');
            }, function () {
                console.log('Schedule1_테이블생성_sql 실행 실패...');
            });
        }, function () {
            console.log('Schedule_테이블 생성 트랜잭션 실패...롤백은 자동');
        }, function () {
            console.log('Schedule_테이블 생성 트랜잭션 성공...');
        });
        
        */


        db.transaction(function (tr) {
            var createSQL = 'create table if not exists PreSetting(Is_Check integer)';
            tr.executeSql(createSQL, [], function () {
                console.log('PreSetting_테이블생성_sql 실행 성공...');
            }, function () {
                console.log('PreSetting_테이블생성_sql 실행 실패...');
            });
        }, function () {
            console.log('PreSetting_테이블 생성 트랜잭션 실패...롤백은 자동');
        }, function () {
            console.log('PreSetting_테이블 생성 트랜잭션 성공...');
        });
    }




    // 데이터 입력 트랜잭션 실행
    function insertSubject1() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_1, subject_name_1], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_1 + ' 과목 코드 : ' + subject_name_1 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject2() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_2, subject_name_2], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_2 + ' 과목 코드 : ' + subject_name_2 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject3() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_3, subject_name_3], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_3  + ' 과목 코드 : ' + subject_name_3 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject4() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_4, subject_name_4], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_4  + ' 과목 코드 : ' + subject_name_4 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject5() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_5, subject_name_5], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_5 + ' 과목 코드 : ' + subject_name_5 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject6() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_6, subject_name_6], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_6 + ' 과목 코드 : ' + subject_name_6 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject7() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_7, subject_name_7], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_7 + ' 과목 코드 : ' + subject_name_7 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject8() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_8, subject_name_8], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_8 + ' 과목 코드 : ' + subject_name_8 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject9() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_9, subject_name_9], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_9 + ' 과목 코드 : ' + subject_name_9 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject10() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_10, subject_name_10], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_10 + ' 과목 코드 : ' + subject_name_10 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject11() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_11, subject_name_11], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_11 + ' 과목 코드 : ' + subject_name_11 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }


    function insertSubject12() {
        db.transaction(function (tr) {

            var insertSQL = 'insert into SubjectRegister(subject_code, subject_name) values(?, ?)';

            tr.executeSql(insertSQL, [subject_code_12, subject_name_12], function (tr, rs) {
                console.log('과목 등록 No: ' + rs.insertId);
                console.log('과목명 : ' + subject_code_12 + ' 과목 코드 : ' + subject_name_12 + ' 이(가) 입력되었습니다.');

            }, function (tr, err) {
                alert('DB오류 ' + err.message + err.code);
            }
            );
        });
    }

});