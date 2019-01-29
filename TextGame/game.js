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

    document.write("Project Plateau!");
    var playerName = prompt("What is your name?");
    alert("Welcome to P.P. "+ playerName);
    
    prison();
    
    function Plateau(){
        var Plateau = prompt("You are on the top of a plateau standing near the edge. The world around you is a vast orange desert under a bright blue sky. In the distance you spot a couple oases with blue water and lush green trees. In fron of you is a pedestal with a notebook and pen and some writing on it. /n -look around /n -pick up notebook /n -pick up pen /n -read the pedestal /n -move NSEW"). toLowercase();
        
        if(plateau == "read the pedestal" || plateau == "Read"){
            var  pedestalRead = prompt("The pedestal reads: WWN-Read Carefully. /n - /n -move rug /n -eat bugs");
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