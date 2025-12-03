/**
const body = document.body;

const h1 = document.getElementById("heading");

const paraChilds = document.getElementsByClassName("child"); // HTML Collection {}

console.log(paraChilds[2].textContent);
 */

/* Inline CSS
paraChilds[0].style.color = "blue";
paraChilds[1].style.color = "green";
paraChilds[2].style.color = "crimson";
*/

/**
* ! document.createElement()
* ! parentElement.appendChild()
const internal = document.createElement("style");   
internal.textContent = `.p1{
                                color: blue;
                            }
                            .p2{
                                color: green;
                            }
                            .p3{
                                color: crimson;
                            }`
const head = document.head;
head.appendChild(internal);
 */

/**
const paraTag = document.getElementsByTagName("p");
console.log(paraTag);

const span = document.querySelectorAll("span");
console.log(span);
 */

/**
 * ! HTML Collection vs NodeList
 

const pCollection = document.getElementsByClassName("child"); // [1,2,3]
const pNodeList = document.querySelectorAll(".child"); // [1,2,3]

pNodeList[2].remove();


console.log("HTML Collection:", pCollection);
console.log("Node List:", pNodeList);

*/

/**
 * ! document.createElement("")
 * ! appendChild()
 * ! append()
 

const heading = document.createElement("h1");  // <h1></h1>  => { textContent : ""}
heading.textContent = "Hello Developers!!";

// Parent Element
const body = document.body;
body.appendChild(heading);


const p1 =  document.createElement("p");  // <p></p>  => {textContent : ""}
const p2 =  document.createElement("p");  // <p></p>  => {textContent : ""}

p1.textContent = "Child-2";
p2.textContent = "Child-3";

// const parent = document.getElementsByClassName("parent")[0];  
// HTML Collection { 0: <div class="parent"></div>}

const parent = document.querySelector(".parent");
parent.append(p1,p2, "Abra ka dabra");
*/


/**
 * ! insertAdjacentElement(position, element)
 * 
 * position:-  "beforebegin", "afterend", "afterbegin", "afterend"


const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = "Child-2";
p2.textContent = "Child-4";
p3.textContent = "Child-6";

const midP = document.querySelector(".parent .mid");

midP.insertAdjacentElement("beforebegin",p1);
midP.insertAdjacentElement( "afterend", p2);

const lastP = document.querySelector(".parent :last-child");
lastP.insertAdjacentElement("beforebegin", p3)
 */


/**
 * ! insertAdjacentElement(position,element)
 * position = "afterbegin" , "beforeend"
 */

const p1 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = "Child-1";
p3.textContent = "Child-3";

const div = document.querySelector("#parent");

div.insertAdjacentElement("afterbegin",p1);
div.insertAdjacentElement("beforeend",p3);








