 function age(){
    //Declare Variable
    var d1 = document.getElementById("dateField").value;
    var m1 = document.getElementById("monthField").value;
    var y1 = document.getElementById("yearField").value;

    var yearRes = document.getElementById("yearRes");
    var monthRes = document.getElementById("monthRes");
    var dateRes = document.getElementById("dateRes");

    var resFinal = document.getElementById("resFinal");

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear()
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
    }

    if(m1 > m2){
    m2 = m2 - m1;
    y2 = y2  - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    yearRes.innerHTML = y;
    monthRes.innerHTML = m;
    dateRes.innerHTML = d;

    if(resFinal.style.display = "none"){
        resFinal.style.display = "block"
     }
 }

 if(resFinal.style.display = "block"){
    resFinal.style.display = "none"
 }

