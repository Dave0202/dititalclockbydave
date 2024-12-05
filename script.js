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

/*
```javascript
// use ctrl + shift + e to open explorer session
// This is a comment to remind users of the keyboard shortcut to open the explorer session in the development environment.

// don't forget to link ur code
// This comment reminds the user to link their code properly, likely referring to including necessary files or references.

const hourEl = document.getElementById('hour');
// This line selects the HTML element with the id 'hour' and assigns it to the variable 'hourEl'.

const minuteEl = document.getElementById('minutes');
// This line selects the HTML element with the id 'minutes' and assigns it to the variable 'minuteEl'.

const secondEl = document.getElementById('seconds');
// This line selects the HTML element with the id 'seconds' and assigns it to the variable 'secondEl'.

const ampmEl = document.getElementById('ampm');
// This line selects the HTML element with the id 'ampm' and assigns it to the variable 'ampmEl'.

// we need to get the time from our computer 
// This comment indicates that the following code will retrieve the current time from the user's computer.

function updateClock(){
    // This line declares a function named 'updateClock'.

    let h = new Date().getHours()
    // This line gets the current hour from the user's computer and assigns it to the variable 'h'.

    let m = new Date().getMinutes()
    // This line gets the current minute from the user's computer and assigns it to the variable 'm'.

    let s = new Date().getSeconds()
    // This line gets the current second from the user's computer and assigns it to the variable 's'.

    let ampm = 'AM' ;
    // This line initializes a variable 'ampm' with the value 'AM'.

    if(h > 12){
        h = h - 12 
        ampm = 'PM';
    }
    // This block checks if the hour ('h') is greater than 12. If so, it subtracts 12 from 'h' and sets 'ampm' to 'PM'.

    h = h < 10 ? "0" + h : h;
    // This line adds a leading zero to the hour if it is less than 10.

    m = m < 10 ? "0" + m : m;
    // This line adds a leading zero to the minute if it is less than 10.

    s = s < 10 ? "0" + s : s;
    // This line adds a leading zero to the second if it is less than 10.
    
    hourEl.innerText = h;
    // This line sets the inner text of the 'hourEl' element to the current hour ('h').

    minuteEl.innerText = m;
    // This line sets the inner text of the 'minuteEl' element to the current minute ('m').

    secondEl.innerText= s;
    // This line sets the inner text of the 'secondEl' element to the current second ('s').

    ampmEl.innerText = ampm;
    // This line sets the inner text of the 'ampmEl' element to the current period ('AM' or 'PM').

    setTimeout(() => {
        updateClock()
    }, 1000); 
    // This line sets a timeout to call the 'updateClock' function every 1000 milliseconds (1 second).
}
updateClock()
// This line calls the 'updateClock' function to start the clock.

// add zero
// This comment likely refers to the code that adds a leading zero to hours, minutes, and seconds if they are less than 10.*/