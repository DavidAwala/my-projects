function updatetime() {
    const now=new Date();
    const hour=now.getHours().toString()
    .padStart(2,0);
    const maridan=hour >=12 ? 'PM':'AM';
    const minutes= now.getMinutes().toString()
    .padStart(2,0);
    const seconds= now.getSeconds().toString()
    .padStart(2,0);
    const time=`${hour}:${minutes}:${seconds} ${maridan}`;
    document.getElementById("clocks").textContent=time;
}

updatetime()
setInterval( updatetime , 1000);