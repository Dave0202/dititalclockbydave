// use contrl + shift + e  to open explorer session

// don't forget to link ur code
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');


// we need to get the time from our computer 

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM' ;



if(h > 12){
    h= h-12 
    ampm = 'PM';
}
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;
    
hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText= s;
ampmEl, (innerText = ampm);

setTimeout(() => {
updateClock()
}, 1000); 
}
updateClock()

// add zero