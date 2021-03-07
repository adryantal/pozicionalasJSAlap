
//alert("Hello from Section");
console.log("Konzolra írunk a sectioben.");
document.write("Hello again from Section!");
document.getElementById("a").value = "2";
document.getElementById("b").value = "3";
var valtozoA = document.getElementById("a").value;
var valtozoB = document.getElementById("b").value;
document.write("<p>1. változó: " + valtozoA + "</p>");
document.write("<p>2. változó: " + valtozoB + "</p>");
var osszeg = Number(valtozoA) + Number(valtozoB);
document.write("<p>A 2 szám összege: " + osszeg + "</p>");


var szoveg = "";
var sv = 0;

for (var i = 1; i < 101; i++) {
    szoveg += i + ", ";
    sv++;
    if (sv === 10) //az értékbeli és az értéktípusbeli egyezőséget is ellenőrzi
    {
        szoveg += "<br>";
        sv = 0;
    }
}
document.write("<p>" + szoveg + "</p>");

var szoveg = "";
for (var i = 1; i < 101; i++) {
    szoveg += i + ", ";
    if (i % 10 === 0) //az értékbeli és az értéktípusbeli egyezőséget is ellenőrzi
    {
        szoveg += "<br>";
    }
}
document.write("<p>" + szoveg + "</p>");

document.write("<p>Ez egy új sor! </p>");


var szoveg = "~&nbsp";


function kiir() {

    for (var i = 1; i < 101; i++) {
      
        
        if (String(i).length < 2) {
            szoveg +=  '&nbsp&nbsp'+ i + '&nbsp '+ "~" ;
        } else {
            szoveg += i + " ~ ";
        }
        if (i % 10 === 0) //az értékbeli és az értéktípusbeli egyezőséget is ellenőrzi
        {
            szoveg += "<br>~ ";
        }
    }

    document.write("<p>" + szoveg + "</p>");
}

kiir();