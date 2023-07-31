// // OOP in Typescript
console.log(`---------------------Starts Learning OOP in Typescript-----------------------`);
// // class syntax
// class Human {
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
//     // class method
//     eat(){
//         console.log(`${this.name} is Human and is eating`);
//     }
// }
// class Animal {
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
//     // class method
//     eat(){
//         console.log(`${this.name} is Animal and is eating`);
//     }
// }
// class WildAnimal {
//     title: string;
//     constructor(title: string){
//         this.title = title
//     }
//     eat(){
//         console.log(`${this.title} is a Wild Animal and is eating`);
//     }
// }
// class Robot{
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
// }

// let h: Human = new Human("Tom");
// let a: Animal = new Animal("Goat");
// let r: Robot = new Robot("R2-D2");

// // let h2 = h;
// // h = a;
// // h.eat()



//         class structural typing
// class Human {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// class Animal {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     eat(quantity: number){
//         console.log(this.name +' is a Animal and is eating  ')
//     }
// }
// let d = { name: 'Cat', age: 6 }
// let a1: Animal = { name: 'cat', age: 6};  not allowed  eat: () => console.log("hellow")
// let a2 : Animal = { name:'cat', age: 6, eat: function(){console.log("hellow")}}

// a2.eat(8)

// let isAnimal: boolean = a2 instanceof Animal;
// console.log(isAnimal)
// for animal


// let a2: Animal = {name:"Dog",age:4, eat: function() {
//     console.log("Eat in object literal");
// }}; 

// // a2.eat(); // Not allowed 
// a2.eat(3); // Works fine

// let isAnimal:boolean = a2 instanceof Animal; 
// console.log(isAnimal); // What will be printed?

//                      Inheritance

// class Animal {
//     name: string;
//     constructor(theName: string){
//         this.name = theName
//     }
//     move(4s: number){
//         console.log(this.name + ' moved '+ meters + ' m.')
//     }
// }
// class Snake extends Animal {
//     constructor(name: string){
//         super(name)
//         this.name =name
//     }
//     move(met: number = 4){
//         console.log('...starts moving....');
//         super.move(met)
//     }
//     bite(){
//         console.log('bite')
//     }
// }
// class Horse extends Animal{
//     constructor(name: string){
//         super(name);
//     }
//     move(meter: number = 0){
//         // alert("Galloping.....");
//         super.move(meter)
//     }
// }


// let snake = new Snake('python');
// snake.move(100);

// let horse = new Horse("Hellen");
// horse.move()
// console.log(horse instanceof Horse )

//                  abstract class

// abstract class Base{
//     constructor(name: string){
//         this.name = name
//     }
// }
// abstract class don't have constructor
//                       Constructor
// class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     animalType(type: string) {
//         console.log(`This animal has ${type} type`);
//     }
// }
// class Cat extends Animal {
//     type: string;
//     run: string;
//     constructor(type: string, run: string, name: string, age: number){
//         super(name, age);
//         this.type = type;
//         this.run = run
//     }
//     an(type: string){
//         super.animalType(type)
//     }
// }
// let newCat = new Cat("Russian", "100mph", "Grayee", 8);
// newCat.an("Russian/Chineese");
// console.log(' hello ');

// class private modifier
// class Animal {
//     private name: string;
//     constructor(theName: string) { 
//         this.name = theName; 
//     }
    
//     move(meters: number) {
//         console.log(this.name + " moved " + meters + "m.");
//     }
// }
// class Cat extends Animal{
//     // constructor(name: string){
//     //     super(name)
//     // }
//     move(meters: number){
//         super.move(5)
//     }
// }
// let newCat = new Cat("Grayeeeee");
// newCat.move(10)

//                            nominal type
// in nominal type while comparing two classes, there must be the same type 
// if one class has private modifier than others must have private modifier

