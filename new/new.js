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
        document.getElementById("alert_1").innerHTML = "PLEASE INPUT NAME, TEAM NUM AND TOURNAMENT NUM"
        return
    }

    if (isNaN(team_num) == true || isNaN(tournament_num) == true) {
        document.getElementById("alert_1").innerHTML = "PLEASE INPUT NUMBERS IN TEAM NUM AND TOURNAMENT NUM"
        return
    }

    document.getElementById("alert_1").innerHTML = "SUCCESSFUL"

    // br = document.createElement("br")
    // div.appendChild("br")
    
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

    a = document.createElement("a")
    br = document.createElement("br")
    button = document.createElement("input")
    setAttribute(button, {"type": "submit", "value": "Submit Teams", "id": "team_sub", "onclick": "onTeamCreate()"})
    setAttribute(a, {"id": "alert_2"})
    div.appendChild(button)
    div.appendChild(br)
    div.appendChild(a)
}

function onTeamCreate() {
    var n
    var n1
    var team
    var div = document.getElementById("created_inputs")

    var input
    var br
    var a

    var x
    var y
    
    for (y = 0; y < document.getElementById("team_num").value; y = y + 1) {
        if (document.getElementById("team" + (y + 1)).value == "") {
            document.getElementById("alert_2").innerHTML = "PLEASE ENTER A NAME FOR THE TEAMS"
            return
        }
    }

    document.getElementById("alert_2").innerHTML = "SUCCESSFUL"

    br = document.createElement("br")
    div.appendChild(br)

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

    a = document.createElement("a")
    br = document.createElement("br")
    button = document.createElement("input")
    setAttribute(a, {"id": "alert_3"})
    setAttribute(button, {"type": "submit", "value": "Submit Teams Players", "id": "player_sub", "onclick": "onPlayerCreate()"})
    div.appendChild(button)
    div.appendChild(br)
    div.appendChild(a)
}

function onPlayerCreate() {
    var n
    var x
    var y

    var input
    var br
    var a
    
    var div = document.getElementById("created_inputs")

    for (y = 0; y < document.getElementById("team_num").value; y = y + 1) {
        if (document.getElementById("team_players" + (y + 1)).value == "") {
            document.getElementById("alert_3").innerHTML = "PLEASE INPUT NUMBER OF PLAYERS IN TEAMS"
            return
        }

        if (isNaN(document.getElementById("team_players" + (y + 1)).value) == true) {
            document.getElementById("alert_3").innerHTML = "PLEASE INPUT A NUMBER"
            return
        }
    }

    document.getElementById("alert_3").innerHTML = "SUCCESSFUL"

    br = document.createElement("br")
    div.appendChild(br)

    for (n = 0; n < data[3].team.length ; n = n + 1) {
        data[3].team[n][1] = {"player_num": document.getElementById("team_players" + (n + 1)).value}
    }
    
    console.log(data)

    for (x = 0; x < data[3].team.length; x = x + 1) {
        a = document.createElement("a")
        br = document.createElement("br")
        a_text = document.createTextNode(data[3].team[x][0].team_name + "'s Players")
        setAttribute(a, {"class": "bold"})
        a.appendChild(a_text)
        div.appendChild(a)
        div.appendChild(br)

        for (y = 0; y < data[3].team[x][1].player_num; y = y + 1) {
            input = document.createElement("input")
            br = document.createElement("br")
            a = document.createElement("a")

            name = "team" + (parseInt(x) + 1) + "_player" + (parseInt(y) + 1)
            setAttribute(input, {"type": "text", "id": name})

            a_text = document.createTextNode("Player " + (y + 1) + " Name") 
            a.appendChild(a_text)

            div.appendChild(a)
            // div.appendChild(br)
            div.appendChild(input)
            div.appendChild(br)
            div.appendChild(br)
        }
    }

    a = document.createElement("a")
    button = document.createElement("input")
    br = document.createElement("br")
    setAttribute(a, {"id": "alert_4"})
    setAttribute(button, {"type": "submit", "value": "Submit Teams Player Names", "id": "player_name_sub", "onclick": "onPlayerNameCreate()"})
    div.appendChild(button)
    div.appendChild(br)
    div.appendChild(a)
}

function onPlayerNameCreate() {
    var a
    var a_text

    var br
    var div = document.getElementById("created_inputs")

    var n
    var x
    var y
    var p

    for (n = 0; n < data[2].team_num; n = n + 1) {
        for (x = 0; x < data[3].team[n][1].player_num; x = x + 1) {
            if (document.getElementById("team" + (n + 1) +"_player" + (x + 1)) == "") {
                document.getElementById("alert_4").innerHTML = "PLEASE INPUT A NAME FOR PLAYERS"
                return
            }    
        }
    }

    document.getElementById("alert_4").innerHTML = "SUCCESSFUL"

    for (y = 0; y < data[2].team_num; n = n + 1) {
        data[3].team[y][2] = {"player": []}

        for (p = 0; p < data[3].team[p][1].player_num; p = p + 1) {
            data[3].team[y][2].player[p] = document.getElementById("team" + (y + 1) + "_player" + (p + 1)).value
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
