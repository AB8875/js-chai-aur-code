const obj1 = {
    one: "abhishek",
    two: "sammy"
}
const obj2 = {
    three: "peter",
    four: "burce"
}
/*--------------------assign method-------------------*/
// const obj3 = Object.assign({}, obj1, obj2) //in this syntax {}-target and other objects are-sources.
//this format not used in frequently


/*-------------------spread method---------------------*/
// const obj3={
//     ...obj1,...obj2
// }
// console.log(obj3);
//this format is used frequently
const gamePlayer={}
gamePlayer.id="one"
gamePlayer.name="abhishek"
gamePlayer.email="ab@gmail.com"
gamePlayer.isLoggedIn=false

// console.log(Object.keys(gamePlayer));
// console.log(Object.values(gamePlayer));
// console.log(Object.entries(gamePlayer));
// console.log(gamePlayer.hasOwnProperty('name')); //this method tell us that any property
// //  exists in our object.

 
/*----------object destructre and JSON API intro--------------*/

const user={
    name:"abhishek",
    role:"fullstack developer",
    company:"lazybinary",
    email :"lazy@gmail.com"
}

const{name:username,role,company:institute,email}=user



console.log(institute);
