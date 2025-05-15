const userLoggedIn= true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 4==5){              //all condition must True
    console.log("User Allows to log in");
    
} 
if(loggedInFromGoogle || loggedInFromEmail){        //At least one condition must be True
    console.log("User Allows to login via email or google");
    
}