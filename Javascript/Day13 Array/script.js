// // Array literal (most common)
// let fruits = ['apple', 'banana', 'orange'];

// // Array constructor
// let numbers = new Array(1, 2, 3, 4, 5);

// // Empty array with specific length
// let empty = new Array(5); // creates array with 5 empty slots

// // Array.of() - creates array from arguments
// let items = Array.of(1, 2, 3);

// // Array.from() - creates array from array-like or iterable objects
// let chars = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// console.log(items);

// /* Empty Array
// const arr1  = [];


// // Array with Literals
// const arr2 = [10,20,true,null,undefined,"Hello"];

// // new keyword and Inbuild Array Constructor
// const arr3 = new Array(5);

// */

// /**
//  * ! How to access an element
//  * ! Array Terminology
 
// // Array Elements = values = 10,20,30
// // Array size = length = 3 = last index + 1
// const arr = [10,20,30];
// console.log(arr[3]);
// */  

// /**
//  * ! push,pop, unshift,shift
// const arr = [10,20];
// arr.push(30,400);  // end me add
// arr.pop(); // end se remove
// arr.unshift(8,9); // starting me add

// const frontend = ["DB","html","css","js"];
// frontend.shift(); // starting se delete
//  */

// /**
//  * ! splice
//  */
// // arr.splice(1,0,20);
// // arr.splice(3,0,40);


// const arr1 = [ 10,50];
// const x = arr1.splice(1,1);    [30]
// arr1.splice(1,0,20,x[0],40);
// console.log("arr1:",arr1);
// console.log("x:",x);



// const arr2 = ["java","tailwind","js","sql","react","spring"];
// const skills = arr2.slice(1,5);

// skills.splice(2,1);
// console.log("skills:",skills);

/* Empty Array
const arr1  = [];


// Array with Literals
const arr2 = [10,20,true,null,undefined,"Hello"];

// new keyword and Inbuild Array Constructor
const arr3 = new Array(5);

*/

/**
 * ! How to access an element
 * ! Array Terminology
 
// Array Elements = values = 10,20,30
// Array size = length = 3 = last index + 1
const arr = [10,20,30];
console.log(arr[3]);
*/  

/**
 * ! push,pop, unshift,shift
const arr = [10,20];
arr.push(30,400);  // end me add
arr.pop(); // end se remove
arr.unshift(8,9); // starting me add

const frontend = ["DB","html","css","js"];
frontend.shift(); // starting se delete
 */

/**
 * ! splice

// arr.splice(1,0,20);
// arr.splice(3,0,40);


const arr1 = [ 10,50];
const x = arr1.splice(1,1);    [30]
arr1.splice(1,0,20,x[0],40);
console.log("arr1:",arr1);
console.log("x:",x);



const arr2 = ["java","tailwind","js","sql","react","spring"];
const skills = arr2.slice(1,5);

skills.splice(2,1);
console.log("skills:",skills);
*/

/**
 * ! reverse
 * ! indexOf(search value, starting index) => index number/ -1
 * ! includes(search value, starting index) => true/false


// const arr1 = [10,20,30,40,50];
// arr1.reverse();
// console.log(arr1);

const arr2 = ["php" ,"js" , "cpp" , "go" ,"java","python", "rust" ];

const y = arr2.includes("php" , 1);
console.log("y:",y);

// const x = arr2.indexOf("js" ,2);
// console.log("x:",x);
 */

/**
 *! sort(callback) = HOF

const num = [ 2,4,10,7,8,5,3,6,1,9] ;

num.sort((a,b) => b - a )         

console.log(num);
 */

/*
function (a,b)
{
    // return a - b; Ascending Order
    return b - a;   // Descending Order
}


(a,b) => a - b;   -ve  no swap
         a - b;   + ve  swap
         a - b;    0   no swap

(a,b) => b - a;   -ve  no swap
         b - a;   + ve  swap
         b - a;    0   no swap
*/


/**
 * ! forEach(callback) = HOF

const arr = [1,2,3,4,5];

const x = arr.forEach(function(element , index, array){
    array[index] = element * 10 ;
    return "Hello";
});
    
console.log("arr:",arr);
console.log("x:",x);
 */

/**
 * ! map(callback) => HOF
 * It returns modified array


const arr = [10,20,30,40,50];

const x = arr.map(function(element)
                    {
                        if(element < 40)
                        {
                            return element
                        }
                                              
                    })

console.log("x:",x);
*/
// function map()
// {
//     return [true, 20, 30, undefined, undefined]
// }




/**
 * ! filter(callback)


// const y = arr.filter((element) => element <= 30);

const arr = [10,20,30,40,50];
                            
const y = arr.filter((element) =>{
                            if(element <=30)
                            {
                                return true;
                            }
                           
                    })  // [10,20,30]
                    .map((val) => val * 10); 
                    
                    // map = [100,200, 300 ]
                      
console.log("y:",y);
 */

/**
 * ! reduce(callback , initial value of accumulator)
 * accumulator = total = addition = sum 


const arr = [10,20,30,40,50];

const total = arr.reduce(function(acc,element)
                        {
                                    acc = acc + element;
                                    return acc;
                        },0);

console.log("total:",total);
 */


/**
 * ! Example
 */

const cart =[
    {
        product:'iphone-17 pro',
        price:135000
    },
    {
        product: 'Apple airpods pro',
        price:25900
    },
    {
        product: 'mac book',
        price:239990
    },
    {
        product: 'Apple 20w charger',
        price:2190
    }
];

// cart = [ {}, {}, {}, {}]

const total = cart.reduce(function (acc, element){
    acc = acc + element.price;
    return acc;
},0);

console.log("total:",total);





