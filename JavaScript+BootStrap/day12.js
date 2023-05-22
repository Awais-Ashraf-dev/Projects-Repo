/*
-----------Design Pateren----------
----------Singolton Pateren-------------
creat object automatically when an object execute
when we call the object it give object which is created
benefit is we cannot create object multiple time(use in databases)
-------------Factory Model----------------
dependency injection
tools which  manage the objects of different dependent classes
---------observer controller---------
--interview questions 30 percent from patteren--
---------Repository----------------
data which is used in app osko centralized jaga se lana h
----------Design Artitecture-----------
HOW TO ORGANIZE THE CODE

1. MVC(model view controller)
model(database code)(object relational manner)OMR(CONVERT data into classes is caleed
    model)
conrooler(recieve data make changes and send to view)
2.MVVM(model view view model)
3.MVN
*/
//-------todo app---------
/* task
1.id
2.description
3.status
behaviors/features
1. create task
2.update-change status and or-description(id cannot be changed)
3.delete task
------
user may create any number of task
*/
class Todo{
    constructor(id,desp,status){
          this.id = id;
        this.desp = desp;
        this.satus = status;


    }
    createTask(){
        console.log(`description is ${this.desp}`);

    }
    updateTask(desp,status){
        // this.id = id;
        this.desp = desp;
        this.status =status;
        console.log('id cannot change');
        console.log(`the updated task is ${this.desp}`);
        console.log(`the updated status is ${this.status}`);


    }
    deleteTask(){
        this.id = null
        this.desp = null
        this.satus = null
        console.log('Task is deleted');
    }
}
let myTask = new Todo(112,'hello','active')
//myTask.createTask();
//myTask.deleteTask();
myTask.updateTask('world','offline')

