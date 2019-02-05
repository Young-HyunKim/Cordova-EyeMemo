myApp.onPageInit("Camera", function (page) {
    document.getElementById("Take_Picture").addEventListener("click", TakePicture); 

    function TakePicture() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: false,
            correctOrientation: true,
            saveToPhotoAlbum : true
        });

        function onSuccess(imageData) {
            var image = document.getElementById('Pic_Image');
            image.src = "data:image/jpeg;base64," + imageData;
            
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }

    navigator.camera.getPicture(onSuccess, onFail, { 
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: false,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        
    });
        
    function onSuccess(imageURI) {
        var image = document.getElementById('Pic_Image');
        image.src = imageURI;
        mainView.router.loadPage('home.page.html');
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
}); 
