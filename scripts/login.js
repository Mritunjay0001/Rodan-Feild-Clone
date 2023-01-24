import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
let navBox = document.querySelector("#navbar____Container")
navBox.innerHTML = navbar();


// let form = document.querySelector("#login__form").addEventListener("submit", handleLogin);
// function handleLogin(event){
//     event.preventDefault();

//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;

//     if(!email || !password){
//         alert("Empty fields!");
//         return;
//     }

//     email = "eve.holt@reqres.in";
//     password = "pistol";

//     let payload = {
//         email,
//         password
//     }
//     loginApi(payload);

// }

// async function loginApi(payload){
//     try {
//         let response = await fetch("https://reqres.in/api/login" , {
//             method : 'POST',
//             headers : {
//             'Content-Type' : 'application/json'
//             },
//             body : JSON.stringify(payload),
//         })
//         let data = await response.json();
//         console.log("data:",data);
//         alert("Success!");
//         window.location.href = "index.html";
//     } catch (error) {
//         console.log("error:",error);
//         alert("Try Again!");
//     }
// }

var loginSubmission = document.querySelector("form")
var signupDetails = JSON.parse(localStorage.getItem("signupDetails"));
// var changingName = document.querySelector("#changeSignUpName");

loginSubmission.addEventListener("submit",function(){
     event.preventDefault();

     var data={
        email: document.querySelector("#loginUsername").value,
         password: document.querySelector("#loginPassword").value,
     }



    if(signupDetails.userEmail == data.email && signupDetails.userPassword == data.password){
         alert("Login Successful")
         localStorage.setItem("signinData",JSON.stringify(data))
         window.location.href="index.html"
        //  changingName.innerText = "Hello !";
     }else{
         alert("User not found. Please create an account !");
        //  window.location.href="signup.html";
        window.location.reload;
     }
 })