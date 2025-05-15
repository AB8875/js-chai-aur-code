// let i=0 
// while (i<=10) {
//     console.log(`Number is ${i}`);
//     i= i+2 

// }
// //------do while------------//
// let code=1
// do {
//     console.log(`the value is ${code}`);
//     code++
// } while (code<=15);



const myArray = ["peter", "bruce", "sam", "johny", "batman"];
let i = 0;

while (i < myArray.length) {
  if (myArray[i] === "bruce") {
    i++;            // increment before continue
    continue;
  }

  if (myArray[i] === "johny") {
    break;          // break immediately (no increment needed)
  }

  console.log(`Student name is ${myArray[i]}`);
  i++;
}
