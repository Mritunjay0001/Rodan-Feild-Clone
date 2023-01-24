import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
document.getElementById("nav10").innerHTML=navbar();

let data10=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxOTkwNnxpbWFnZS9wbmd8aW1hZ2VzL2g0Yi9oZmYvMTU4ODA4MDgwMDU2NjIucG5nfGRiMjBjZTMwMzYxMzc4YjUxMzZhNWI5NWU2N2Y5YjA4ODBiNmI1YmM1MTI4NTM5ZjdlZDhkOWI3YjU2ZDRlNTI",
      "name": "Smooth+ Regimen + Refresh+ Dry Shampoo Special",
      "description": "Buy the Smooth+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.",
      "price": 161
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMzg4NHxpbWFnZS9wbmd8aW1hZ2VzL2g5Mi9oYmUvMTU4ODA4MDgyMDIyNzAucG5nfDI1OTVmZjA0YmE3YzkyMTFiYTc5ZGRhODU4YTQ1ZWMyNTFjNDM3OWNmNzQ3ZTg2ZDIzNmI3NGRjMGRiNGFmZjk",
      "name": "Smooth+ Regimen + Total RF Serum Special",
      "description": "Buy the Smooth+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.",
      "price": 297
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSMRG001-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3wyMjc5NHxpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oYTgvMTU4ODA4MTEyNDk2OTQucG5nfDNjYTkwNDcyOTA0ODYyN2QyZTYzNWQ5OGExOGMwZjQwNmZiYTZlMjA4NGVjZTkzZjUxZjQ2MjgyMzgwOWE4N2E",
      "name": "SMOOTH+ Regimen",
      "description": "3 step Regimen to hydrate + repair for softer, smoother hair with less frizz and damage.",
      "price": 122
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/SMSH236-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w5MDY0fGltYWdlL3BuZ3xpbWFnZXMvaDY1L2hkYS8xNTgxMTk4NTE3ODY1NC5wbmd8NjhkNTA2ZjI5MmYzZDBjOTg2OTU1YmViOWUxNTk3YTdlNzAwOGZjMmI5OWFhYjM2MmExZjUzNDVmZjdjOTgwZA",
      "name": "SMOOTH+ Shampoo",
      "description": "Cleanse product build-up from hair + scalp for softer, smoother hair with less frizz.",
      "price": 44
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/SMCN236-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w5NzIzfGltYWdlL3BuZ3xpbWFnZXMvaDE4L2g3Ny8xNTgxMTk5MDk0NTgyMi5wbmd8YmJmM2MxMjVhOWQ1OTgzNWZmYTgxMDYzZTc2YTA2NjllZjI2ZmU4ODc1NDVlNTgzOGY1OThjNjllZmU0ODQ0OQ",
      "name": "SMOOTH+ Conditioner",
      "description": "Condition, repair, and prevent damage to reduce frizz for softer, smoother hair.",
      "price": 47
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/SMTT060-400x400-category-1.png?context=bWFzdGVyfGltYWdlc3w4NzMyfGltYWdlL3BuZ3xpbWFnZXMvaGUyL2g5NC8xNTgxMTk5MTg2MzMyNi5wbmd8NWZiY2VhMmMyMWYzMjgwNmE2ODg1YTlmNzBjMDJjOThkYjI0ZWFlNmVlODUzMmVkY2EzZjI3YTEzNTEwZDBjZQ",
      "name": "DEFRIZZ+ Oil Treatment",
      "description": "Restore softness, hydrate + protect strands against thermal damage, for glossier hair.",
      "price": 63
    }
  ]

let append_smooth=(data)=>{

    let smooth=document.getElementById("smooth");
    smooth.innerHTML=null;
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
            add_smo(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        smooth.append(box);


    })
  }

  append_smooth(data10);

  let add_smo=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];

    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }


