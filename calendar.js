function getDates() {
    var startDate = new Date(document.getElementById("start").value + 
                             "T12:00:00");
    var endDate = new Date(document.getElementById("end").value + "T12:00:00");
    startDate.setDate(startDate.getDate() - startDate.getDay());
    endDate.setDate(endDate.getDate() - endDate.getDay());
    document.getElementById("Output").innerHTML = startDate + "<br />" + 
      endDate;
    genCalendar(startDate, endDate);
}

function genCalendar(startDate, endDate) {
    var w = window.open("");
    // Create header
    var head = w.document.getElementsByTagName("head")[0];
    var title = w.document.createElement("title");
    title.appendChild(w.document.createTextNode("Calendar"));
    var stylesheet = w.document.createElement("style");
    stylesheet.innerHTML =
          "table { \
              width:100%; \
              table-layout: fixed; \
          }\
          table, td, th {\
              border: 1px solid black;\
              border-collapse: collapse;\
          }\
          th {\
              background-color: #DDDDDD;\
              color: black;\
          }\
          td {\
              height: 60px;\
              vertical-align: top;\
          }";
    head.appendChild(title);
    head.appendChild(stylesheet);

    // Generate table
    var body = w.document.getElementsByTagName("body")[0];
    var table = w.document.createElement("table");

    var header = w.document.createElement("tr");
    var days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday",
          "Saturday"];
    for(var i = 0; i < days.length; i++){
        var cell = w.document.createElement("th");
        cell.innerHTML = days[i];
        header.appendChild(cell);
    }
    table.appendChild(header);

    var months = ["January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October","November","December"];
    var colours = ["#87CEFF","#B9D3EE","#97FFFF","#C1FFC1","#CAFF70","#FFF68F",
                   "#FFDAB9","#FFB6C1","#FFEC8B","#FFD39B","#FFEFDB","#F0F8FF"];
    var cursor = startDate;
    var start = true;
    var month;
    while (cursor <= endDate) {
        var row = w.document.createElement("tr");
        for(var i = 0; i < 7; i++) {
            var cell = w.document.createElement("td");
            cell.innerHTML = cursor.getDate();
            if (start || cursor.getDate() == 1){
                cell.innerHTML += " " + months[cursor.getMonth()];
                month = cursor.getMonth();
            }
            cell.setAttribute("style", "background-color:" + colours[month]);
            row.appendChild(cell);
            cursor.setDate(cursor.getDate() + 1);
            start = false;
        }
        table.appendChild(row);
    }
    body.appendChild(table);
}

function pad(num){
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

window.onload = function() {
  var today = new Date();
  var todayStr = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" 
      + pad(today.getDate());
  document.getElementById("start").min = todayStr;
  document.getElementById("end").min = todayStr;
}