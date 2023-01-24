
window.onload=()=>{

    document.getElementById("form").addEventListener("submit",()=>{
        myFun(event);
    })
    append(store_data);





}


let myFun=(e)=>{
    e.preventDefault();
    let n=document.getElementById("name").value;
    let imagee=document.getElementById("image").value;
    let pricee=document.getElementById("price").value;
    let descriptionn =document.getElementById("description").value;

   
    
    let addProduct={
        name:n, 
        image:imagee,
        price:pricee,
        description:descriptionn
    }
    getdata(addProduct);
    
}

let getdata=(add_p)=>{
    let array_p=JSON.parse(localStorage.getItem("addProduct"))||[];
    array_p.push(add_p);
    localStorage.setItem("addProduct",JSON.stringify(array_p));

}


let store_data=JSON.parse(localStorage.getItem("addProduct"))||[];
console.log(store_data);
let container=document.getElementById("container")
container.innerHTML=null;
let append =(data)=>{

    data.forEach(({name,image,price,description},index)=>{
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=image
        let nam=document.createElement("h3")
        nam.innerText=name
        let desc=document.createElement("p")
        desc.innerText=description
        let p=document.createElement("p")
        p.innerText="Price"+"-"+price;
        let add_btn=document.createElement("button");
        add_btn.innerText="Add";
        add_btn.addEventListener("click",()=>{
            add_it(image,name,description,price);
        })
        // remove__Btn = document.createElement("button");
        // remove__Btn.innerText = "Delete";
        add_btn.onclick = () => {
            deleteFromAdmin(index);
        }


        box.append(img,nam,desc,p,add_btn);
        container.append(box)
        
    })
}

let add_it=(img,nam,desc,p)=>{

    let obj={
        image:img,
        name:nam,
        description:desc,
        price:p
    }
    let arr=JSON.parse(localStorage.getItem("add_to_page"))||[];
    arr.push(obj);
    localStorage.setItem("add_to_page",JSON.stringify(arr));
}


 let logout=()=>{
window.location.href="index.html"
}

let deleteFromAdmin = (index) => {
    // let arr=JSON.parse(localStorage.getItem("add_to_page"));
    let store_data=JSON.parse(localStorage.getItem("addProduct"))
    console.log(store_data);
    store_data.splice(index,1);
    window.location.reload();
    localStorage.setItem("addProduct",JSON.stringify(store_data));
    append(store_data);

}