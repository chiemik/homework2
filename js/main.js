/* for (var i = 1; i <= 100; i++) {
    document.write("<br>" + "You Chose" + i)
}
var rendomNumber = prompt()*/

// console.log("guessResponse");
var computer = Math.floor(Math.random()*100);
console.log(computer);


function game(){
    var user = document.querySelector(".guess").value;
    console.log(user);

    if (user > computer){
        document.getElementById("guessResponse").innerHTML = "<br> You're too high.";
    } else if (computer > user){
        document.getElementById("guessResponse").innerHTML = "<br> You're too low."; 
    } else if (computer == user){   
        document.getElementById("guessResponse").innerHTML = "<br> You're like a genius something!!!!"; 
    } else {
        document.getElementById("guessResponse").innerHTML = "<br> Like Becky omg pick something!!!!";         
    }    
    }



 // var max = 100
 // var min = 1
