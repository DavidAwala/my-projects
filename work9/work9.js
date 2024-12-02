const display=document.getElementById('time');
let timer=null;
let starttime=0;
let elapsetime=0;
let isruning=false;

function start() {
    if (!isruning) {
        starttime=Date.now() - elapsetime;
        timer=setInterval(update,10);
        isruning=true;
    }
}

function stop(){
    if (isruning) {
        clearInterval(timer);
        elapsetime=Date.now()-starttime;
        isruning=false;
    }
}

function reset() {
    clearInterval(timer);
    starttime=0;
    elapsetime=0;
    isruning=false;
    display.textContent='00:00:00:00'
}

function update() {
    const currenttime=Date.now();
    elapsetime=currenttime-starttime;
    let hour= Math.floor(elapsetime/(1000*60*60)).toString().padStart(2,0);
    let minutes= Math.floor(elapsetime/(1000*60)%60).toString().padStart(2,0);
    let seconds=Math.floor(elapsetime/1000%60).toString().padStart(2,0);
    let millesecond=Math.floor(elapsetime%1000/10).toString().padStart(2,0);

    display.textContent=`${hour}:${minutes}:${seconds}:${millesecond}`
}