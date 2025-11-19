// // var a = 10; //global scope

// // let b = 20; //script scope (ye kisi bracket k ander nhii hoga {},[],())
// // const c = 30; //script scope


// // //BLOCK
// // {
// //     var x = 100; //global scope(var agar bracket k ander h toh wo global me jaega)
// //     let d = 40;  //block scope (let and const bracket k ander hoga toh block scope hoga)
// //     const c = 50; //block scope

// // }

// // function sum()
// // {
// //     var m = "hello"; //local
// //     let n = 40; //
// //     const o =300; //
// // }


// var a = 10;
// let b = 20;
// const c = 30;

// console.log(`a : ${a}`);
// console.log(`b : ${b}`);
// console.log(`c : ${c}`);


// var a = 1;
// let b = 2;
// const c = 3;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log("Inside Block");
//     console.log(`a :${a}`);
//     console.log(` b:${b}`);
//     console.log(`c :${c}`);
// }

// console.log("Outside a block");
// console.log(`a :${a}`);
// console.log(`b :${b}`);
// console.log(`c :${c}`);


//LEXICAL SCOPE
var a =10;

function parent()
{
    let b = 20;

    function child()
    {
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
}




