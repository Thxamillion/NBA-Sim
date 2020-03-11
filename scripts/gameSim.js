let playerList = ["Francisco Reeves","Ted Reid","Horace Wagner", "Merle Drake" ,"Ruben Mann", "Earnest Hines", "Christopher Little","Larry Santiago", "Seth Newman", "Percy Mendoza"]
// let usersTeam = require('./pickTeam.js');
let threeCount = 0;  

class playerClass
{
    constructor(offense,defense,name) {
        this.offense = offense;
        this.defense = defense;
        this.name = name;
    }
}

class teamClass 
{
    constructor(roster,offScore,defScore) {
        this.roster = [roster];
        this.offScore = offScore;
        this.defScore = defScore;
    }
}


class gameClass 
{
    constructor(teamOne,teamTwo,scoreOne,scoreTwo) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
    this.scoreOne = scoreOne;
    this.ScoreTwo = scoreTwo;
    }
}




function playPossession(team1,team2) 
{
    let teamOff = Math.floor(Math.random() * team1.offScore)
    let teamDef = Math.floor(Math.random() * team2.defScore)
    
    
        if(Math.random() < 0.85)
        {
            if(teamOff - teamDef > 35 )
            {
                threeCount++
                console.log("AHHHHHH"+threeCount)
                console.log(team1)
                return 3
            }
            else if(teamOff > teamDef)
            {
                return 2
            }
            else
            {
                return 0
            }
        }
        else
        {
            return 0
        }
}



// function playPossession(team1,team2) 
// {
//     let teamOff = Math.floor(Math.random() * team1.offScore)
//     let teamDef = Math.floor(Math.random() * team2.defScore)

    
//     if(teamOff - teamDef > 40 )
//     {
//         return 3
//     }
//     else if(teamOff > teamDef)
//     {
//         return 2
//     }
//     else{
//         return 0
//     }
    
// }

async function runGame()
{
    let team1 = makeTeam();
    let team2 = makeTeam();
    gameClass.scoreOne = 0;
    gameClass.scoreTwo = 0;

    gameClass.teamOne = team1;
    gameClass.teamTwo = team2;
    
   
    for(i = 0; i < 104; i++) 
    {
            
       
    gameClass.scoreOne += playPossession(team1, team2)
    gameClass.scoreTwo += playPossession(team2, team1)
    console.log("________")
    console.log(gameClass.scoreOne)
    console.log(gameClass.scoreTwo)
    console.log("possesion" + i)
    console.log("________")
    
    
    document.getElementById("lakers").innerHTML = gameClass.scoreOne
    document.getElementById("celtics").innerHTML = gameClass.scoreTwo

    }
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

// function for making a player
function makePlayer()
{
    let offense = Math.floor(Math.random() * 100);
    let defense = 100 - offense;
    return new playerClass(offense, defense);
}

 // function for creating a team
 function makeTeam() 
 {
    let offense = 0;
    let defense = 0;
    let roster = [];
    let offScore = 0;
    let defScore = 0;
    
    for(i = 0; i < 5; i++) {
        let player = makePlayer();
        offense += player.offense;
        defense += player.defense;
        roster.push(player);
       
    }
    offScore =  offense / 5;
    defScore =  defense / 5;
   
    return new teamClass(roster,offScore,defScore);
}


