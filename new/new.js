// New Tournament
// Sends Tournament to server
var data = []

function onTournamentCreate() {
    // var bin_link = "https://api.myjson.com/bins"
    // var content_type = "application/json; charset=utf-8"
    // var data_type = "json"
    // var post = "POST"

    var team_num = document.getElementById("team_num").value
    var tournament_num = document.getElementById("tournament_num").value
    var name = document.getElementById("name").value

    var x

    var name
    var input
    var a 
    var a_text
    var br 
    var div = document.getElementById("created_inputs")

    var button

    console.log(isNaN(document.getElementById("team_num").value))
    console.log(isNaN(document.getElementById("tournament_num").value))
    
    if ((team_num == '') || (name == '') || (tournament_num == '')) { 
        console.log("working")
        document.getElementById("alert").innerHTML = "PLEASE INPUT NAME, TEAM NUM AND TOURNAMENT NUM"
        return
    }

    if (isNaN(team_num) == true || isNaN(tournament_num) == true) {
        document.getElementById("alert").innerHTML = "PLEASE INPUT NUMBERS IN TEAM NUM AND TOURNAMENT NUM"
        return
    }

    document.getElementById("alert").innerHTML = "SUCCESSFUL"
    
    data = [
        {"key": null},
        {"tournament_name": document.getElementById("name").value},
        {"team_num": document.getElementById("team_num").value},
    ]

    console.log(data)

    for (x = 0; x < parseInt(data[2].team_num); x = x + 1) {
        input = document.createElement("input")
        br = document.createElement("br")
        a = document.createElement("a")

        name = "team" + (parseInt(x) + 1)
        setAttribute(input, {"type": "text", "id": name})

        a_text = document.createTextNode("Team " + (parseInt(x) + 1) + " Name:")
        a.appendChild(a_text)

        div.appendChild(a)
        // div.appendChild(br)
        div.appendChild(input)
        div.appendChild(br)
        div.appendChild(br)
    }

    br = document.createElement("br")
    button = document.createElement("input")
    setAttribute(button, {"type": "submit", "value": "Submit Teams", "id": "team_sub", "onclick": "onTeamCreate()"})
    div.appendChild(button)
    div.appendChild(br)
}

function onTeamCreate() {
    var n
    var n1
    var team
    var div = document.getElementById("created_inputs")

    var x

    data[3] =  {team: []}
   
    for (n = 0; n < document.getElementById("team_num").value; n = n + 1) {
        n1 = n + 1
        team = "team_" + n1
        console.log(team)
        data[3].team[n] = [{"team_name": document.getElementById("team" + n1).value}]
    }

    console.log(data)

    for (x = 0; x < parseInt(data[2].team_num); x = x + 1) {
        input = document.createElement("input")
        br = document.createElement("br")
        a = document.createElement("a")

        name = "team_players" + (parseInt(x) + 1)
        setAttribute(input, {"type": "text", "id": name})

        a_text = document.createTextNode("Number of Players in " + data[3].team[x][0].team_name + " :")
        a.appendChild(a_text)

        div.appendChild(a)
        // div.appendChild(br)
        div.appendChild(input)
        div.appendChild(br)
        div.appendChild(br)
    }

    button = document.createElement("input")
    setAttribute(button, {"type": "submit", "value": "Submit Teams Players", "id": "player_sub", "onclick": "onPlayerCreate()"})
    div.appendChild(button)
}

function onPlayerCreate() {
    var n
    var x
    var y

    var input
    var br
    var a
    
    var div = document.getElementById("created_inputs")

    for (n = 0; n < data[3].team.length ; n = n + 1) {
        data[3].team[n][1] = {"player_num": document.getElementById("team_players" + (n + 1)).value}
    }
    
    console.log(data)

    for (x = 0; x < data[3].team.length; x = x + 1) {
        for (y = 0; y < data[3].team[n].player_num; y = y + 1) {
            input = document.createElement("input")
            br = document.createElement("br")
            a = document.createElement("a")

            name = "team" + (parseInt(x) + 1) + "_player" + (parseInt(y) + 1)
            setAttribute(input, {"type": "text", "id": name})

            a_text = document.createTextNode(data[3].team[x][1] + "'s Player " + y + " Name") 
            a.appendChild(a_text)

            div.appendChild(a)
            // div.appendChild(br)
            div.appendChild(input)
            div.appendChild(br)
            div.appendChild(br)
        }
    }
}

// function json_parse(data) {
//     var json = JSON.stringify(data)
//     var json_p = JSON.parse(json)

//     return json_p
// }

function setAttribute(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}
