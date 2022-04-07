// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent={
    name:"Yukesh",
    isAdmin:true,
    present: function () {
                console.log('Yes')
       }
    
}
let child={}
child.__proto__ = parent
child.present()



// Write code to explain prototype chaining

let obj1={
    name:"Yukesh",
     set:function(){
         console.log("set")
        }
 }
 let obj2={
     lname:"K",
     present:"true",
 }
    let obj3={
        food:"noodle",
        like:"true",
    
     }
    
     obj2.__proto__=obj1
     obj3.__proto__=obj2
     obj2.set()
    obj3.set()
    


//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
     for (let key in child) {
        if (child.hasOwnProperty(key)) {
              console.log(key, 'Own')
          } else {
              console.log(key, 'Inherited')
          }
     }



     
 //  Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

     let cal=[10,20,30,40,50]
     let res = cal.reduce((acc,curr)=>{
         acc+=curr
         return acc
     },0)
     console.log(res);