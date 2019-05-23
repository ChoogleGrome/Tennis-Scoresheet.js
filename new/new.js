// New Tournament
// Sends Tournament to server
function onTournamentCreate() {
    var bin_link = "https://api.myjson.com/bins"
    var content_type = "application/json; charset=utf-8"
    var data_type = "json"
    var post = "POST"

    console.log(isNaN(document.getElementById("team_num").value))
    console.log(isNaN(document.getElementById("tournament_num").value))
    
    if (document.getElementById("name").value == "" || document.getElementById("team_num") == "" || document.getElementById("name").value == "tournament_num") {
        document.getElementById("alert").innerHTML = "PLEASE INPUT NAME, TEAM NUM AND TOURNAMENT NUM"
        window.stop()
    }

    if (isNaN(document.getElementById("team_num").value) == true || isNaN(document.getElementById("tournament_num").value) == true) {
        document.getElementById("alert").innerHTML = "PLEASE INPUT NUMBERS IN TEAM NUM AND TOURNAMENT NUM"
        window.stop()
    }

    document.getElementById("alert").innerHTML = ""
    
    var data = [
        {"key": null},
        {"tournament_name": document.getElementById("name").value},
        {"team_num": document.getElementById("team_num").value},
    ]


    
    $.ajax({
        url: bin_link,
        type: post,
        data: data,
        contentType: content_type,
        dataType: data_type,
        success: function(data, textStatus, jqXHR) {
            
        }
    })
}

function json_parse(data) {
    var json = JSON.stringify(data)
    var json_p = JSON.parse(json)

    return json_p
}

// Parses URL given by https://api.myjson.co/bins/URI
// Retrives URI, in object form
