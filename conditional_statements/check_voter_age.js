

// Check whether a user can vote or not.

function checkAge(){
    if (age>=18){
        console.log("The user can cast a vote.")
    }
    else {
        console.log("The user cannot cast a vote.")
    }
}

var age = 10;
checkAge();

var age = 100;
checkAge();

