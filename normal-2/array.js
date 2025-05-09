 const myArr=[0,1,2,3,4,5,]

 const myHeros=["kilvis","shaitanpari","kansmama","kaliyanag"]

 const myArr2=new Array(1,2,3,4,5)

// console.log(myArr[0]);

// myArr.push(7) //Adding elements in Last of an array
 

// myArr.pop() // for removing last element in our array

// const newArr=myArr.join() //basically .join converts an array to string

// console.log(newArr);

// console.log(myArr);


/* slice or splice very important */

const myNew1=myArr.slice(1,3)
// console.log(myNew1);
//array.slice have ranges first starting and last ending. ending range not included in results

 let  spArr=[0,1,2,3,4,5,6]
let myNew2=spArr.splice(1,2,20)
// console.log(myNew2);


// ######################.best way to adding two or more arrays. ##########################
const webDev=["abhishek","ankit","manish"]
const webDes=["palak","surekha","sakshi"]
const allDevelopers=[...webDev,...webDes]
// console.log(allDevelopers);
//above this method called spread method

