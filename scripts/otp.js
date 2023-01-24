import {navbar} from "../components/navbar.js";
let navBox = document.querySelector("#navbar____Container")
navBox.innerHTML = navbar();



const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");

input1.focus();
input1.addEventListener("input", () => {
    if(input1.value.length === 1){
        input2.focus();
    }
});

input2.addEventListener("input", () => {
    if(input2.value.length === 1){
        input3.focus();
    }
    if(input2.value.length === 0){
        input1.focus();
    }
});

input3.addEventListener("input", () => {
    if(input3.value.length === 1){
        input4.focus();
    }
    if(input3.value.length === 0){
        input2.focus();
    }
});

input4.addEventListener("input", ()=>{
    if(input4.value.length === 0){
        input3.focus();
    }
})

const handleClick = () => {
    const otp = input1.value + input2.value + input3.value + input4.value;

    const original = "1234";

    if(otp === original){
        alert("Success!");
        const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
        // orderDetails.paymentStatus = "Success"; 
        console.log(orderDetails);
        localStorage.setItem("finalOrderSuccess",JSON.stringify(orderDetails))

        localStorage.removeItem("cart");
        localStorage.removeItem("orderDetails");

        let otpDiv = document.querySelector("#otp__div");
         otpDiv.innerHTML = null;

         const h1 = document.createElement("h1");
         h1.innerText = "Thankyou for shopping with us!";
         h1.style.textAlign ="center";

         otpDiv.append(h1);

         setTimeout(()=>{
            window.location.href = "index.html";
         },2000);


        return;
    }
    alert("Failed!")
}

const button = document.querySelector("#submit__btn");
button.addEventListener("click",handleClick);

