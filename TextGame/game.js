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
    
    var notebook = false
Game();

function Game(){

    document.write("Project Plateau!");
    var playerName = prompt("What is your name?");
    alert("Welcome to P.P. "+ playerName);
    
    Plateau();
    
    PlateauE4();
    
    function Plateau(){
        var PlateauE4 = prompt("You are on the top of a plateau standing near the edge. The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. /n -look around /n -pick up notebook and pen /n -read the pedestal /n -move NSEW").toLowerCase();
        if(PlateauE4 == "read the pedestal" || PlateauE4 == "read"){
            if(!notebook){
                var notebookaction = (" ")
            }
             if(notebook){x
                var notebookaction = ("n/ -write text down")
            }
            var pedestalRead = prompt("The pedestal reads: WWN-Read Carefully. /n -look around" +notebookaction+ "/n -move NSEW").toLowerCase();
            }
        else if(PlateauE4 == "look around" || PlateauE4 == "look"){
            var LookAround = prompt("The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. The rest of the plateau is basically empty except for a small silver breifcase in the center and a wooden shack on the far side. /n -look around /n -read the pedestal /n -move NSEW").toLowerCase();
            }
        else if(PlateauE4 == "pick up notebook and pen" || PlateauE4 == "pick up notebook"){
            var NotebookCollect = prompt("Gotten! /n -look around n/ -read the pedestal n/ -move NSEW").toLowerCase();
            var notebook = true
            }
        else if(PlateauE4 == "move west");
            
        PlateauD4()
        
        
        
PlateauD4();
    
    var PlateauD4 = prompt("Nothing interesting to see here. n/ -look around n/ -move NSEW").toLowerCase();
            
                  
            
        }   
    
    
}    