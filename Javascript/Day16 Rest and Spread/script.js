
/**
 * ! Rest Operator in Object Destructuring
 
const obj = {
    username:"Tinku",
    age:24,
    address:{
        country:"India",
        state:"UP",
        pin:201301
    }
}

const {username , ...user} = obj;

console.log(username);
console.log(user);
*/

/**
 * ! Config Driven UI Array


// Config array with spread and rest operators
const uiComponents = [
  {
    id: 1,
    type: "button",
    label: "Submit",
    className: "btn-primary",
    events: {
      click: "handleSubmit",
    },
  },
  {
    id: 2,
    type: "input",
    placeholder: "Enter name",
    className: "form-input",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: 3,
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
    className: "form-select",
  },
];


const [f1 , ...ui ] = uiComponents ;

console.log(f1)   // {id :1}
console.log(ui)   // [ {id: 2}, {id:3}]
 */

/**
 * ! rest operator inside function 
 
const total = (...arr) =>{
// arr = [10,20,30,40,50,60]
    const sum = arr.reduce((acc, element) =>{
                acc = acc + element;
        return acc;
    }, 0);

    return sum;
}
const result = total(10,20,30,40,50,60);
console.log("result:",result);
*/
