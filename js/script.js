var firebaseConfig = {
  apiKey: "AIzaSyAnbygRPn7zJldJwsP5MGxRfpVVI2fs3hw",
  authDomain: "dundaing-7e4c1.firebaseapp.com",
  databaseURL: "https://dundaing-7e4c1.firebaseio.com",
  projectId: "dundaing-7e4c1",
  storageBucket: "dundaing-7e4c1.appspot.com",
  messagingSenderId: "854521057123",
  appId: "1:854521057123:web:3ab4b7ba301ce94d340d56",
  measurementId: "G-Z8RCEXF2CL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();

//event listener for form sumbit
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  //getting the form input values
  var name = getInputs("name");
  var email = getInputs("email");
  var message = getInputs("message");

  saveMessage(name, email, message);
  document.querySelector(".alert-message").style.display = "block";
  //alert message
  setTimeout(function () {
    document.querySelector(".alert-message").style.display = "none";
  }, 3000);
  document.getElementById("contact-form").reset()
}


//reference message collection
var messagesRef = firebase.database().ref("messages")

//function to replace getElementbyId()
function getInputs(id) {
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  })
}
//get custom input

let myArray = []

function choose() {

  if (document.getElementById("djay").checked) {

    myArray.push(20000)
    document.getElementById("system").innerHTML = ("Food Ksh: 20000")
  }
  if (document.getElementById("food").checked) {

    myArray.push(30000)
    document.getElementById("fud").innerHTML = ("Food Ksh: 30000")

  }
  if (document.getElementById("venue").checked) {

    myArray.push(30000)
    document.getElementById("venu").innerHTML = ("Food Ksh: 30000")
  }
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