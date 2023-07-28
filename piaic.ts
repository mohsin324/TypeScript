// let message = "Hello world";
// console.log(message);

// lett message = "Hello world" // syntax error

// let message = "Hello world";
// message = 6;
// console.log(message);

//           strongly types
// let country: string = "Pakistan";
// country = "Canada";
// let num : number = 10;
// num = 10.9;
// let bool : boolean = true;
// bool = false

// const, let, var
// const does not change
// let has blocked scope
// var can be changed

//                import from different files //// modules
// import a from "./first";
// import { b, c } from "./second";
// console.log(' a ', a, ' b ', b, ' c ', c);

// import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

// let newAge = Math.random() > 0.6 ? "Khan": 60;
// console.log('New Age: '+ newAge)

//  just like interface
// let Student: {
//     name: string,
//     age: number
// }

// Student = {
//     name: "Mohsin",
//     age: 25
// }

// console.log(Student.age)

//                     callback
// const myCallBack = (text: string) : string => {
//     return text
// } 
// const callCallBack = (initialText: string, myCallBack: (text: string)) :string => {


//     return "hello"
// }

// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }

// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }

// callingFunction("myText", myCallBack);


//        function overloads
// function add(p1 : number, p2: number) : number {
//     return p1 + p2
// }
// function add(p1 : string, p2 : string) : string {
//     return p1 + p2
// }
// function add(p1 : boolean, p2 : boolean) : boolean {
//     return p1 ? p1 : p2
// }

// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));
// function add(a1: string, a2: string) : string;
// function add(a1: string, a2: string) : string;
// function add(a1: string, a2: string) : string;


// function add(a1: any, a2: any): any{

// }

//                Tuples
// var tuple : Array<number | string | boolean> = ["Hello", 'trueeeee', 1, true, 1, true, 1, true, 1];
// console.log(tuple)
// tuple.push("hello");
// tuple.push(3.17);
// console.log('tuple after modification '+ tuple);
// const secondElement = tuple[1];
// console.log(secondElement+' second element ');