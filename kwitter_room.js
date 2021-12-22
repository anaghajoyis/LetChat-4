const firebaseConfig = {
  apiKey: "AIzaSyA9v-2B-yEFJQdJ4wf_cGHzz1xrBGP6eVU",
  authDomain: "letchat-app.firebaseapp.com",
  databaseURL: "https://letchat-app-default-rtdb.firebaseio.com",
  projectId: "letchat-app",
  storageBucket: "letchat-app.appspot.com",
  messagingSenderId: "711840853430",
  appId: "1:711840853430:web:d2686bf95161347d2fa517",
  measurementId: "G-T19RPW1HH5"
};
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("Username");
document.getElementById("header").innerHTML="Hello "+ username + "! Find or create a room here!";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

});});}
getData();
function addingroom(){
  var roomName= document.getElementById("addroom").value;
  firebase.database().ref("/").child(roomName).update({
      purpose:"Adding room"
  });
  row="<div class='room_name' id="+ Room_names +"onclick='redirectroomname(this.id)'>"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
  localStorage.setItem("roomname",roomName);
}
function redirectroomname(name){
  console.log("Redirect function "+name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  window.location="kwitter.html";
}