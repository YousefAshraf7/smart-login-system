let userNameInput=document.getElementById("username");
let nameAlertInput=document.getElementById("usernameValid");
let emailInput=document.getElementById("email");
let emailAlertInput=document.getElementById("emailValid");
let passwordInput=document.getElementById("password");
let passwordAlertInput=document.getElementById("passwordValid");
let signinInput=document.querySelector(".signin");
let signupInput=document.querySelector(".signup");
let logoutInput=document.querySelector("#logout");
let alertInput=document.querySelector(".alert");
let routeSignInInput=document.querySelector(".route-signin");
let routeSignUPInput=document.querySelector(".route-signup");
let messageInput=document.querySelector(".message");
var regexEmial = /^[a-zA-Z0-9]{4,20}@[a-zA-Z]{2,10}\.[-a-zA-Z]{2,3}$/; 
var regexName =  /^[0-9a-zA-Z$-@.]{8,20}$/; 
var regexpass =  /^[0-9a-zA-Z$-@.]{6,20}$/; 
var users=[];

if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}
// SIGNUP
function signup(){
    
    if(validation()&&sameName()){
        var user={
            userName: userNameInput.value,
            email: emailInput.value,
            password:passwordInput.value
        }
        users.push(user)
        localStorage.setItem("users" , JSON.stringify(users));
        console.log(users)
        clearForm()
        alertInput.innerHTML="success"
    }
 clearForm()
}
// SIGNIN
function signin(){
    passwordAlertInput.innerHTML="";
    emailAlertInput.innerHTML="";
    var logedin=""
    if(emailValidation()&&passwordValidation()){
        if(users.length==0){
            alertInput.innerHTML="incorrect email or password";
        } 
        for(var i=0 ; i<users.length ; i++){
            if(users[i].email==emailInput.value && users[i].password==passwordInput.value){
                logedin=users[i].userName
                localStorage.setItem("logedin" , JSON.stringify(logedin));
                window.location.href = "home.html";
                alertInput.innerHTML="";
            }
            
        }
    }

                nameAlertInput.innerHTML="";
}

// CLEAR
function clearForm(){
    userNameInput.value=""
    emailInput.value=""
    passwordInput.value=""
}

console.log(users)
signupInput.addEventListener("click",signup);
signinInput.addEventListener("click",signin);

// VALIDATION RETURN TO SIGNUP FUNCTION
function validation(){
    NameVali=sameName()
    validatingEmail=emailValidation()
    validatingPassword=passwordValidation()
    validatingName=nameValidation()
    if(validatingEmail && validatingPassword &&validatingName ){
        return true
    }
}

// NAME VALIDATION
function nameValidation(){
    if(regexName.test(userNameInput.value)==true){
        nameAlertInput.innerHTML="";
        return true;
    }else if(userNameInput.value==""){
        nameAlertInput.innerHTML="this field is rquired";
    }else if(regexName.test(userNameInput.value)==false){
        nameAlertInput.innerHTML="please insert at least 8 char.";
        return false;
    }
    
    
}
// EMAIL VALIDATION

function emailValidation(){
    if(regexEmial.test(emailInput.value)==true ){
        emailAlertInput.innerHTML="";
        return true;
    }else if(emailInput.value==""){
        emailAlertInput.innerHTML="this field is rquired";
    }else if(regexEmial.test(emailInput.value)==false){
        console.log(emailInput.value)
        emailAlertInput.innerHTML="not valid email";
        return false;
    }
}
// PASSWORD VALIDATION

function passwordValidation(){
    if(regexpass.test(passwordInput.value)==true){
        passwordAlertInput.innerHTML="";
        return true;
    }else if(passwordInput.value==""){
        passwordAlertInput.innerHTML="this field is rquired";
    }else if(regexpass.test(passwordInput.value)==false){
        passwordAlertInput.innerHTML="weak password";
        return false;
    }
}
// USERNAME REPEAT VALIDATION

function sameName(){
        for (var i = 0; i < users.length; i++){
            if (userNameInput.value == users[i].userName){
                nameAlertInput.innerHTML="username alreader used";
                return false;
        }
    }
    nameAlertInput.innerHTML="";
    return true;
}



userNameInput.addEventListener("input",nameValidation)
emailInput.addEventListener("input",emailValidation )
passwordInput.addEventListener("input",passwordValidation )
// SIGNUP VIEW
function signUpVeiw(){
    userNameInput.classList.replace("d-none" , "d-block")
    routeSignInInput.classList.replace("d-none","d-block")
    routeSignUPInput.classList.replace("d-block","d-none")
    signinInput.classList.replace("d-block","d-none")
    signupInput.classList.replace("d-none","d-block")
    alertInput.innerHTML="";
    clearForm()
}
// SIGNIN VIEW
function signInVeiw(){
    alertInput.innerHTML=""
    nameAlertInput.innerHTML="";
    passwordAlertInput.innerHTML="";
    emailAlertInput.innerHTML="";
    userNameInput.classList.replace("d-block","d-none")
    routeSignInInput.classList.replace("d-block","d-none")
    routeSignUPInput.classList.replace("d-none" , "d-block")
    signinInput.classList.replace("d-none","d-block")
    signupInput.classList.replace("d-block","d-none")
    clearForm()
}
routeSignUPInput.addEventListener("click",signUpVeiw)
routeSignInInput.addEventListener("click",signInVeiw)
















