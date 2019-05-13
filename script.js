var link = null
var bin_link = "https://api.myjson.com/bins"
var content_type = "application/json; charset=utf-8"
var data_type = "json"

function json_parse(data) {
    var json = JSON.stringify(data)
    var json_p = JSON.parse(json)

    return json_p
}

function get (link, callback) {
    $.get(link, function (data, textStatus, jqXHR) {
        callback(data, textStatus, jqXHR)
    })
}

function post (data, callback) {
    var post = "POST"
    
    $.ajax({
        url: bin_link,
        type: post,
        data: data,
        contentType: content_type,
        dataType: data_type,
        success: function(data, textStatus, jqXHR) {
            callback(data, textStatus, jqXHR)
        }
    })
}

function put (link, data, callback) {
    var put = "PUT"
    
    $.ajax({
        url: link,
        type: put,
        data: data,
        contentType: content_type,
        dataType: data_type,
        success: function (data, textStatus, jqXHR) {
            callback(data, textStatus, jqXHR)
        }
    })
}