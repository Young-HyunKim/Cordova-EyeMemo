myApp.onPageInit("Camera", function (page) {
    var File_Path = null;

    function Picture(source) {
        $("result").empty();
        File_Path = null;
        
        navigator.camera.cleanup();
        navigator.camera.getPicture(
            function(Choice){
                File_Path = Choice;
                
                if(File_Path.lastIndexOf('?') < 0){
                    File_Path += "?" + new Date().getTime();
                }

                // 이미지 화면 표시
                var info = $("<div class='alert alert-success'>")
                    .css('word-break', 'break-all')
                    .html(File_Path);
                var img = $("<img class='img-responsive'>").attr('src', file_path);
                $("#result").append(info).append(img);
            },

            function(message) {
                alert('Failed because: ' + message);
            },

            {
                destinationType: Camera.DestinationType.FILE_URI, // 리턴타입 형식(파일경로)
                encodingType: Camera.EncodingType.JPEG, // 이미지 형식
                quality: 50, // 퀄리티 (0~100)
                sourceType: source, // 카메라 or 갤러리 설정
                allowEdit: false, // 가져오기 완료 후 편집 여부
                correctOrientation: true // 카메라를 세로로 촬영한 경우 이미지 방향을 회전시킴
            }
            

        )
    }
});

$(function() {
    // 카메라 버튼 이벤트 정의
    $("#photo_camera").click(function() {
        Picture(Camera.PictureSourceType.CAMERA);
    });
 
    // 갤러리 버튼 이벤트 정의
    $("#photo_library").click(function() {
        Picture(Camera.PictureSourceType.PHOTOLIBRARY);
    });
 
    // 업로드 버튼 이벤트 정의 
    $("#do_upload").click(function() {});
}); 
