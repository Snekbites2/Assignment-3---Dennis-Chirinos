id = 0;
option = -1;
var AdvText = [];
var OptText = [];

puppy = false;
key = false;

death = "<br> you died, restart adventure";

var ImageList = [];
for (var i = 0;i<11;i++) {
    ImageList[i] = "sprites"+String(i+1);
}
ImgN = 0;

AdvText[0] = "Start of Adventure";
OptText[0] = ["Start"];

AdvText[1] = "You find yourself in a dark empty room, with a wooden door";
OptText[1] = ["Open the Door","look for clues"];

AdvText[2] = "You find yourself in a dark hallway";
OptText[2] = ["Walk the hallway","Run the hallway"];

AdvText[3] = "You look for clues, you find nothing but empty walls, it IS an empty room";
OptText[3] = ["Open the door anyway"];

AdvText[4] = "You walk slowly through the hallway, you find a hole between the hallway";
OptText[4] = ["Keep walking","jump through hole"];

AdvText[5] = "You run through the hallway and slip on a puddle, causing you to hit your head with a rock"+death;
OptText[5] = ["Retry"];

AdvText[6] = "You jumped through the hole, and fall about 50m before hitting the floor, why would you jump through a dark hole anyway?"+death;
OptText[6] = ["Retryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy------"];

AdvText[7] = "You keep walking, and find some stairs, your options are up or down";
OptText[7] = ["Go up","Go down"];

AdvText[8] = "You went up the stairs";
OptText[8] = ["Walk carefully"];

AdvText[9] = "You went down the stairs, you find a bear, a unicorn, and a puppy";
OptText[9] = ["Punch the bear","pet the unicorn","pet the puppy"];

AdvText[10] = "You punched the bear, the bear is now mauling you to death";
OptText[10] = ["Ouch! ou ou OUCH!"];

AdvText[11] = "WELL WHY WOULD YOU PUNCH A BEAR?!? IT'S A BEAR! WHAt DID YOU THINK WOULD HAPPEN?"+death;
OptText[11] = ["WELL WHY DID YOU PUT THE OPTION THEN!? retry"];

AdvText[12] = "You pet the unicorn, the unicorn sensed danger and kicked you, making you fly 8m into the air."+death;
OptText[12] = ["Retry"];

AdvText[13] = "You pet the puppy, the puppy barks happily";
OptText[13] = ["Keep petting the puppy","Kick the puppy","Take the puppy"];

AdvText[14] = "N O";
OptText[14] = ["Keep petting the puppy","Take the puppy"];

AdvText[15] = "You Took the puppy";
OptText[15] = ["Go upstairs now","Stay there"];

AdvText[16] = "The unicorn killed the bear with the power of horn lasers, and now it's aiming at you";
OptText[16] = ["Use the puppy as a shield","Run up the stairs"];

AdvText[17] = "NO, WHY WOULD YOU USE A PUPPY TO SHIELD YOURSELF!? I DON'T CARE, YOU'RE DEAD, INSTANT DEATH!"+death;
OptText[17] = ["I'm sorry for the puppy, retry?"];

AdvText[18] = "You're above the stairs, a dimly lit grand hall surrounds you";
OptText[18] = ["Look around","walk through the hall"];

AdvText[19] = "You found a keycard";
OptText[19] = ["Go back"];

AdvText[20] = "The puppy finds a hole in the wall, and dissapears through it";
OptText[20] = ["Abandon the puppy","Follow the puppy"];

AdvText[21] = "But how could you? It was a puppy and you abandoned it, it's probably alone in a dark dinky tunnel, and you just abandoned it";
OptText[21] = ["Walk through the 2nd hallway","Follow the puppy"];

AdvText[22] = "You follow the puppy through the dinky hole, it's a tight and claustrophobic tunnel, you feel your breath getting sharper <br>"+
"Suddenly, you fall down and land on a pile of trash, you get up and see an elevator";
OptText[22] = ["Check the trash","Get inside the elevator"];

AdvText[23] = "You check the trash, there's nothing but scraps of paper, and a physical copy of this text adventure.";
OptText[23] = ["Check the elevator"];

AdvText[24] = "There are 2 buttons, one goes up, one goes down, the up button requires a keycard";
OptText[24] = ["Press the down button"];

AdvText[25] = "You pressed the up button, once the elevator opens up, you hear a bark, it's the puppy <br>"+
"You do not question how the puppy managed to get here, instead you pick him up";
OptText[25] = ["You walk through the hallway"];

AdvText[26] = "As you walk through the hallway, you twist and turn through infinite hallways and stairs <br>"+
"Eventually, you see the light, Congratulations, you have escaped the dark dungeon, and you did it while holding a puppy, the best ending, good for you";
OptText[26] = ["Try again, see if you can find another ending"];

AdvText[27] = "You walk through the hall, there is a button";
OptText[27] = ["Press the button?"];

AdvText[28] = "You Press the button, a gas surrounds you, you feel sleepy, unable to resist the temptation to sleep, you fall down";
OptText[28] = ["zZZZzzzzZZZzzz"];

AdvText[29] = "You groggily wake up, see yourself atop a carriage, surrounded by a lush green tundra forest surrounded by snow. <br>"+
"you see a Roman looking soldier driving the carriage. <br>"+
"you try moving but your hands are tied, bound; Finally, a man, blonde, in a norse military outfits says to you: <br>"+
"hey, you're finally awake";
OptText[29] = ["OH COME ON!","I don't get it..."];

AdvText[30] = "<a href='https://www.youtube.com/watch?v=YeeK_TPOltk'>watch this if you need explanation</a>";
OptText[30] = ["Ok...?"];

AdvText[31] = "Congratulations, you will now live a life slaying dragons and screaming at people, that's a good ending right?";
OptText[31] = ["Uhmm.... I want a retry"];

AdvText[32] = "You pressed the down button, you eventually end up in a sort of facility.<br>"+ 
"there's some notes about the place <br>"+
"There's a device with a button";
OptText[32] = ["read notes about the place","pick the device and press the button"];

AdvText[33] = "Are you ready to know the truth about this place? <br> the place you've been stuck in for so long? the grand reveal that will shake you to your very core?";
OptText[33] = ["I'm ready"];

AdvText[34] = "The truth is that there's no plot twist, this is a fictional story, it's a text adventure...";
OptText[34] = ["Angrily grab the device and press the button"];

AdvText[35] = "You press the button, feel a sudden heat surrounding you, finally, feel the sunlight on your face <br>"+
"you have escaped the mysterious place, but it feels like you've forgotten something";
OptText[35] = ["Retry for a better ending?"];

AdvText[36] = "Walking through the 2nd hallway, you find the unicorn, it looks very angry";
OptText[36] = ["Fight the unicorn?"];

AdvText[37] = "You fight the unicorn, but he blasts you away with horn magic, blasting you through the wall, <br>"+
"you find yourself falling down a mountain, thinking only of the puppy you abandoned"+death;
OptText[37] = ["Retry"];

AdvText[38] = "First Apologize to the puppy for abandoning them";
OptText[38] = ["I'm sorry, Retry"];

$("#GameScreen").on("mouseenter", ".Options", function() {
    $(this).css("color", "cyan");
});

$("#GameScreen").on("mouseleave", ".Options", function() {
    $(this).css("color", "blue");
});

$(document).ready(function() {
    $(document).on("click", ".Options", function() {

        if (id == 0) {
            puppy = false;
            key = false;
            ImgN = 0;
        }
        var $paragraph = $(this);
        console.log("clicked:" + String(id));
        if (puppy) {
            AdvText[18] = "You're above the stairs, a dimly lit grand hall surrounds you, the puppy gets off your grasp and starts sniffing around";
            OptText[18] = ["Look around","walk through the hall","Follow the puppy"];
        }
        if (key) {
            AdvText[19] = "You found nothing";
            OptText[19] = ["Go back"];
            OptText[24] = ["Press the down button","Press the Up button"];
        }

        var paragraphText = $paragraph.text();
        var firstLetter = paragraphText.charAt(0);
        option = String(firstLetter);
        switch (id) {
            case 0: {
                id = 1;
                key = false;
                puppy = false;
            } break;
            case 1: {
                if (option == 1) {
                    id = 2;
                } else if (option == 2) {
                    id = 3;
                }
            } break;
            case 2: {
                if (option == 1) {
                    id = 4;
                } else if (option == 2) {
                    id = 5;
                    ImgN = 2;
                }
            } break;
            case 3: {
                id = 2;
            } break;
            case 4: {
                if (option == 1) {
                    id = 7;
                } else if (option == 2) {
                    id = 6;
                    ImgN = 1;
                }
            } break;
            case 5: {
                id = 0;
            } break;
            case 6: {
                id = 0;
            } break;
            case 7: {
                if (option == 1) {
                    id = 8;
                } else if (option == 2) {
                    id = 9;
                }
            } break;
            case 8: {
                id = 18;
            } break;
            case 9: {
                if (option == 1) {
                    id = 10;
                    ImgN = 3;
                } else if (option == 2) {
                    id = 12;
                    ImgN = 4;
                } else if (option == 3) {
                    id = 13;
                }
            } break;
            case 10: {
                id = 11;
            } break;
            case 11: {
                id = 0;
            } break;
            case 12: {
                id = 0;
            } break;
            case 13: {
                if (option == 1) {
                    id = 13;
                } else if (option == 2) {
                    id = 14;
                } else if (option == 3) {
                    id = 15;
                    puppy = true;
                }
            } break;
            case 14: {
                if (option == 1) {
                    id = 13;
                } else if (option == 2) {
                    id = 15;
                }
            } break;
            case 15: {
                if (option == 1) {
                    id = 8;
                } else if (option == 2) {
                    id = 16;
                }
            } break;
            case 16: {
                if (option == 1) {
                    id = 17;
                    ImgN = 6;
                } else if (option == 2) {
                    id = 8;
                }
            } break;
            case 17: {
                id = 0;
            } break;
            case 18: {
                if (option == 1) {
                    id = 19;
                } else if (option == 2) {
                    id = 27;
                } else if (option == 3) {
                    id = 20;
                }
            } break;
            case 19: {
                id = 18;
                key = true;
            } break;
            case 20: {
                if (option == 1) {
                    id = 21;
                } else if (option == 2) {
                    id = 22;
                }
            } break;
            case 21: {
                if (option == 1) {
                    id = 36;
                } else if (option == 2) {
                    id = 22;
                }
            } break;
            case 22: {
                if (option == 1) {
                    id = 23;
                } else if (option == 2) {
                    id = 24;
                }         
            } break;
            case 23: {
                id = 24;
            } break;
            case 24: {
                if (option == 1) {
                    id = 32;
                } else if (option == 2) {
                    id = 25;
                }    
            } break;
            case 25: {
                id = 26;
            } break;
            case 26: {
                id = 0;
            } break;
            case 27: {
                id = 28;
            } break;
            case 28: {
                id = 29;
                ImgN = 5;
            } break;
            case 29: {
                if (option == 1) {
                    id = 31;
                } else if (option == 2) {
                    id = 30;
                }
            } break;
            case 30: {
                id = 31;
            } break;
            case 31: {
                id = 0;
            } break;
            case 32: {
                if (option == 1) {
                    id = 33;
                } else if (option == 2) {
                    id = 35;
                }
            } break;
            case 33: {
                id = 34;
            } break;
            case 34: {
                id = 35;
            } break;
            case 35: {
                id = 0;
            } break;
            case 36: {
                id = 37;
                ImgN = 7;
            } break;
            case 37: {
                id = 38;
            } break;
            case 38: {
                id = 0;
            } break;
        }
        $("#GameScreen").html("<h1 id='AdventureText'>" + AdvText[id] + "</h1>");
        for (var i = 0; i < OptText[id].length; i++) {
            $("#GameScreen").append("<div class='Options'>" + (String(i + 1)) + ") " + OptText[id][i] + "</div>");
        }
        $("#GameScreen").append("<div class = 'imagestuff'>"+"<img class = 'image' src= images/"+ImageList[ImgN]+".png>"+"</div>");
    });
});