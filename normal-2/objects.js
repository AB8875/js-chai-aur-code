//object-literals

const mySym= Symbol("key1")

const lazyBinary ={ 
    name:"abhishek",
    course:"fullstack Dev",
    city:"Bhadra",
 [mySym]:"lazykey", //when we use symbol then we use [] this brackets.
    email:" lazybinary@gmail.com",
    isLoggedIn: true,
    lastLoginDays:["tuesday","friday"],
}
   
// Object.freeze(lazyBinary) //when we want not anyone make changes in our object then we use freeze.
lazyBinary.email="kilvis@gmail.com" 
 lazyBinary.greeting= function(){
   return ("hello AB");
    
 }
console.log(lazyBinary.greeting());
 
