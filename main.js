function startClassification()
{
   navigator.mediaDevices.getUserMedia({ audio: true});
  
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/88T1C1ckS/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else 
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        if (results[0].label == "Cow") 
          {
            document.getElementById("img1").src = "https://th.bing.com/th/id/R.4f54fd278a206661fc1938c0675571d7?rik=N5CGj3MjSA6D6g&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn1539927.png&ehk=sgc2zOyYoB7oYjangirXETGHe075eX2T03ppBR02MEw%3d&risl=&pid=ImgRaw&r=0";
            navigator.mediaDevices.getUserMedia({ audio: false});

            
          }

        if (results[0].label == "Dog") 
          {
              document.getElementById("img1").src = "https://github.com/darsant/vtimages/blob/main/Screenshot%202024-06-17%20212419.png?raw=true";
               navigator.mediaDevices.getUserMedia({ audio: false});
          }

        if (results[0].label == "Cat") 
          {
                document.getElementById("img1").src = "https://th.bing.com/th/id/OIP.syP3h52uSkjFYKKdnm07wQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.4&pid=1.7";
                navigator.mediaDevices.getUserMedia({ audio: false});
          }
          if (results[0].label == "Lion") 
            {
                  document.getElementById("img1").src = "https://th.bing.com/th/id/OIP.nGM6fWNPC988WmB5IQHsVAHaFM?w=281&h=198&c=7&r=0&o=5&dpr=1.4&pid=1.7";
                  navigator.mediaDevices.getUserMedia({ audio: false});
            }
        if (results[0].label == "Backround Noise") 
          {
                  document.getElementById("img1").src = "https://s3-whjr-curriculum-uploads.whjr.online/2df6ee9d-713f-40be-8eda-20d5fea30b35.png";
                  navigator.mediaDevices.getUserMedia({ audio: false});
          }
}
            
//https://teachablemachine.withgoogle.com/models/88T1C1ckS/model.json