// // let myName : string = "Mohsin Munir";
// // let age : number = 25;
// // let profesion : string = "Software Developer";
// // console.log("Hello This is "+myName+" and I am "+age+" years old "+"and I am a "+profesion);
// // console.log(`Hello This is ${myName} and I am ${age} years old and I am a ${profesion}`);

// interface Student {
//     name: string;
//     age: number;
//     class: string;
//     faviouriteSubject: string;
// }

// const studentObj : Student = {
//     name : "Mohsin",
//     age: 25,
//     class: "BS(CS)",
//     faviouriteSubject: "Programming",
// }
// // console.log(JSON.stringify(studentObj)+ ' student object ')
// // console.log(studentObj.faviouriteSubject+' favourite subjecgt ')

// function studentName(obj: Student) : object  {
//     let name = obj.name 
//     let age = obj.age
//     let favourite = obj.faviouriteSubject
//     let classs = obj.class
//     return { name: obj.name, age: obj.age }
// }
// let values = studentName(studentObj)
// console.log(values.)
// // console.log(JSON.stringify(values.name)+' values ')
// // console.log(`My name is ${values.name}`);

// const helloWorld = () : string =>  {
//     return "Hello world"
// }
// // console.log(helloWorld() + ' hello world function ')

// interface Student {
//     name: string;
//     age: number;
//     cla: string;
//     favouriteSubject: string;
//   }
  
//   const studentObj: Student = {
//     name: "Mohsin",
//     age: 25,
//     cla: "BS(CS)",
//     favouriteSubject: "Programming",
//   };
  
//   function studentName(obj: Student): Student {
//     let name = obj.name;
//     let age = obj.age;
//     let favouriteSubject = obj.favouriteSubject;
//     let cla = obj.cla;
//     return { name, age, favouriteSubject, cla };
//   }
  
//   let values = studentName(studentObj);
  
//   console.log(values.name); // Output: Mohsin

//   console.log(values.age)
//   console.log(values.cla)
  
// interface Student extends University {
//   age: number;
//   department: string
// }
// interface University {
//   name: string,
//   address: string,
//   rank: string
// }

// const university : University =  {
//   name: "Iqra University",
//   address: "Airport Campus",
//   rank: "200th QS rank"
// }

// const student: Student = {
//   department: "BSCS",
//   name: "Mohsin Munir",
//   address: "Sheet # 23, House # 30/2, Model Colony, Malir, Karachi",
//   rank: "200th QS rank",
//   age: 25,
// }

// console.log(JSON.stringify(student)+ ' type of student '+ typeof(student))

// course outline
// types in typescript
// string
// number
// any
// boolean
// Array

//                         Types in TypeScript
// const myName = "mohsin";

// const lastName : string = "munir"
// // if no type define then it select default 
// const tech = ['Mohsin', 25, "Programmer"]
// const tech1 : Array<string> = ["Computer science", "Programmer"];
// const tech2 : string[] = ["Computer science", "25"];
// const tech3 : number[] = [1, 2]
// const student = { name: "ABC", age: 25 }
// const obj: { [key:string]: string} = {
//   name: "Mohsin"
// }

//                      type 
// type Species = "Cat" | "Dog" | "Bird";
// let myfavoritePet : Species;
// myfavoritePet = "Bird";
// console.log(myfavoritePet);

//                          Interface
// interface Student{
//   name: string;
//   age: number;
//   city: string;
//   // optional keys in interface and object
//   district?: string;
//   country: string;
// }
// const studentObject: Student = {
//   name: "Mohsin",
//   age: 25,
//   city: "Karachi",
//   country: "Pakistan"
// }

/////////////////////    ENUM
// enum used to pre-define values
// enum Day { 
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// let bestDay: Day = Day.Friday;
// console.log(`best day ${bestDay}`)

// // conditional rendering    also called one liner
// let numb : number = 0 ;
// numb ? console.log(`Your numb is ${numb}`) : console.log(`Not numb ${numb}`);

// let Student1  = {
//     address: {
//         zipCode : 78546,
//         streetNumber : 21
//     },
// }
// console.log(Student1.myName)
// let myName = Student1.myName
// myName ? console.log(`Student myName ${myName}`) : console.log(`Not found ${myName}`)

////                    classes
class Greeter {
    
}





