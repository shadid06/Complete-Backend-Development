//after some delay
//repeatedly after some delay


//setTimeout(cb,delay) - call after some delay
//setInterval(cb,delay) - call repeatedly after some delay
//setImmediate(cb) - call immediately
//process.nextTick(cb) - call immediately
//clearTimeout(timerId) - cancel the timer
//clearInterval(timerId) - cancel the timer

import {  setTimeout as sleep} from "node:timers/promises";

function runSetTimeOutExample():void{
    console.log("1.settimeout before");
    setTimeout(()=>{
        console.log("2.settimeout after 2 seconds");
    },2000);
    console.log("3.settimeout after");
}

// runSetTimeOutExample();

function runClearTimeOutExample():void{
    const timerId=setTimeout(()=>{
        console.log("this will not execute");
    },2000);
    console.log("1.timeout before");
    clearTimeout(timerId);
    console.log("2.timeout after");
}

// runClearTimeOutExample();

//set interval will run the callback again and again


function runSetIntervalExample():void{
    console.log("1.setinterval before");
    let count:number=0;
    const intervalId=setInterval(()=>{
        count++;
        console.log("2.setinterval after 2 seconds",count);
        if(count===5){
            clearInterval(intervalId);
        }
    },2000);
    console.log("3.setinterval after");
}

// runSetIntervalExample();

//set immdediate run after current synchronous code execution

function runSetImmediateExample():void{
    console.log("1. set immediate before");
    setImmediate(()=>{
        console.log("2. set immediate after");
    });
    console.log("3. set immediate after");
}

// runSetImmediateExample();


async function runPromiseTimerExample():Promise<void>{
    console.log("1. promise timer before");
    await sleep(2000);
    console.log("2. promise timer after 2 seconds");
    console.log("3. promise timer after");
}

runPromiseTimerExample();