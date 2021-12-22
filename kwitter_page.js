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
var roomname= localStorage.getItem("roomname");
var username= localStorage.getItem("Username");
function send(){
    var usermsg=document.getElementById("type_message").value;
    firebase.database().ref(roomname).push({
          Username: username,
          message: usermsg,
          like: 0
    });
    document.getElementById("type_message").value=" ";
}