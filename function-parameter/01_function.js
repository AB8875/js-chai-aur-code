function myCompany(place) {
    if (place === "lazybianry") {  //when you are use if-else then after function name you must declare 
        //variable 
        console.log("you are in right place.");


    } else {
        console.log("byebye");

    }
}
// myCompany("asdf");


/*------when we have more data--------*/

function phonePrice(...price1) {
    return price1

}
// console.log(phonePrice(6500, 6000, 9600));

/*-------put object in function-------*/


const user = {
    name: "abhishek",
    role: "fullstack developer",
    projectHandle: 22
}
function getValue(values) {
    console.log(`my name is ${values.name} and my role is ${values.role} and 
i had ${values.projectHandle} projects handle.`);

}
getValue(user)
// getValue({
//     name:"ab",
//     role:"designer",
//     projectHandle:30
// })
//note- as same as object we get values in arrays.

