import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js";
import {lower} from "../components/lower.js";
document.getElementById("nv").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
document.getElementById("last_bar").innerHTML=lower();
let data5=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTI3OXxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDI1LzE1ODIwMzU5MjM3NjYyLmpwZ3wyMjRjOWIwMGUyMTU3ZjU3YTExNjM5MjkyMmJhNmE1MDAzYzU0YzVmMmE0NGU0NzI4NDRjZTI0YzdiNmNlNDU5",
      "name": "REDEFINE + Total RF Serum Special",
      "description": "Save on our best selling Regimen + most comprehensive anti-aging  serum.",
      "price": 358
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw",
      "name": "REDEFINE + Lash Boost Special",
      "description": "Ditch wrinkles + mascara. Visibly lifts, sculpts + firms skin, plus conditions lashes.",
      "price": 343
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAAPS01-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDg1Nzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMyL2g0OC8xMjM5NjczMTQzMjk5MC5qcGd8YjM5NjlhNjM0MjM3ZDA0M2UwMGVmOTk5YmI0OWFhMjIyODlhN2YxOTFiYjAxYWFlOGQ5NjYyN2NkYjllYTQ3Mg",
      "name": "REDEFINE AMP It Up Special",
      "description": "Fight wrinkles with micro-exfoliation technology + skin-fortifying serum.",
      "price": 400
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzOTY1NHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDlmLzExODU0MDU2MzkwNjg2LmpwZ3xhOGI1MDZkNjc5NzQ0NDg4Y2NmZDRkZjBkYWZmYzg5MGQ5MzM4NjdkYzAyZGVmODU5NDNkMTJhMmZjMGZiODE3",
      "name": "REDEFINE Power Up Special",
      "description": "Fight wrinkles + clogged pores with a special that visibly lifts, firms + deep cleans.",
      "price": 428
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAEY015-AASRI60-AALS060-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjMxOXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGQ2LzExODU2MTM2NTM2MDk0LmpwZ3xiNjcxNDJiMmNkNTAyNTE0OWU2NGE3MzA1MWEzZmViMDk3MjA4YTQ5YjZlMzY4N2Q0NDRjNTEwZTU1ODExMGMw",
      "name": "REDEFINE Age Assault Special",
      "description": "This comprehensive anti-aging set visibly firms skin + eye contours and plumps lips.",
      "price": 400
    }
  ]
let append_bundles=(data)=>{

    let bun=document.getElementById("bundles");
    bun.innerHTML=null;
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
            add_a(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        bun.append(box);


    })
  }

  append_bundles(data5);

  let add_a=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];
    data.qty=1;
    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }

  let data6=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
      "name": "REDEFINE Multi-Function Eye Cream",
      "description": "Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet.",
      "price": 70
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAAPS01-Regimen-Explainer-AMP-MD-System-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODcyNnxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oNDEvMTQ2MDQwOTQ0MDY2ODYucG5nfGYyNGNkZTQ1ODc2Zjg3OGYzMjZjNDFmMTI4NTdmNzNkOWM0MmIzZTZhMzRkMDE0OTMwNjRkOTZiMDdiZTYyMjk",
      "name": "REDEFINE AMP MD System",
      "description": "Amp up your routine with micro-exfoliation + skin-fortifying serum.",
      "price": 227
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AARMF50-cat.jpg?context=bWFzdGVyfHJvb3R8MTUyMTd8aW1hZ2UvanBlZ3xoYTUvaDliLzEzNjE1MDM2MTcwMjcwLmpwZ3xhM2U4ZGUyYzhhOGNhOTBiM2I0NjE4YjU1MTM5MjUwMGVhOTJhZjdlNzcwOTU2NmEwMDEwZjNmNmEyNDc1OGUz",
      "name": "REDEFINE Rejuvenation Mask",
      "description": "Instantly moisturizes skin while visibly improving fine lines + wrinkles over time.",
      "price": 60
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AALS060-Regimen-Explainer-Lip-Renewing-Serum-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMzc3M3xpbWFnZS9wbmd8aW1hZ2VzL2hmYi9oNDEvMTQ2MDQwOTM1ODc0ODYucG5nfGIyNTY2ZTJmMTAzMDc4MDhjZTkyYjYwZDI1MWZlNGNlZWQ2ZGIzYzc3ZjkwN2RjZDY3YmU3NDkwNDIyOWUwYWU",
      "name": "REDEFINE Lip Renewing Serum",
      "description": "Hyaluronic Acid + Glycerin help visibly reduce lip wrinkles while you sleep.",
      "price": 58
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/IRS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3w0NzYwNXxpbWFnZS9wbmd8aW1hZ2VzL2gzMy9oMmIvMTM3NTgzODU3MTcyNzgucG5nfDU3MDNlODNlMjk0MDZiYWEwODU1NTZhMDg3NDBkNTU4M2EwNGJiY2M1OTZmN2RlMWNlM2UwYmEyZDg5YzViNDM",
      "name": "REDEFINE Intensive Renewing Serum",
      "description": "Wake up to vibrant skin! This supercharged serum empowers skin’s own renewing process.",
      "price": 102
    }
  ]
  let append_amplify=(data)=>{

    let amp=document.getElementById("amplify");
    amp.innerHTML=null;
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
            add_s(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        amp.append(box);


    })
  }

  append_amplify(data6);

  let add_s=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];
    data.qty=1;
    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }


let data7=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTg1Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaDM3L2g5ZC8xNDc5ODgzMjU2NjMwMi5qcGd8OTAzYjY3NGU1YTUyNmNkYzcyZGM3NGEyMmQzYjIxY2ZiMTRjYjNjNzhmYWFiMzdkOGI0ODM1MjdiMTI0Nzk2Zg",
      "name": "REDEFINE Daily Clay Cleanser",
      "description": "Go deep. This clay cleanser doubles as a 2-minute mask that exfoliates + purifies.",
      "price": 45
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWF125-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTg2NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGFjL2hiOC8xMTg1NDA1NjkxNDk3NC5qcGd8MDhiNGM0ZDJmMTliNzhmYjk0ZDJmYzQ4YjhhM2E2YjU2NGE1YzRjZTExNjJmYzU3ZjFmNTc3MmE3N2UyNTMwNw",
      "name": "REDEFINE Daily Foaming Cleanser",
      "description": "Lather up! Powerful AHAs exfoliate while dirt, oil + makeup are all washed away.",
      "price": 45
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AATN125-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTk1ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2hmMi8xMTg1NDA1MzMxMDQ5NC5qcGd8Njg0OTgyMDU0NGI3MDhkNDY5OWZmMWI2YTYxMTg3OWZhODM5NTk3MTBjNTVlOTdiMTQ4YWE4ZmUzMWZkZDg4OA",
      "name": "REDEFINE Pore Refining Toner",
      "description": "Our skin-softening toner minimizes + unclogs pores + helps promote cell turnover.",
      "price": 50
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AATT030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wyMDczNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2gyMS8xMTg1NDA1NDM5MTgzOC5qcGd8MjZkNzAxMTI1YTBiMjgzZjNmMTIyMjA0NWE1ZTFmZjcyZDNjY2Y1OTU2MjNmNjY5ZDEyNGMwNzM4OTU3MDEyNw",
      "name": "REDEFINE Triple Defense Cream Broad Spectrum SPF 30",
      "description": "Visibly improve firmness while protecting skin from UV rays.",
      "price": 90
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AATL030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTY3MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDg2L2g4Yi8xMTg1NDA1MjI2MTkxOC5qcGd8ZmNlMmFlNjExNTQxNmFlYWM0OGI2Nzc1NmFjMTUyYmUyN2NlN2IyY2M4MDEyM2Q2MzNiZjdmMmJiYmNiMjBmMQ",
      "name": "REDEFINE Triple Defense Lotion Broad Spectrum SPF 30",
      "description": "A daily lotion + sunscreen that helps visibly improve skin firmness.",
      "price": 90
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAPM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wyMTIzODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDEzL2g4Ni8xMTg1NDA1MTYwNjU1OC5qcGd8MmM0ZmI0YjBlOGU4NzBiM2QzMGVjMDhhNGZkZGI0MTQzYzgxZDhiNTA3MzgyYzIzYzVjNmE0MTBjYzFmNjQ1Mw",
      "name": "REDEFINE Overnight Restorative Cream",
      "description": "Get real beauty sleep. This cream reduces the appearance of wrinkles + lifts, firms + sculpts.",
      "price": 90
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAPL030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxOTk1NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDkxL2hjZi8xMTg1NDA1MDYyMzUxOC5qcGd8NGJkY2YyMzM0Y2MzMmYyNjQ3ODQ0ZjhhNDgxMmZkYmFjNDgzNGI5YjcyYmY3YjM1MjkwODBjYmVkOTBjMzhlMw",
      "name": "REDEFINE Overnight Reparative Lotion",
      "description": "Get real beauty sleep. Our lotion reduces the appearance of wrinkles + lifts, firms + sculpts.",
      "price": 90
    }
  ]

  let append_indi_itm=(data)=>{

    let itm=document.getElementById("indi_item");
    itm.innerHTML=null;
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
            add_f(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        itm.append(box);


    })
  }

  append_indi_itm(data7);

  let add_f=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];
    data.qty=1;
    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }