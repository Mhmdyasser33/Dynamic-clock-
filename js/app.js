/* 18191a */
const section = document.querySelector("section") ; 
const icons = document.querySelector(".icons") ;
icons.addEventListener('click' , ()=>{
    section.classList.toggle("dark") ;
})
// using setintervals 
setInterval(()=>{
    // to get the date now 
   let date = new Date() ;
   hour = date.getHours() ; 
   minute = date.getMinutes() ; 
   second = date.getSeconds() ; 
   let pm_or_am ; 
   // to check if we are in morning or evening 
   pm_or_am = hour < 12 ? "AM" : "PM" ;
   document.getElementById("am_pm").innerText = pm_or_am ; 
   // to check if hours greate than 12  using ternary operator 
    hour = hour > 12 ? hour - 12 :  hour ; 
    // to check if hour in 12 clock 
    hour = hour == 0 ? hour = 12 : hour ;
    hour = hour < 10 ? '0' + hour : hour ; 
    document.getElementById("hour").innerText = hour ;
    // to print second with 0 
    second = second < 10 ? '0' + second : second ;
    document.getElementById("second").innerText = second ;
    minute = minute < 10 ? '0' + minute : minute ;
    document.getElementById("minute").innerText = minute ;
} , 1000)
