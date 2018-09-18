console.log("Testing...");
// Exercise 1
var oper1 = 12 + 12;
var oper2 = 36 - 12;
var oper3 = 2 * 12;
var oper4 = 48 / 2;

console.log(oper1,oper2,oper3,oper4);


// Exercise 2

var op1 = 6 % 3;
var op2 = 10 % 2;
var op3 = 5 % 2;

console.log(op1 == op3);
console.log(op1 == op2);

// Exercise 3

var string1 = "Test grades as follows: \n";
var string2 = "Student 1: 96 \n";
var string3 = "Comment: \"None\"";

console.log(string1 + string2 + string3);


// exercise 4

var numbers = [10,20,30,40,50,60,70,80,90,100];
var  add = numbers[2] + numbers[4];
console.log(add);

//Exercise 5

var me = {
    first: "Jonathan",
    last: "Sequeira",
    age: 26,
    status: "Hot",
    desire: "make 100k"
}

console.log(`Hi my name is ${me.first}. I am ${me.age}. I am currently ${me.status}. I cant wait to ${me.desire}`);

// Exercise 6

var num = 1;

while(num <= 10){
    if(num % 2 == 0) {
        console.log(num);
    }
    num++;
}

for(var i = 1; i <= 10; i++){
    if(i % 2 == 1) {
        console.log(i);
    }
}


