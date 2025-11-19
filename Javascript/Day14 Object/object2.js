/**
// Insertion, Updation, Deletion and searching in Object
const user = {
    username: "Tinku",
    state: "UP",
    delKey: "asdfghjk"
}

// Insertion
user.age = 24;
// Updation
user.state = "Delhi";
// Deletion
delete user.delKey;
// search a key is present or not
console.log("state" in user);
 */



/**
 * ! Object Methods


const user = {
    username: "Sid",
    age: 24,
    greet :function outer(){
                console.log("Outer this:",this);  // this = user{}

                const inner = ()=>{
                    console.log("Inner This:",this)  // this = user{}
                }
                inner();
        }
}

user.greet()


 const user = {
    username: "Sid",
    age: 24,
    greet :() => {
                console.log(user);  // this = window

                const inner = () => {
                    console.log(user)  // this = window
                }
                inner();
        }
}

user.greet();
 */

/**
 * ! Object Inbuild Methods


const obj = {
    username:"Tinku",
    age: 24,
    city: "Noida"
}

const k = Object.keys(obj);
console.log("k:",k);


const v = Object.values(obj);
console.log("v:",v);
 */


// config driven ui or Dynamic Ui

// backend => Data{JSON Format} => Frontend => JS Object{key : value} => ui