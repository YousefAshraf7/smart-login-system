let messageInput=document.querySelector(".message");
let logoutInput=document.querySelector("#logout");
var users=[];
var logedin=""

if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}
if(localStorage.getItem("logedin")!=null){
    logedin=JSON.parse(localStorage.getItem("logedin"));
}
// LOGOUT
function logout(){
    window.location.href = "index.html";
}


logoutInput.addEventListener("click",logout);

messageInput.innerHTML=`welcome${logedin}`;
