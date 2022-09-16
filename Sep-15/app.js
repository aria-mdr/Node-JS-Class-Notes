

/* 
    variables : how we store and retrieve information (value) with javascript - done 
    how to print stuff to the terminal console - done
    how to run our javascript code on the server - done
    data types: different types of information (value) we can store - done
    operators: symbols (syntax) that tell javascript to do specific things - done 
    calculations: how we can do math - done
    logical statments: how javascript makes decision about what

    loops: doing the same thing over and over based on a conditional
    *bonus: built in functionalities (date)
*/

// declearion: telling CPU, we need some space to store value. we give CPU a name and cpu blocks a square for us
// syntax declarations: keywork (let, cosnt, var) followed by a space and then the name of the variable. name of the variable
// can be anything expect for reservered keywords (let), can not start with a number
// when we declare a variable without intialization, we have undefined or garbage until we store something there
let name;
// console.log(name); // undefined since name has not been intializated

// intialization: giving CPU a value to be stored in a square
// syntax for intialization: name of the variable, the assignment operator (=) followed by the value to be stored
name = 'Aria';
// console.log(name);

// mix declaration and intialization on the same line
// const keyword: declares a constant variable, can not be changed after intialization, intialization needs to happen when declaring variable
// const dob = 'Sep 15';
const dob = 'Sep 15';


// console.log followed by pranthasis, inside them goes the value you want to print
// value can be name of variable, sting, number etc
// console.log(dob);

/*
    data types: differen types of values that can be stored in variables
    variable type is derviced from the value you want to store
    JS, does not care what you store in a variable. other languages do. this is because JS is loosly typed
        - number, integer => 1, 2, 3
        - floats => 1.2, 2.542231
        - strings => "23", 'a poem, name iasd'
        - boolean => true, false
        - []
*/

let integer =  1;
let float = 2.542231;
let string = 'Some "text", can also be/include numbers like 23';
let numberInString = "twenty two";
let a = true;
let boolean2 = false;

a = false;
a = 12;

/*
    syntax for doing math, comparison, assignment
    - = : assignment operator. takes a right hand (variable/value) and a left hand (variable). takes what ever is in right hand and stores it in left hand
    - comparison operators: return booleans
        - < : takes a right hand, and a left hand. compares right with left. if left hand is less than right hand gives back true. other wise false
        - > : takes a right hand, and a left hand. compares right with left. if left hand is bigger than right hand gives back true. other wise false
        - == : takes a right hand, and a left hand. compares right with left. if left hand is equal to right hand gives back true. other wise false
        - <= : takes a right hand, and a left hand. compares right with left. if left hand is less than or equal to right hand gives back true. other wise false
        - >= : takes a right hand, and a left hand. compares right with left. if left hand is bigger than or equal to right hand gives back true. other wise false
        - === : takes a right hand, and a left hand. compares right with left if left hand is equal to right and the type hand gives back true. otherwise false
        - ! : convers a true to false, and a false to true
        - != : non equality check,
        - !== : type safe non  equality check
    - mathematical operator: numbers/strings
        - +: takes a right hand, and a left hand, if both are number it adds them. if both are string it concats them. if its a mix of number and string, converts and contacts or adds them
        - -: takes a right hand, and a left hand, if both are number it substracts them. only works with numbers
        - *: takes a right hand, and a left hand, if both are number it multiply them. only works with numbers
        - /: devision, takes a right hand, and a left hand, if both are number it divide them. only works with numbers
        - %: takes a right hand, and a left hand, if both are number it divides, but retuns the reminder of the divison
*/

let test = integer < float;
// console.log(24 <= 24)

// console.log(test )
// console.log(!test )

// console.log( 24 != "24" ) 
// console.log( 24 !== "23" )

// console.log( '24230' + 11230 )

// console.log(name + ' is born on ' + dob)

// console.log(12 % 2)

let maxNumber = 907199254740991.23

// console.log(maxNumber)

// console.log(maxNumber * 2)

// console.log( 10 * (2 - 19) )

/* if statment executes a block of code only when the given condition is true
    keyword if, followed by a condition withing (), followed by a block of code whithin {}
*/
let today = 'Sep 15';
let age = 23;

if (today === dob) {
    console.log('happy birthday ' + name);
    age = age + 1
}


console.log('you are ' + age + ' years old')