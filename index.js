let seconds=0;
let minutes=0;
let hours=0;
let displayHours=0;
let displayMinutes=0;
let displaySeconds=0;
let interval;



document.getElementById('start').addEventListener('click',()=>{
interval=setInterval(stopwatch,1);

});

document.getElementById('stop').addEventListener('click',()=>{
clearInterval(interval);
    });
    
document.getElementById('reset').addEventListener('click',()=>{
 clearInterval(interval);
 seconds=0;
 minutes=0;
 hours=0;
 time.innerHTML='00:00:00';
}

      );


function stopwatch(){
    seconds++;


    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60 ===1){
            minutes=0;
            hours++;
        }
        
    }
    
if (hours<10){
    displayHours=`0${hours}`
}
else{
    displayHours=hours;
}
if (minutes<10){
    displayMinutes=`0${minutes}`
}
else{
    displayMinutes=minutes;
}

if (seconds<10){
    displaySeconds=`0${seconds}`
}
else{
    displaySeconds=seconds;
}
    
    document.getElementById("time").innerHTML=`${displayHours}:${displayMinutes}:${displaySeconds}`;
}


