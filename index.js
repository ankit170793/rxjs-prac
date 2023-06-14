const {Observable} = require("rxjs");

const observable = new Observable((suscriber) => {
suscriber.next(10);
});

const observer = {
    next : (value) => {
        console.log("observer got a value of"+value);
    },
    error : (err) =>{
        console.log("observer got an error"+err);
    },
    complete: (value) => {
        console.log("observer got a complete notification");
    }
};

observable.subscribe(observer);

