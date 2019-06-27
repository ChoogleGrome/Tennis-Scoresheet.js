if (localStorage.getItem("latest") !== null) {
    document.getElementById("key").value = localStorage.getItem("latest")
}

function onKeySubmit() {
    var key = document.getElementById("key").value
    var local = localStorage.getItem(key)

    var a
    var br

    var a_text

    var div = document.getElementById("leaderboard")

    var n

    if (local === null) {
        a = document.createElement("a")
        br = document.createElement("br")

        a_text = document.createTextNode("INVALID ID, TRY AGAIN")
        a.appendChild(a_text)

        div.appendChild(a)
        div.appendChild(br)
        return
    }

    a = document.createElement("a")
    br = document.createElement("br")

    a_text = document.createTextNode("SUCCESSFUL")
    a.appendChild(a_text)

    div.appendChild(a)
    div.appendChild(br)


    console.log(local)
    var parsed_local = JSON.parse(local)
    console.log(parsed_local)

    document.getElementById("title").innerHTML = parsed_local[1].tournament_name + "'s Tournament Leaderboard"

    var sorted = parsed_local[4].team
    console.log(sorted)

    sorted = sorted.sort(function (a, b) {
        return b[3].team_score - a[3].team_score
    })
    console.log(sorted)

    a = document.createElement("a")
    br = document.createElement("br")

    a_text = document.createTextNode("WINNER IS "+sorted[0][0].team_name)
    a.appendChild(a_text)
    setAttribute(a, {"class": "winner"})

    div.appendChild(a)
    div.appendChild(br)

    for (n = 0; n < sorted.length; n = n + 1) {
        a = document.createElement("a")
        br = document.createElement("br")

        a_text = document.createTextNode((n + 1) + ". Team " + sorted[n][0].team_name)
        a.appendChild(a_text)

        div.appendChild(a)
        div.appendChild(br)
    }
}

function setAttribute(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}