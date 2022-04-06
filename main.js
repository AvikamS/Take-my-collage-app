var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
   
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

 Content = event.results[0][0].transcript.toLowerCase();

  
    console.log(Content);
    if(Content == "take a collage"){
        console.log("Taking Collage---")
        speak();
    }
}

function speak(){
var synth = window.speechSynthesis;
speak_data = "Taking your Collage in 3 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{  img_id = "Selfie1";
take_snapshot();
speak_data = "Taking your Collage in 3 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

}, 3000);
setTimeout(function()
{  img_id = "Selfie2";
take_snapshot();
speak_data = "Taking your Collage in 3 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

}, 3000);

setTimeout(function()
{  img_id = "Selfie3";
take_snapshot();

}, 3000);
}

camera = document.getElementById("camera")
Webcam.set({
width:360,
height:250,
image_format : 'jpeg',
jpeg_quality : 90

});

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        if(img_id == "Selfie1"){ 
        document.getElementById("result1").innerHTML = '<img id = "Selfie1" src= "'+data_uri+'"/>';
        }
        if(img_id == "Selfie2"){ 
            document.getElementById("result2").innerHTML = '<img id = "Selfie2" src= "'+data_uri+'"/>';
        }
        if(img_id == "Selfie3"){ 
            document.getElementById("result3").innerHTML = '<img id = "Selfie3" src= "'+data_uri+'"/>';
        }
        });
}

