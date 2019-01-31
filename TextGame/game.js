// single kline comment

/*

Multiline commment 

*/

// document.write("<h1>I can't wait for <em>Spring!</em></h1>)

// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like Pokemon?");

// prompt("What type?");

function Game(){
    
    var notebook = 0;
    document.write("Project Plateau!");
    var playerName = prompt("What is your name?");
    alert("Welcome to P.P. "+ playerName);
    
    Plateau();
    
    function Plateau(){
        var PlateauLevel = prompt("You are on the top of a plateau standing near the edge. The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. /n -look around /n -pick up notebook and pen /n -read the pedestal /n -move NSEW"). toLowercase();
        
            if(PlateauLevel == "read the pedestal" || PlateauLevel == "read pedestal"){
                var  pedestalRead = prompt("The pedestal reads: WWN-Read Carefully. /n -look around /n - /n -move NSEW");
            }
        
            else if(PlateauLevel == "look around" || PlateauLevel == "look"){
                alert("The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. The rest of the plateau is basically empty except for a small silver breifcase in the center and a wooden shack on the far side. /n -look around /n -read the pedestal /n -move NSEW");
            }
            else if(PlateauLevel == "pick up notebook and pen" || PlateauLevel == "pick up notebook"){
                var notebook = 1
                alert("Gotten! /n -look around n/ -read the pedestal n/ -move NSEW")
            }
                  
            
        }   

}
    Game();