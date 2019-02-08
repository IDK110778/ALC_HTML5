// single kline comment

/*

Multiline commment 

*/

// document.write("<h1>I can't wait for <em>Spring!</em></h1>)

// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like Pokemon?");

// prompt("What type?");


    
    var inventory = {
        notebook:1,
        glasses:1,
        food:5,
        waterbottle:5,
        
    }
Game();

function Game(){

    document.write("Project Plateau!");
    var playerName = prompt("What is your name?");
    alert("Welcome to P.P. "+ playerName);
    
    Plateau();
    
    function Plateau(){
        var PlateauE4 = prompt("You are on the top of a plateau standing near the edge. The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. /n -look around /n -pick up notebook and pen /n -read the pedestal /n -move NSEW").toLowerCase();
        if(PlateauE4 == "read the pedestal" || PlateauE4 == "read"){
            var pedestalRead = prompt("The pedestal reads: WWN-Read Carefully. /n -look around /n -write text down /n -move NSEW");
            }
        else if(PlateauE4 == "look around" || PlateauE4 == "look"){
            var LookAround = prompt("The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. The rest of the plateau is basically empty except for a small silver breifcase in the center and a wooden shack on the far side. /n -look around /n -read the pedestal /n -move NSEW");
            }
        else if(PlateauE4 == "pick up notebook and pen" || PlateauE4 == "pick up notebook"){
            var NotebookCollect = prompt("Gotten! /n -look around n/ -read the pedestal n/ -move NSEW");
            }
        else if(PlateauE4 == "move west")
            var PWestE4 = prompt("You leave the pedestal behind. The space around you is pretty much empty. There is lots of sand at your feet and a few leaves blowing in the soft wind. n/ -look around n/ -move NSEW");
                  
            
        }   
    
    
}    