import {navbar} from "../components/navbar.js";
let navBox = document.querySelector("#navbar____Container")
navBox.innerHTML = navbar();


let cart = JSON.parse(localStorage.getItem("add1"));

let proceedForPay = document.querySelector("#payment");
proceedForPay.addEventListener("click",() =>{
    window.location.href="payment.html";
})

let promoCodeBtn = document.querySelector("#promo___Code");

let renderLength = () => {
    let itemNum = cart.length;
    let lengthDisplay = document.querySelector(".cart___lengthText");
    lengthDisplay.innerText = `Cart : ${itemNum}`;
}

renderLength();


let container = document.querySelector("section");


let displayProducts =(cart) =>{
    container.innerHTML = null;
    cart.forEach((ele,index)=>{

        // console.log(ele);

        const {qty,image,name,description,price} = ele;

        let productDiv = document.createElement("div");
        productDiv.setAttribute("id","prodBox");

        let productVisual = document.createElement("img");
        productVisual.setAttribute("id","prodImage");
        productVisual.src = image;

        let productName = document.createElement("p");
        productName.setAttribute("id","prodName");
        productName.innerText = name;

        let productDesc = document.createElement("p");
        productDesc.setAttribute("id","prodDesc");
        productDesc.innerText = description;

        let productAmount = document.createElement("p");
        productAmount.setAttribute("id","prodAmt");
        productAmount.innerText = `$` + price;

        // 

        let quantityP = document.createElement("p");
        quantityP.setAttribute("class","quantity_Number");

        let incDecDiv = document.createElement("div");
        incDecDiv.setAttribute("class","inc__Dec__Div");

        let incrementQty = document.createElement("button");
        incrementQty.setAttribute("class","plus");
        let decrementQty = document.createElement("button");
        decrementQty.setAttribute("class","minus");

        quantityP.innerText = `Quantity - ${qty}`;;
        incrementQty.innerText = "+";
        decrementQty.innerText= "-";

        // 

        let productButton = document.createElement("button");
        productButton.setAttribute("id","prodBtn");
        productButton.innerText = "Remove";
        productButton.onclick = () => {
            deleteFromCart(index);
        }

        //

        incrementQty.addEventListener("click",()=>{
            handleQuantity(ele , `+`);
        })
        decrementQty.addEventListener("click",()=>{
            handleQuantity(ele, `-`);
        })

        //

        incDecDiv.append(incrementQty,decrementQty);
        productDiv.append(productVisual,productName,productAmount,quantityP,incDecDiv,productButton);
        container.append(productDiv);
    })
}

displayProducts(cart);

let totalPrice = () => {

    let sum = 0;
    cart.map((ele)=>{
        sum += ele.price *ele.qty;
        // console.log(ele);
    })
    promoCodeBtn.addEventListener("click", ()=>{
        sum -= sum * 0.1;
        console.log(sum);
        let displayPrice = document.querySelector("#priceDisplay");
        displayPrice.innerText = `Total Price : $${Math.round(sum)}`;
        localStorage.setItem("total",JSON.stringify(Math.round(sum)));

        promoCodeBtn.setAttribute("disabled","disabled");
        promoCodeBtn.innerText = "Coupon Applied";
        promoCodeBtn.style.backgroundColor = "gray";
        promoCodeBtn.style.color = "white";
        return;
    })
    let displayPrice = document.querySelector("#priceDisplay");
    displayPrice.innerText = `Total Price : $${Math.round(sum)}`;
    localStorage.setItem("total",JSON.stringify(Math.round(sum)));

}

totalPrice();

let deleteFromCart = (index) => {
    // console.log(index);
    let cart = JSON.parse(localStorage.getItem("add1"));
    cart.splice(index,1);
    window.location.reload();
    localStorage.setItem("add1",JSON.stringify(cart));
    displayProducts(cart);
    totalPrice();
}

const handleQuantity = (data,type) =>{
    if(type === "+"){
        if(data.qty === 5){
            alert("Can't add more than 5 products!");
            return;
        }
        data.qty = data.qty + 1;
        displayProducts(cart);
        localStorage.setItem("add1",JSON.stringify(cart));
        totalPrice()
    }else{
        if(data.qty === 1){
            alert("Quantity can't be less than one");
            return
        }
        data.qty = data.qty-1;
        displayProducts(cart);
        localStorage.setItem("add1",JSON.stringify(cart));
        totalPrice()
    }    
    
}

