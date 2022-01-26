var firebaseConfig = {
  apiKey: "AIzaSyDebulxZJo9yeWkGGMqTcPmc61KrYnARZo",
  authDomain: "firedb-28565.firebaseapp.com",
  databaseURL: "https://firedb-28565-default-rtdb.firebaseio.com",
  projectId: "firedb-28565",
  storageBucket: "firedb-28565.appspot.com",
  messagingSenderId: "801004775252",
  appId: "1:801004775252:web:2ca349bd05eff941918ac1"
};
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
document.getElementById("header").innerHTML = "Hello " + username + "! Find or create a room here!";

function getData() {
  firebase.database().ref("/").on('value',
      function(snapshot) {
          document.getElementById("output").innerHTML =
              "";
          snapshot.forEach(function(childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectroomname(this.id)'>" + Room_names + "</div> <hr>";
              document.getElementById("output").innerHTML += row;
          });
      });
}
getData();

function addRoom() {
  roomName = document.getElementById("rname").value;
  firebase.database().ref("/").child(roomName).update({
      purpose: "Adding room"
  });

  localStorage.setItem("roomname", roomName);
  window.location = "kwitter_page.html";

}

function redirectroomname(name) {
  console.log("Redirect function " + name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  window.location = "kwitter.html";
}