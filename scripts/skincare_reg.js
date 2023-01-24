import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
document.getElementById("navbarr").innerHTML=navbar();

let data_bundles=[
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTI3OXxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDI1LzE1ODIwMzU5MjM3NjYyLmpwZ3wyMjRjOWIwMGUyMTU3ZjU3YTExNjM5MjkyMmJhNmE1MDAzYzU0YzVmMmE0NGU0NzI4NDRjZTI0YzdiNmNlNDU5",
      "name": "REDEFINE + Total RF Serum Special",
      "description": "Save on our best selling Regimen + most comprehensive anti-aging  serum.",
      "price": 358
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HRVRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NDMwOHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaGMzLzEzOTc3NjU2NTI0ODMwLmpwZ3wzZDI3Mzk1ZTZhMjVjMTMwMWZhMTYzNTNmZjVlYTAxM2YwMzYwYTg5OWU1NTNlYjY3MTYwNDQzNGY3ZTA4ZGY3",
      "name": "REVERSE + Total RF Serum Special",
      "description": "Save on our brightening skincare Regimen and our most comprehensive anti-aging serum.",
      "price": 334
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HUNRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NTM5MnxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDhjLzEzOTc3NjU3OTY2NjIyLmpwZ3xkYzVkYmZhM2IyYmU1ZmFiZWI5NTMxYjQxYzhkZDNlNDMxMDYzNmFiZDg5NzUzNTc5NDI4NDllYWY0YzEzNmIz",
      "name": "UNBLEMISH + Total RF Serum Special",
      "description": "Save on our acne-fighting Regimen + most comprehensive anti-aging  serum.",
      "price": 328
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSORGTRF-SOWA125-SOTT050-SOMO050-SOSS050-ENFM030-900x900-tablet-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTAzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g5MS8xMzk3NzY1Nzc3MDAxNC5qcGd8ZDhkOGZhNDhhNjAwMTdjN2YxNmRhMjlkYjkzZmVjYzgyMTcwY2VhMmNlMjhlZDQ5NGJhMzExNWQxNjljYjM0Mg",
      "name": "SOOTHE + Total RF Serum Special",
      "description": "Save on our sensitive skin Regimen + our most comprehensive anti-aging serum.",
      "price": 323
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HRCRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w3ODAwMXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGE3LzEzOTc3NjU1NTc0NTU4LmpwZ3w3MjA1Y2RhNjE1N2VhNWFkN2U3ZDUyNmVkY2NkZWI5MWNhNzQ0N2QxN2U4ZjE1ODYxZDIxMmI1MzA1Y2UyZmEy",
      "name": "RECHARGE + Total RF Serum Special",
      "description": "Boost + lift, balance + tighten, defend + brighten! Recharge your complexion every day.",
      "price": 272
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw",
      "name": "REDEFINE + Lash Boost Special",
      "description": "Ditch wrinkles + mascara. Visibly lifts, sculpts + firms skin, plus conditions lashes.",
      "price": 343
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk",
      "name": "REVERSE + Lash Boost Special",
      "description": "Visibly revitalize skin + condition lashes for a younger-looking appearance.",
      "price": 318
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HUNRJLP1-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODE5MHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaDk1LzEyNzcxNTkwODk3Njk0LmpwZ3w3ZDQ4ZDYzNjI0ZjI3YmU1MjhmOTI0N2QyYzYwNmVkZjY3YTc5MzdlNDBhMGJhN2I5NTRmNDZhYWE2M2NmNDY0",
      "name": "UNBLEMISH + Lash Boost Special",
      "description": "Get fewer pimples + the appearance of longer lashes.",
      "price": 312
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HSORGLP1-SOWA125-SOTT050-SOMO050-SOSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGQ1LzEyNzcxNTg3MTk0OTEwLmpwZ3w2Y2Q0ZmI5MDMwYzdmYTEwMGUzYzU4M2NiZGRkMWYxOTQ2MWIwMDAwMDIyYTEzYzI4YzUzNTZmMjZhZjNkMTRi",
      "name": "SOOTHE + Lash Boost Special",
      "description": "Visibly reduce redness + condition lashes for a younger-looking appearance.",
      "price": 307
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/RCLBES1-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxOTIwM3xpbWFnZS9qcGVnfGltYWdlcy9oYWYvaDY2LzkxNzEyMzg3NDgxOTAuanBnfDIzM2NlODM0ODNjNTgxYThiMDAyMGJlYWEwMzRiZmU4ZDJiNThkODM3OTFmMmJhZjNmMzFmNDE3ODk5OWVhMzg",
      "name": "RECHARGE + Lash Boost Special",
      "description": "Get a glowing, luminous look + the appearance of lush, fuller-looking lashes.",
      "price": 256
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAAPS01-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDg1Nzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMyL2g0OC8xMjM5NjczMTQzMjk5MC5qcGd8YjM5NjlhNjM0MjM3ZDA0M2UwMGVmOTk5YmI0OWFhMjIyODlhN2YxOTFiYjAxYWFlOGQ5NjYyN2NkYjllYTQ3Mg",
      "name": "REDEFINE AMP It Up Special",
      "description": "Fight wrinkles with micro-exfoliation technology + skin-fortifying serum.",
      "price": 400
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HRVAPS01-RVWA125-RVSS050-RVTTG50-AAAPS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1NzcwMXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDhhLzEyNzcxNTc5ODg3NjQ2LmpwZ3wzOWNmZWJjNjlhMzY1NjkxM2JiOThlMGUwNzJhYjk1NDQzY2E5NGQwNmNhMzIxZThkOTlhODI1YmZhNmUzYWIz",
      "name": "REVERSE AMP It Up Special",
      "description": "Fight age spots with micro-exfoliation technology + skin-fortifying serum.",
      "price": 376
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzOTY1NHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDlmLzExODU0MDU2MzkwNjg2LmpwZ3xhOGI1MDZkNjc5NzQ0NDg4Y2NmZDRkZjBkYWZmYzg5MGQ5MzM4NjdkYzAyZGVmODU5NDNkMTJhMmZjMGZiODE3",
      "name": "REDEFINE Power Up Special",
      "description": "Fight wrinkles + clogged pores with a special that visibly lifts, firms + deep cleans.",
      "price": 428
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HRBXPSEG-RVWA125-RVTG125-RVTTG50-RVSS050-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0NDA3OHxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGJkLzEyNzcxNTc4MjQ5MjQ2LmpwZ3w0YjY5Yjg0YWI3ODFjNGZiZDgyYTA2M2YzYTFiYmNjNzcwNjU3NWQwOGQyOGY0MDhjZTgwM2RjMWZlMjUzMjU0",
      "name": "REVERSE Power Up Special",
      "description": "Reveal your brightest complexion with a deep pore clean for more luminous skin.",
      "price": 403
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/HUNXPSEG-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MjkxNHxpbWFnZS9qcGVnfGltYWdlcy9oYjgvaGYyLzEyNzcxNTkzMTI1OTE4LmpwZ3wxNzY4MjI4ZjYwNWJjNWE1ZTc4MjIyNzRkNTJjYjM0NGUxNTNmNDg3YWY2NzU3YTU1MDg4ODE2ODQ5NjU4MTRm",
      "name": "UNBLEMISH Power Up Special",
      "description": "This power pair fights pimples + clogged pores for a more youthful-looking complexion.",
      "price": 398
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/TAXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wyMDEyOHxpbWFnZS9qcGVnfGltYWdlcy9oNDYvaDkwLzkxNzEyNDU5ODk5MTguanBnfGQ0N2UwNGZhOGUzNjAyYzM1Y2I2NjI4ZGY2NjczYzZkYWQ2OTVhY2Q3YmIwMWI1NjFkNjQ3ZmJmZWJkMWY0MmY",
      "name": "SPOTLESS Power Up Special",
      "description": "This special clears existing acne + deep cleans to prevent future breakouts.",
      "price": 297
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/RCXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxNzc1M3xpbWFnZS9qcGVnfGltYWdlcy9oMDUvaGIyLzkxNzEyNDQwODkzNzQuanBnfGU4YTdjMzZjMWY0MGE5MGJlODI5YTI5ZmM1YmI2MDE0MGU1YjI5YjIzZDE3Zjg4MTMzM2VmZGMyOTI3ZTJmNTQ",
      "name": "RECHARGE Power Up Special",
      "description": "This power pair visibly improves stressed skin while cleaning deep into pores.",
      "price": 342
    },
    {
      "image": "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAEY015-AASRI60-AALS060-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjMxOXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGQ2LzExODU2MTM2NTM2MDk0LmpwZ3xiNjcxNDJiMmNkNTAyNTE0OWU2NGE3MzA1MWEzZmViMDk3MjA4YTQ5YjZlMzY4N2Q0NDRjNTEwZTU1ODExMGMw",
      "name": "REDEFINE Age Assault Special",
      "description": "This comprehensive anti-aging set visibly firms skin + eye contours and plumps lips.",
      "price": 400
    }
  ]

  let data=JSON.parse(localStorage.getItem("add_to_page"));

  for(let i=0;i<data.length;i++){
  
    console.log(data[i]);
    data_bundles.push(data[i]);
  }
  
  let append_bundles=(data)=>{

    let bundles=document.getElementById("bundles");
    bundles.innerHTML=null;
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
            add_it(obj_data);
        })

        box.append(imagee,namee,descriptionn,pricee,add);
        bundles.append(box);


    })
  }
  append_bundles(data_bundles);

  let add_it=(data)=>{

    let arr_data=JSON.parse(localStorage.getItem("add1"))||[];

    data.qty=1;
    arr_data.push(data);

    localStorage.setItem("add1",JSON.stringify(arr_data));
  }


  