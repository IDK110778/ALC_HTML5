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
    while(!confirm("Are you sure you want this name?"))
    {   
        playerName = prompt("What name do you want?");
    }
    alert("Welcome to P.P. "+ playerName);
    
    Plateau();
    
    PlateauE4();
    
    function Plateau(){
        var PlateauE4 = prompt("You are on the top of a plateau standing near the edge. The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. \n -look around \n -pick up notebook and pen \n -read the pedestal \n -move NSEW").toLowerCase();
        
        if(PlateauE4 == "read the pedestal" || PlateauE4 == "read"){
            var pedestalRead = prompt("The pedestal reads: WWN-Read Carefully. \n -look around \n -pick up notebook and pen \n -move NSEW").toLowerCase;
        
            if(pedestalRead == "move west"){
                var PlateauD4 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
            }
            else if(pedestalRead == "move north"){
                var PlateauE3 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
            }
            else if(pedestalRead == "move south"){
                var PlateauE5 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
            }
            else if(pedestalRead == "move east"){
                var PlateauE4Death = prompt("You fall off the plateau and die!!! \n -give up \n -restart").toLowerCase();

                    if (PlateauD4Death == "give up"){
                        var done = alert("Bye")
                        }
                    else if (PlateauD4Death == "restart"){
                        Plateau();
                        }
            
           
        else if(PlateauE4 == "look around" || PlateauE4 == "look"){
            var LookAround = prompt("The world around you is a vast orange desert under a bright blue sky with fluffy white clouds. In the distance you spot a couple oases with blue water and lush green trees. In front of you is a pedestal with a notebook and pen and some writing on it. The rest of the plateau is basically empty except for a small silver breifcase in the center and a wooden shack on the far side. \n -look around \n -read the pedestal \n -move NSEW");
            }
        
        
        
        else if(PlateauE4 == "pick up notebook and pen" || PlateauE4 == "pick up notebook"){
            var NotebookCollect = prompt("Gotten! \n -look around \n -read the pedestal \n -move NSEW");
            var notebook = true
            }
        
        
        
        else if(PlateauE4 == "move west"){
            var PlateauD4 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
        }
        else if(PlateauE4 == "move north"){
            var PlateauE3 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
        }
        else if(PlateauE4 == "move south"){
            var PlateauE5 = prompt("Nothing interesting to see here. \n -look around \n -move NSEW");
        }
        else if(PlateauE4 == "move east"){
            var PlateauE4Death = prompt("You fall off the plateau and die!!! \n -give up \n -restart").toLowerCase();
                
                if (PlateauD4Death == "give up"){
                    var done = alert("Bye")
                    }
                else if (PlateauD4Death == "restart"){
                    Plateau();
                }
            }  
    
    
    
    }   
    
        
    }
    }
}