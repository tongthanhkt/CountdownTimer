const newYear=new Date("01/01/2022");
console.log(newYear);
const dayEL=document.getElementById("days");
const hourEl=document.getElementById("hours");
const minEl=document.getElementById("mins");
const secondEl=document.getElementById("seconds");
function countdown(){
    const currentDate=new Date();
    const times=Math.floor((newYear-currentDate)/1000);
    
    const days= Math.floor(times/(3600*24));
    const secondsLeftDays= times-days*(3600*24);
    const hours=Math.floor(secondsLeftDays/3600);
    
    const secondsLeftHours=secondsLeftDays-hours*3600;
    const mins=Math.floor(secondsLeftHours/60);
    const seconds=secondsLeftHours-(mins*60);
    console.log(seconds);
    dayEL.innerHTML=formatime(days);
    hourEl.innerHTML=formatime(hours);
    minEl.innerHTML=formatime(mins);
    secondEl.innerHTML=formatime(seconds);
};
function formatime(time){
    return time<10?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);