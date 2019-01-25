// single kline comment

/*

Multiline commment 

*/

// document.write("<h1>I can't wait for <em>Spring!</em></h1>)

// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like Pokemon?");

// prompt("What type?");
Game();


function Game(){

    document.write("Legend of the Cactus Dragon!");
    var playerName = prompt("What is your name?");
    alert("Wecome to the land of Drizdal "+ playerName);
    
    prison();
    
    function Prison(){
        var Prison = prompt("You wake up...Your head is pounding and your vision blurred. After pacing around walking off the headache your vision clears. It appears you are in prison and you cannot remember why. /n -look around /n -go back to sleep /n -taunt the guard"). toLowercase();
        
        if(prison == "look around" || prison == "Look"){
            var  prisonlook  = prompt("The prison is small, dirty, and damp. A rat scurries into a hole in the corner. Bugs squirm and scamper underfoot. There is a barred window to the back. An occupied bed has a stranger asleep snoring to the right. The cell bars and locked door to the front. An epty bed which you had slept in the night before to the right. In the center of the dirt floor is a lumpy moldy rug. /n -wake stranger /n -move rug /n -eat bugs");
        }
        
        else if(prison == "go back to sleep" || prison == "sleep"){
            alert("You fall back to sleep in your dirty cot. You dream of distant lands and adventures");
            var resume = confrim("Do you wish to continue?");
            
            if(resume){
                Prison();
            }
            else{
                alert("Defeat");
            }
        }
    }

}