

// when user registered

//send welcome email

// write a log

// notify some other service

// emit one event -> listeners listen to this event and do something

// .on() - register one listener
// .once() - register one listener (only once) and runs one time
// .emit() - emit one event


// event name - string
// callback function - handler


import { EventEmitter } from "node:events";

const appEvents=new EventEmitter();

type UserRegistratinPayload={
    userId:string,
    email:string
}

type UserRegistrationEvent="user:registered";

//Register listener for user:registered event
appEvents.on("user:registered",(payload:UserRegistratinPayload)=>{
    console.log("User registration event received");
    console.log("payload: ",payload);
})

//register another listener
appEvents.on("user:registered",(payload:UserRegistratinPayload)=>{
    console.log("sending welcome email to ",payload.email);
})


//register listener for user:registered event only once
appEvents.once("user:registered",(payload:UserRegistratinPayload)=>{
    console.log("This will run only one time");
})


//emit event after 2 seconds
setTimeout(()=>{
    const payload:UserRegistratinPayload={
        userId:"123",
        email:"example@example.com"
    };
    console.log("Emitting user:registered event");
    appEvents.emit("user:registered",payload);
},2000)

//emit event after 4 seconds
setTimeout(()=>{
    const payload:UserRegistratinPayload={
        userId:"124",
        email:"example2@example.com"
    };
    console.log("Emitting user:registered event");
    appEvents.emit("user:registered",payload);
},4000)