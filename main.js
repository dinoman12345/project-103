Webcam.attach(camera);
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function dino(){
    Webcam.snap(function(a){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+a+'"/>';
    });
}