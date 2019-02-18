let data;

function getJSON() {
    $.ajax({
        url: "https://eowyn.strangebits.co.in/data.json",
        type: 'get',
        success: function (response) {
            data = response;
            document.getElementById("objective").innerText = data[0].objective;
            document.getElementById("quote").innerText = data[2].quotes[Math.floor(Math.random() * Math.floor(data[2].quotes.length))];
            for (var i = 0; i < data[1].skills.length; i++) {
                $("#skills").append("<h3 class='acc_content'>" + data[1].skills[i] + "</h3>");
            }
            for (i = 3; i < data.length; i++) {
                $("#projects").append("<h3 class='acc_content'><a href='" + data[i].href + "' target='_blank'>" + data[i].name + "</a></h3>");
            }
        },
        error: function () {
            alert("Could not retrieve data JSON, please try refreshing.");
        }
    });
}

getJSON();

