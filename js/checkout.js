let myArray = []

function choose() {
  myArray.length = 0;

  if (document.getElementById("djay").checked) {

    myArray.push(20000)
    document.getElementById("system").innerHTML = ("Dj and System Ksh: 20000")
  }
  if (document.getElementById("food").checked) {

    myArray.push(30000)
    document.getElementById("fud").innerHTML = ("Food Ksh: 30000")

  }
  if (document.getElementById("venue").checked) {

    myArray.push(30000)
    document.getElementById("venu").innerHTML = ("venue Ksh: 30000")
  }
}
function basic() {
  alert("you have chosen the Basic package at ksh 35000")
  document.getElementById("base").disabled = true;
  document.getElementById("intermediate").disabled = true;
  document.getElementById("premium").disabled = true;
}
function inter() {
  alert("you have chosen the Intermediate package at ksh 65000")
  document.getElementById("base").disabled = true;
  document.getElementById("premium").disabled = true;
  document.getElementById("intermediate").disabled = true;
}
function prem() {
  alert("you have chosen the Premium package at ksh 85000")
  document.getElementById("premium").disabled = true;
  document.getElementById("intermediate").disabled = true;
  document.getElementById("base").disabled = true;
}
$(document).ready(function () {
  $("form#custom").submit(function (event) {
    event.preventDefault();
    drinks = $("input[type=checkbox]:checked").map(function (_, sel) {
        return $(sel).val();
      })
      .get();

    if (drinks === undefined || drinks.length == 0) {
      alert("make selections please");
      return false;
    } else {
      $("#drinks").html("")
      drinks.forEach(drink => {
        $("#drinks").append("<li class='drink'>" + drink + "</li>");
      });
    };

    let security = $("#select option:selected").text();
    let securityCost = parseInt($("#select option:selected").val())

    $("#security").text(security);
    myArray.push(securityCost)

    let total = 0;

    myArray.forEach(n => {
      total += n
      $("#total").text(total)
    });
  });
  
});