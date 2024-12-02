import { PI,getarea,getcircumference,getvolume } from "./work10ii.js";


let rad=document.getElementById("rad");
let area=document.getElementById("area");
let volume=document.getElementById("volume");
let circumference=document.getElementById("circumference");
let button=document.getElementById("button");
let answer=document.getElementById('answer');
//let ans=rad.value;



button.onclick= function () {
    if (area.checked) {
        let are=getarea(rad.value)
        answer.textContent=are
    }
    else if (volume.checked) {
        
      let  harea=getvolume(rad.value);
       answer.textContent=harea
    }
    else if (circumference.checked) {
        
       let sarea=getcircumference(rad.value);
       answer.textContent=sarea
    }
    else{answer.textContent=PI}
    
}






/*console.log(PI)
const area=getarea(19)
console.log(area)
const circumference=getcircumference(12)
console.log(circumference)
const volume=getvolume(21)
console.log(volume)*/
