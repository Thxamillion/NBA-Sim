const teams = ["ATL", "BRK", "BOS", "CHO", "CHI", "CLE", "DAL", "DEN", "DET", "GSW", "HOU", "IND",
 "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHO", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"];
 const url = "https://d2p3bygnnzw9w3.cloudfront.net/req/202002101/tlogo/bbr/"
function genTeams()
{
    for(i = 0;i<30; i++)
    {
        
        document.getElementById(teams[i]).src = url + teams[i] + "-2020.png";
    }
    
}

function teamPick(team)
{
    console.log(team)
    document.getElementById("teamTable").remove();
    const usersTeam = team;
    document.getElementById("pickedTeam").src = url + usersTeam + "-2020.png";
    

}