LOOSE EQUALITY:-(= =)

Compares Values with type conversion
converts operands to the same type before compairing
5 == "5" returns true

(===)Strict Equality:-

Compares both value and type
no type conversion happens 
5 ===  "5 " returns false

Best Practice use === by default to avoid unexpected behaviour from type coercion.

Strict Not Equality:-(!==)

Diffrence between != and !==:-

!=(Loose inequality);-
compares values with type conversion
converts operands to the same type before compiaring
5 != "5"
 returns false (they are considered equal after conversion)

 !==(Strict inequality):=

 compares both values nad type
 no type conversion happens
 5 != "5" returns true


 Truthy Value:=

 Values that converted into true is known as truthy

 Falsy value:-

 Values that converted into false is known as falsy.
 (false, 0, "", null, undefined, Nan)

TERNARY OPERATOR:----------------

operand1 ? operand2 : operand3
| (Expect Boolean value)           |          |
|              (True)     (False)
|--------------|           |
|                          |
|---------------------------


TYPES OF LITERALS:-

1. Primitive literals
2. non primitive literals


NULL,NAN, UNDEFINED:------------

In javascript, null and undefined are both used to represent "no value " but they mean slightly different things.

Undefined means variable exists but hasn't given a value yet.(Implicit)

null means you intentionally set something to "no value".(Explicit)



TEMPLATE STRINGS:-

template strings are also called template literals are strings enclosed in backticks(`)that allow you to embed expressions and span multi lines.

STRING INTERPOLATION:-

it is the ability to insert variables or expressions directly into a string using $(Expression) syntax within template strings.


Explicit type coercion:-

to convert one type of data into another type forcefully by js engine is known as explicit type coercion.

Here,we use some functions;
number()
String()
Bigint()
symbol()

typeof():-

typeof is a javascript unary operator that returns a string indicating the datatype the data type of a value.


LEXICAL SCOPE:-
the scope determined by where variables and functions are physically written in the code (at author time).not where they're called from .
Inner functions have access to variables in their outer functions.

LEXICAL ENVIORNMENT:-

An internal specifications object that stores varibales/functions identifiers and their values for a particular scope along with the reference to its outer (parent) lexical enviornment.

SCOPE CHAINS:-
The mechanism by which javascript looks up varibale by traversing through nested lexical enviornments





#Javascript code run in two phases:-

Variable Phase
Execution Phase

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                