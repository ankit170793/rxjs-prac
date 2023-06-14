const { Observable } = require("rxjs");
const {map} = require("rxjs/operators")

const users = {
    data: [
        {
            status: "active",
            age: "16"
        },
        {
            status: "active",
            age: "26"
        },
        {
            status: "inactive",
            age: "59"
        },
        {
            status: "active",
            age: "62"
        },
        {
            status: "inactive",
            age: "48"
        },
        {
            status: "active",
            age: "52"
        },
        {
            status: "inactive",
            age: "17"
        },
        {
            status: "inactive",
            age: "32"
        },
        {
            status: "active",
            age: "42"
        },
        {
            status: "inactive",
            age: "32"
        },
    ]
}

const observable = new Observable((suscriber) => {
    suscriber.next(users);
}).pipe(
    map((value) => {
        console.log("1) got data from observable"+ value);
        return value.data
    }),
    map((value)=> {
        console.log("2) got data from second operator", value);
        return value.filter(user => user.status == "active")
    }),
    map((value)=> {
        console.log("3) got data from third operator", value);
        return value.reduce((sum, user) =>{ sum + (users.age),0/value.length})
    }),
    map((value)=> {
        console.log("4) got data from fourth operator", value);
        if (value < 18) {
            throw new Error("average age is too young")
        }else{
            return value
        }
    })
    
)

const observer = {
    next: (value) => {
        console.log("observer got a value of",  value);
    },
    error: (err) => {
        console.log("observer got an error" + err);
    },
    complete: (value) => {
        console.log("observer got a complete notification");
    }
};

observable.subscribe(observer);

