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
	var months = ["January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October","November","December"];
    var colours = ["#87CEFF","#B9D3EE","#97FFFF","#C1FFC1","#CAFF70","#FFF68F",
                   "#FFDAB9","#FFB6C1","#FFEC8B","#FFD39B","#FFEFDB","#F0F8FF"];
    var cursor = startDate;
    var start = true;
    var month;
    while (cursor <= endDate) {
        var row = document.createElement("tr");
        for(var i = 0; i < 7; i++) {
            var cell = document.createElement("td");
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