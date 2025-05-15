const myMap = new Map()

myMap.set("abhishek", { phone: 8875930933, adress: "bhadra" })
myMap.set("parhlad", { phone: 7845765648, adress: "arniyawali" })
myMap.set("ankit", { phone: 8824513345, adress: "nohar"})
myMap.set("greet", ()=>"welcome to lazybinary")
// console.log( myMap.get("greet")());   //that is,how we can get a function
const ankitPhone= myMap.get("ankit").phone

//---------loop on map-----//
for (const [key,value] of myMap) {
     if (typeof value==="function") {
        console.log(`${key}:${value()}`);

     } else {
        console.log(`${key} => ${value.phone},${value.adress}`);
        
     }
    
    
}

//---------removing data-----------//
// console.log(myMap.size);
// myMap.clear() for removing data from a map 
// console.log(myMap.size);

//----------delete data------------//
// myMap.delete("abhishek")
// console.log(myMap.has("abhishek"));


//-----getting keys from map------///
// const mapIter = myMap.keys()

// console.log(mapIter.next().value);
// console.log(mapIter.next().value);
// console.log(mapIter.next().value);


//------getting values from map------///
// const mapValue = myMap.values()
// console.log(mapValue.next().value);
// console.log(mapValue.next().value);

// console.log(mapValue.next().value);



//maps always have unique value it means we dont set same value again