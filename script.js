var checkbox = document.getElementById("checkbox");
var clock = document.getElementById("clock");
var mn  = document.querySelector('.mn');
var style = getComputedStyle(document.body);
// var color= style.getPropertyValue('--main-color');
var color = "#ffffff"

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle("light");
    clock.classList.toggle("clc-light");
   
    if(color == "#ffffff"){
        document.body.style.setProperty("--main-color", "#bebebe"); 
        color = "#bebebe"; 
    }
    else{ document.body.style.setProperty("--main-color", "#ffffff");
    color = "#ffffff";
    }
  
        


});

// Clock Script
const dg = 6;
var hr = document.getElementById("hr");
var mn = document.getElementById("mn");
var sc = document.getElementById("sc");
setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * dg;
    let ss = day.getSeconds() * dg;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)` ; 
    mn.style.transform = `rotateZ(${mm}deg)` ; 
    sc.style.transform = `rotateZ(${ss}deg)` ; 
});
