function signup(){
    data=document.getElementById("linput").value;
    localStorage.setItem("Username",data);
    window.location="kwitter_room.html";
}