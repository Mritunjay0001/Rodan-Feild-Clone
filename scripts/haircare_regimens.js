import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
document.getElementById("navbar").innerHTML=navbar();

let data8=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxOTkwNnxpbWFnZS9wbmd8aW1hZ2VzL2g0Yi9oZmYvMTU4ODA4MDgwMDU2NjIucG5nfGRiMjBjZTMwMzYxMzc4YjUxMzZhNWI5NWU2N2Y5YjA4ODBiNmI1YmM1MTI4NTM5ZjdlZDhkOWI3YjU2ZDRlNTI",
      "name": "Smooth+ Regimen + Refresh+ Dry Shampoo Special",
      "description": "Buy the Smooth+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.",
      "price": 161
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HVLRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMTU0NnxpbWFnZS9wbmd8aW1hZ2VzL2gyMi9oNTMvMTU4ODA4MTI3NTcwMjIucG5nfDkwMWFkZmIwZjI2N2QyZGQ5YzdlMzhkNDY4ZWViNTUyMjI3MzEwOGE3M2U0MDRiMGQ1NmRhYThkOWRjMjdmYWI",
      "name": "Volume+ Regimen + Refresh+ Dry Shampoo Special",
      "description": "Buy the Volume+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.",
      "price": 161
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMzg4NHxpbWFnZS9wbmd8aW1hZ2VzL2g5Mi9oYmUvMTU4ODA4MDgyMDIyNzAucG5nfDI1OTVmZjA0YmE3YzkyMTFiYTc5ZGRhODU4YTQ1ZWMyNTFjNDM3OWNmNzQ3ZTg2ZDIzNmI3NGRjMGRiNGFmZjk",
      "name": "Smooth+ Regimen + Total RF Serum Special",
      "description": "Buy the Smooth+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.",
      "price": 297
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HVLRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyNjY4M3xpbWFnZS9wbmd8aW1hZ2VzL2gyZS9oOWQvMTU4ODA4MTI4ODgwOTQucG5nfGM3YmRkZmM2MTYyM2VkYzBiNWRhMjc4MDExMDA5OGZhYjZjNzRjNzA3MWM3OTU4ZjcwZGQ2M2JmNWNkYTU1ODk",
      "name": "Volume+ Regimen + Total RF Serum Special",
      "description": "Buy the Volume+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.",
      "price": 297
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRG001-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3wyMjc5NHxpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oYTgvMTU4ODA4MTEyNDk2OTQucG5nfDNjYTkwNDcyOTA0ODYyN2QyZTYzNWQ5OGExOGMwZjQwNmZiYTZlMjA4NGVjZTkzZjUxZjQ2MjgyMzgwOWE4N2E",
      "name": "SMOOTH+ Regimen",
      "description": "3 step Regimen to hydrate + repair for softer, smoother hair with less frizz and damage.",
      "price": 122
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HVLRG001-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3wyMDQxN3xpbWFnZS9wbmd8aW1hZ2VzL2hlOS9oNTUvMTU4ODA4MTIwNjg4OTQucG5nfDk5NDY3YzcwOTlkMDg3ZjAxMGM3NTY4ZDdmZDMyNjViYmEzN2NhNDViMjU3NTNlNzE5ODQyNTEwZDJkNzUxMzI",
      "name": "VOLUME+ Regimen",
      "description": "3 step Regimen to boost thickness + minimize hair fall due to breakage for added volume.",
      "price": 122
    }
  ]


  let append_hair=(data)=>{

    let hair=document.getElementById("hair_reg");
    hair.innerHTML=null;
    data.forEach(({image,name,description,price})=>{

        let box=document.createElement("div");
        let imagee=document.createElement("img");
        imagee.src=image;
        let namee=document.createElement("h4");
        namee.innerText=name;
        let descriptionn=document.createElement("p");
        descriptionn.innerText=description;
        let pricee=document.createElement("p");
        pricee.innerText="$"+price;
        let add=document.createElement("button");
        add.innerText="SHOP NOW";

        add.addEventListener("click",()=>{
            let obj_data={
                image:image,
                name:name,
                description:description,
                price:price
            };
            add_h(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        hair.append(box);


    })
  }

  append_hair(data8);

  let add_h=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];

    data.qty=1;
    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }