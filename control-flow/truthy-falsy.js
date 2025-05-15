//falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN


//truthy values
//"0", 'fasle'/"false", " ", [], {}, function(){}

//note:-if any string have space then its truthy value or any string havn't space then its falsy value.

//-----------if array is empty---------------//
const scoreValue=[] //this is empty array but we are not check with this type.

if (scoreValue.length===0) {
    // console.log("Array is Empty")

}                               //any array empty or not,this type is accurate.

//-----------if object is empty---------------//
const emptyObject={}
if (Object.keys(emptyObject).length===0) {
    console.log("Object is empty");
                                            //when we use object.keys then object converts into array and
                                            //after like array we use .length

    
}

