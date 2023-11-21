


// Using array destructuring to swap the values of two variables.


let work = ["developer", "QA", "HR", "Ops"];

const a = work[1];
work[1] = work[2];
work[2] = a;
console.log(work);


let place = ["Butwal", "Chitwan", "Hetauda", "Biratnagar"];

[place[1], place[2]] = [place[2], place[1]];
console.log(place);
