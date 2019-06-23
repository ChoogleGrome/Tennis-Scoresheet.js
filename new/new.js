// New Tournament
// Sends Tournament to server
var data = []
var b

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

    var input

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
        {"team_num": parseInt(document.getElementById("team_num").value)},
        {"tournament_num": parseInt(document.getElementById("tournament_num").value)}
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
    input = document.createElement("input")
    setAttribute(input, {"type": "submit", "value": "Submit Teams", "id": "team_sub", "onclick": "onTeamCreate()"})
    setAttribute(a, {"id": "alert_2"})
    div.appendChild(input)
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

    data[4] =  {team: []}
   
    for (n = 0; n < document.getElementById("team_num").value; n = n + 1) {
        n1 = n + 1
        team = "team_" + n1
        console.log(team)
        data[4].team[n] = [{"team_name": document.getElementById("team" + n1).value}]
    }

    console.log(data)

    for (x = 0; x < parseInt(data[2].team_num); x = x + 1) {
        input = document.createElement("input")
        br = document.createElement("br")
        a = document.createElement("a")

        name = "team_players" + (parseInt(x) + 1)
        setAttribute(input, {"type": "text", "id": name})

        a_text = document.createTextNode("Number of Players in " + data[4].team[x][0].team_name + ":")
        a.appendChild(a_text)

        div.appendChild(a)
        // div.appendChild(br)
        div.appendChild(input)
        div.appendChild(br)
        div.appendChild(br)
    }

    a = document.createElement("a")
    br = document.createElement("br")
    input = document.createElement("input")
    setAttribute(a, {"id": "alert_3"})
    setAttribute(input, {"type": "submit", "value": "Submit Teams Players", "id": "player_sub", "onclick": "onPlayerCreate()"})
    div.appendChild(input)
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
            document.getElementById("alert_3").innerHTML = "PLEASE INPUT NUMBER OF 4PLAYERS IN TEAMS"
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

    for (n = 0; n < data[4].team.length ; n = n + 1) {
        data[4].team[n][1] = {"player_num": parseInt(document.getElementById("team_players" + (n + 1)).value)}
    }
    
    console.log(data)

    for (x = 0; x < data[4].team.length; x = x + 1) {
        a = document.createElement("a")
        br = document.createElement("br")
        a_text = document.createTextNode(data[4].team[x][0].team_name + "'s Players")
        setAttribute(a, {"class": "bold"})
        a.appendChild(a_text)
        div.appendChild(a)
        div.appendChild(br)

        for (y = 0; y < data[4].team[x][1].player_num; y = y + 1) {
            input = document.createElement("input")
            br = document.createElement("br")
            a = document.createElement("a")

            name = "team" + (parseInt(x) + 1) + "_player" + (parseInt(y) + 1)
            setAttribute(input, {"type": "text", "id": name})

            a_text = document.createTextNode("Player " + (y + 1) + " Name:") 
            a.appendChild(a_text)

            div.appendChild(a)
            // div.appendChild(br)
            div.appendChild(input)
            div.appendChild(br)
            div.appendChild(br)
        }
    }

    a = document.createElement("a")
    input = document.createElement("input")
    br = document.createElement("br")
    setAttribute(a, {"id": "alert_4"})
    setAttribute(input, {"type": "submit", "value": "Submit Teams Player Names", "id": "player_name_sub", "onclick": "onPlayerNameCreate()"})
    div.appendChild(input)
    div.appendChild(br)
    div.appendChild(a)
}

function onPlayerNameCreate() {
    var a
    var a_text

    var input
    var br
    var div = document.getElementById("created_inputs")
    var name

    var n
    var x
    var y
    var p

    var count = 0
    var autofill
    var autofill_num
    var autofill_check

    for (n = 0; n < data[2].team_num; n = n + 1) {
        for (x = 0; x < data[4].team[n][1].player_num; x = x + 1) {
            if (document.getElementById("team" + (n + 1) +"_player" + (x + 1)).value == "") {
                document.getElementById("alert_4").innerHTML = "PLEASE INPUT A NAME FOR PLAYERS"
                return
            }    
        }
    }

    document.getElementById("alert_4").innerHTML = "SUCCESSFUL"

    br = document.createElement("br")
    div.appendChild(br)

    for (y = 0; y < data[2].team_num; y = y + 1) {
        data[4].team[y][2] = {"player": []}

        for (p = 0; p < data[4].team[y][1].player_num; p = p + 1) {
            data[4].team[y][2].player[p] = document.getElementById("team" + (y + 1) + "_player" + (p + 1)).value
        }
    }

    console.log(data)

    while (data[3].tournament_num > count) {
        a = document.createElement("a")
        br = document.createElement("br")
        
        a_text = document.createTextNode("Match " + (count + 1))
        a.appendChild(a_text)
        setAttribute(a, {"class": "bold"})

        div.appendChild(a)
        div.appendChild(br)

        for (x = 0; x < 2; x = x + 1) {
            input = document.createElement("input")
            br = document.createElement("br")
            a = document.createElement("a")

            name = "team" + (x + 1) + "_match" + (count + 1)
            autofill_num = Math.round(Math.random() * data[4].team.length) - 1
            if (autofill_num <= 0) {
                autofill_num = 0
            }
            console.log(autofill_num)
            autofill = data[4].team[autofill_num][0].team_name
            console.log(autofill)
            setAttribute(input, {"type": "text", "id": name, "value": autofill})

            a_text = document.createTextNode("Team " + (x + 1 ) + ":") 
            a.appendChild(a_text)

            div.appendChild(a)
            // div.appendChild(br)
            div.appendChild(input)
            div.appendChild(br)
            div.appendChild(br)
        }

        for (x = 0; x < 5; x = x + 1) {
            a = document.createElement("a")
            br = document.createElement("br")

            a_text = document.createTextNode("Game " + (x + 1) + ":")
            a.appendChild(a_text)
            setAttribute(a, {"class": "underline"})

            div.appendChild(a)
            div.appendChild(br)

            for (y = 0; y < 2; y = y + 1) {
                input = document.createElement("input")
                br = document.createElement("br")
                a = document.createElement("a")

                name = "match" + (count + 1) + "_game" + (x + 1) + "_player" + (y + 1)
                autofill_num = arrSearch(document.getElementById("team" + (y + 1) + "_match" + (count + 1)).value, "teamName")
                console.log(autofill_num)
                autofill_check = Math.round(Math.random() * data[4].team[autofill_num][2].player.length) - 1
                console.log(autofill_check)
                if (autofill_check <= 0) {
                    autofill_check = 0
                }
                console.log(autofill_check)
                autofill = data[4].team[autofill_num][2].player[autofill_check]
                setAttribute(input, {"type": "text", "id": name, "value": autofill})

                a_text = document.createTextNode("Player " + (y + 1) + ":") 
                a.appendChild(a_text)
                div.appendChild(a)
                // div.appendChild(br)
                div.appendChild(input)
                div.appendChild(br)
                div.appendChild(br)
            }

            for (n = 0; n < 2; n = n + 1) {
                input = document.createElement("input")
                br = document.createElement("br")
                a = document.createElement("a")

                name = "match" + (count + 1) +"_game" + (x + 1) + "_player" + (n + 1) + "_score"
                setAttribute(input, {"type": "text", "id": name, "value": Math.round(Math.random() * 6)})

                a_text = document.createTextNode("Player " + (n + 1) + "'s Score: ")
                a.appendChild(a_text)

                div.appendChild(a)
                div.appendChild(input)
                div.appendChild(br)
            }
        }

        count = count + 1
    }

    input = document.createElement("input")
    setAttribute(input, {"type": "submit", "id": "final_send", "value": "Submit Scores", "onclick": "onFinalSubmit()"})

    br = document.createElement("br")

    div.appendChild(input)
    div.appendChild(br)

    a = document.createElement("a")
    setAttribute(a, {"id": "alert_5"})

    div.appendChild(a)
}

function onFinalSubmit() {
    var a
    var a_text

    var input
    var br
    var div = document.getElementById("created_inputs")

    var n
    var x
    var y
    var p

    var temp = []

    for (n = 0; n < data[3].tournament_num; n = n + 1) {
        for (x = 0; x < 5; x = x + 1) {
            for (y = 0; y < 2; y = y + 1) {
                if (document.getElementById("match" + (n + 1) + "_game" + (x + 1) + "_player" + (y + 1)).value == "" || document.getElementById("match" + (n + 1) + "_game" + (x + 1) + "_player" + (y + 1) + "_score").value == "") {
                    document.getElementById("alert_5").innerHTML = "PLEASE ENTER NUMBER/NAME IN ALL FIELDS"
                    return
                }

                if (isNaN(document.getElementById("match" + (n + 1) + "_game" + (x + 1) + "_player" + (y + 1) + "_score").value) == true) {
                    document.getElementById("alert_5").innerHTML = "PLEASE ENTER NUMBER IN SCORE FIELDS"
                    return
                }
            }
        }
    }

    document.getElementById("alert_5").innerHTML = "SUCCESSFUL"

    br = document.createElement("br")
    div.appendChild(br)

    data[5] = {"tournament": {"matches": []}}

    for (n = 0; n < data[3].tournament_num; n = n + 1) {
        data[5].tournament.matches[n] = {"games":[]}

        for (x = 0; x < 5; x = x + 1) {
            data[5].tournament.matches[n].games[x] = {"players": []}

            for (y = 0; y < 2; y = y + 1) {
                data[5].tournament.matches[n].games[x].players[y] = [{"name": document.getElementById("match" + (n + 1) + "_game" + (x + 1) + "_player" + (y + 1)).value}, {"team": document.getElementById("team" + (y + 1) + "_match" + (n + 1)).value}, {"score": parseInt(document.getElementById("match" + (n + 1) + "_game" + (x + 1) + "_player" + (y + 1) + "_score").value)}]
            }
        }
    }

    for (n = 0; n < data[4].team.length; n = n + 1) {
        data[4].team[n][3] = {"team_score": 0}

        for (x = 0; x < data[5].tournament.matches.length; x = x + 1) {
            for (y = 0; y < 5; y = y + 1) {
                for (p = 0; p < 2; p = p + 1) {
                    if (data[5].tournament.matches[x].games[y].players[p].team == data[4].team[n].team_name) {
                        data[4].team[n][3].team_score = data[4].team[n][3].team_score + data[5].tournament.matches[x].games[y].players[p][2].score
                    }
                }
            }
        }
    }

    $.ajax({
        url: "https://api.myjson.com/bins",
        type: "POST",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, textStatus, jqXHR) {
            console.log(data.uri)
        }
    })
    console.log(temp)
    console.log(data)
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

function arrSearch (val, opp) {
    if (opp == "teamName") {
        for (var i = 0; i < data[4].team.length; i = i + 1) {
            if (data[4].team[i][0].team_name == val) {
                return i;
            }
        }
    }
    return false
}