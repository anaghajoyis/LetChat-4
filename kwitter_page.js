const firebaseConfig = {
  apiKey: "AIzaSyDebulxZJo9yeWkGGMqTcPmc61KrYnARZo",
  authDomain: "firedb-28565.firebaseapp.com",
  databaseURL: "https://firedb-28565-default-rtdb.firebaseio.com",
  projectId: "firedb-28565",
  storageBucket: "firedb-28565.appspot.com",
  messagingSenderId: "801004775252",
  appId: "1:801004775252:web:2ca349bd05eff941918ac1"
};
firebase.initializeApp(firebaseConfig);
var roomname = localStorage.getItem("roomname");
var username = localStorage.getItem("Username");

function send() {
  var usermsg = document.getElementById("type_message").value;
  firebase.database().ref(roomname).push({
      Username: username,
      message: usermsg,
      like: 0
  });
  document.getElementById("type_message").value = " ";
}