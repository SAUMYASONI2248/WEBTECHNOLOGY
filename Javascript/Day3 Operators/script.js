// // Logical NOT
// let user="Saumya";

// if(user)
// {
//         console.log("Invalid User")
// }



// // INCREMENT/DECREMENT OPERATOR

// // 1. pre increment
// // 2.post increment


// let x = 1;
//     x = x++;

// let y = x++;
// console.log(x);
// console.log(y);

// binary Operator
/**1. Arithmetic operator
 * +,-,%,*,**,/
 * 2.Assignment Operator (=)
 * 
 * 3. Compound Assignment Operator:- Arithmetic and Assignment operator
 */


// Relational Operator;-
// let a="10";
// let b="20";

// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);


// Logical AND (&&) Operator:-

// const x=10;
// const y = 20;
// const z =30;

// const h = x < y && y > z;
// console.log("h:",h);

/**
 * True : Truthy
 * 
 * 1. 0.00001
 * 2. +0.1
 * 3.white space
 * 4. "chombu"
 * 5. 20
 * 6. []
 * 7. {}
 * 
 * False : Falsy
 * 1. 0
 * 2. 0n
 * 3. "" (Empty String)
 * 4.undefined
 * 5.null
 * 6.Nan
 * 7.0.0
 */

// const a = "Raj";
// const b = "<h1>Hello World</h1>";

// const x = "Raj" && "<h1>Hello World</h1>";
// console.log("x:",x);

// const q = prompt("Enter Fullname:","Chombu");
// console.log("q:",q)
// const r = "<h1>Hello World</h1>";

// const x = q && r;
// document.write(x);

// const a = 10 > 20;
// const b =0;

// const y = a && b;

// console.log("y:",y);  

// LOGICAL OR

// const email = prompt("Enter Email Id"); 
// // email = null(falsy)," "truthy
// const mobile =prompt("Enter mobile number");
// // 

// if(email.trim() || mobile.trim()){
//     console.log("logged In");
// }
// else{
//     console.log("Please provide valid email or mobile number");
// }


// ---------------ternary operator-----------------

// const a = +prompt("Enter first number");
// const b = +prompt("Enter Second Number");
// const c = +prompt("Enter third Number");



// const bigTwo = a > b ? a : b;

// // const bigThree = bigTwo > c ? bigTwo : c;

// const bigThree = a > b 
// console.log("bigThreeNumber:",bigThree);

// const user = prompt("Enter Username");
// // cancel = null (falsy)
// // ok = emptyString

// const header = document.querySelector("header");

// header.innerHTML = user.trim() ?'Welcome $(user)' : " ";


