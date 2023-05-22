//_________OOP Concept___________//
/* Building blocks of OOP
Class
Object

what is oop
1.OOP concept
   
    ---Abstraction---
    hide implementation detail
    Essential properties user ko de dena
   ___how to implement
    1.make abstract class(function ki detail btani hoti hain execute krne ke lie)
    2.interface(varible ,attribute ya functions ko dfine krte hain k ks trh koi class ka fun use krna h
        like login in admin and user)
    implement( lazmi implement krne hain function ko parent claass se child class me)
    extend(optionally implement krna )
   
    ----Encapsulation
    function r data ko combine krne ka mechanism
    sandbox(a seprate enviorment ex andriod ki apps)
    
    -----inheritance-----
    class and derived class are use in inheritance so we do not duplicate data
    
    -----polymorphism------
    1.overriding(same function hon to kn sa chle ga)
    2.over loading(kn sa fun chlna chye )

    ----disadvantage---
    1.low scalability
    2. costly modeling
  ___________________________________________
       *------ access specifier------*
        how to acces fun, objects, variable from class
        1) Public
        2) Private
        3) Protected
        4) Final
        5) static
        -----PUBLIC-----
        we can access everything from class
        -----PRIVATE------
        we cannot access or change from classs
        ----PROTECTED------
        Only Accesssilbe from child class
        ------FINAL-------
        Cannot change (CONSTANT)
        ------STATIC------
        a data which is same for all classes if we change then changin will done in all classes
        ________________________________________
        -----constructor-----
        consructor is always a function(is also override)
        ----default Construct-------
        
    */
//    class User{
//     constructor(name){
//         this.name =name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
//    }
//    let user = new User('Usman');
//    user.sayHi();

// //___________
// class Car{
//     constructor(model){
//         this.model = model;
//     }
//     model_name(){
//         console.log(`this car model is ${this.model}`);
//     }
//     get model(){
//         return this.model;////naming  convention for private variable is *_name* used under score
//     }
   
//     set model(value){
//         if (value.length<4) {
//            console.log(this.model);
//            return; 
//         }
//         else
//         this.model = value;
//     }
// }
//  let model_number = new Car();
// console.log(model_number.model_name='aw');
// model_number.model_name();
// model_number = new Car('222')
// model_number.model_name()
// console.log(typeof(User));///type of class
//__________________________________________
//another method
// class Car{
//     model = '2002'
//     model_name(){
//         console.log(`this car model is ${this.model}`);
//     }
// }
// new Car().model_name();
// class Button{
//     constructor(value){
//         this.value = value;
//         // this.click = click///fun binding
//     }
// click(){
//     console.log(this.value);
// }
// }
// const button = new Button('hello');
// // setTimeout(button.click,1000)
// //setTimeout(button.click,1000);
// setTimeout(() => {
//     button.click
// },1000);
//____________Inheritance class____________
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  //let animal = new Animal("My animal");

class Rabbit extends Animal {
    static name1 = 'panda';
    constructor(name1){
        
        super(name1)
    
    }
    hide() {
        super.run(5)
      console.log(`${this.name1} hides!`);
    }
  }
  
  //let animal = new Animal("My animal");
// animal.run(10);
// // Output: My animal runs with speed 10.
// animal.stop();
// // Output: My animal stands still.

let rabbit = new Rabbit("White Rabbit");
// rabbit.run(20);
// // Output: White Rabbit runs with speed 20.
rabbit.hide();
console.log(Rabbit.name1);
// Output: White Rabbit runs with speed 5.
// Output: White Rabbit hides!
//_______________________________TO_DO_Task_____________________________ 
