const colorchoice=document.querySelectorAll('.colorsbtn');
const watchimg = document.getElementById('myimage');
const time =   document.getElementById('time');
var heart = document.getElementById("heart");
const heartrate = document.getElementById("heart-rate");


colorchoice.forEach(item => {
    item.addEventListener('click',function(){
        //get the image path from the data-image attribute of the clicked item
        const imagePath = item.getAttribute('data-image');
        watchimg.src = imagePath;
    });
});
function timer(){
    time.style.visibility='visible';
    heart.style.visibility='hidden';
    heartrate.style.visibility= 'hidden';
    
    setInterval(function(){
        //create a new date object
    var currentTime = new Date();
   
    //extract hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    hours = (hours<10?"0": "")+ hours;
    minutes = (minutes <10?"0": "")+ minutes;
    seconds = (seconds<10?"0": "")+ seconds;
    //Format the time
    var formattedTime = hours + ":" + minutes +":" + seconds;
    time.innerHTML=formattedTime;
    },0)
   


}



function heartbeat(){
    time.style.visibility='hidden';
    heart.style.visibility='visible';
    heartrate.style.visibility= 'visible';
}
