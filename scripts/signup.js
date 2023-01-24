import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
let navBox = document.querySelector("#navbar____Container")
navBox.innerHTML = navbar();


// let form = document.querySelector("#registration__form").addEventListener("submit", handleSubmit);
// function handleSubmit(event){
//     event.preventDefault();

//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let number = document.querySelector("#number").value;
//     let password = document.querySelector("#password").value;

//     if(!name || !email || !number || !password){
//         alert("Fill in all the fields!");
//         return;
//     }

//     email = "eve.holt@reqres.in";
//     password = "pistol";

//     let payload = {
//         email,
//         password
//     }

//     fetch("https://reqres.in/api/register" , {
//         method : 'POST',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify(payload),
//     }).then((res)=>{
//         return res.json();
//     }).then((res)=>{
//         console.log(res);
//         alert("Success");

//         window.location.href = "index.html";

//     }).catch((err)=>{
//         console.log(err);
//         alert("Registration Failed");
//     })

// }


var formSubmission = document.querySelector("form").addEventListener("submit",function(){

    event.preventDefault();

    var signupData = {
        userName : document.querySelector("#customerName").value,
        userNumber : document.querySelector("#customerNumber").value,
        userEmail: document.querySelector("#customerEmail").value,
        userPassword : document.querySelector("#customerPassword").value,
        userPasswordConfirm : document.querySelector("#customerPasswordConf").value,
    }
    localStorage.setItem("signupDetails",JSON.stringify(signupData));
    window.location.href="login.html";



 });