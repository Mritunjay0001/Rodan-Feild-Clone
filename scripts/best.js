import {navbar}from "../components/navbar.js"
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
let nav=document.getElementById("nav");
nav.innerHTML=navbar();

let data = [
    
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY',
      "label": 'Best Seller',
      "name": 'R + F Lash Boost',
      "description": 'Applied nightly to promote the appearance of longer, stronger and darker-looking lashes.',
      "price": 155
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY',
      "label": 'Best Seller',
      "name": 'Total RF Serum',
      "description": 'Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.',
      "price": 175,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU',
      "label": 'Best Seller',
      "name": 'REDEFINE Regimen',
      "description" : 'Visibly lifts,sculpts + firms while minimizing the appearance of lines + deep wrinkles',
      "price": 220,
      
      
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI',
      "label": 'Best Seller',
      "name": 'REDEFINE Multi-Function Eye Cream',
      "description": 'Visibly firms + lifts to improve the look of fine lines',
      "price": 70 ,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA',
      "label": 'Best Seller',
      "name": 'R + F Active Hydration Serum',
      "description": `Instantly boosts hydration levels by 200% and locks in moisture on skin's surface.`,
      "price": 112,
  
  
    },
    // {
    //   src: 'https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh',
    //   label: 'Best Seller',
    //   caption: 'Active Hydration Bright Eye Complex',
    //   description: 'Reduces visible dark circles and under-eye puffiness over time for younger-looking eyes.',
    //   price: '72',
  
  
    // },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5',
      "label": 'Best Seller',
      "name": 'Rodan + Fields Active Hydration Body Replenish',
      "description": 'Instantly and continuously hydrates the body for younger-looking, younger-acting skin.',
      "price": 66,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/ENPS125-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODU1NXxpbWFnZS9wbmd8aW1hZ2VzL2gyNi9oZjgvMTQ1MzIxNjc2MzA4NzgucG5nfGM0YTc0NjM0YWIzM2QxZDZlOTc0NTdmYjA4M2EyNDA5NGJhODg3ZDQwMGJjZjdiMTZlYTI2MjYwNjI2Y2JhZGE',
      "label": 'Best Seller',
      "name": 'Rodan + Fields Enhancements Micro-Dermabrasion Paste',
      "description": 'Exfoliates away dead skin cells for smoother, vibrant-looking skin after just one use.',
      "price": 83,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY',
      "label": 'Best Seller',
      "name": 'REVERSE Regimen',
      "description": 'Brightens + refines skin’s surface while tackling the look of fine lines + dark spots.',
      "price": 195,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU',
      "label": 'Best Seller',
      "name": 'UNBLEMISH Regimen',
      "description": 'Helps clear and prevent adult acne while visibly minimizing pores + fine lines.',
      "price": 190,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI',
      "label": 'Best Seller',
      "name": 'SOOTHE Regimen',
      "description": 'For teens + young adults: Clears existing blemishes + prevents new ones from forming.',
      "price": 89,
  
  
    },
    {
      "image": 'https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY',
      "label": 'Best Seller',
      "name": 'R + F Lash Boost',
      "description": 'Applied nightly to promote the appearance of longer',
      "price": 155,
  
    },
  ]
  
  function dispalyproduct(data) {
    let container =document.getElementById("products");
    container.innerHTML = null;
    data.forEach(({image,name,description,price}) => {
  
      let div = document.createElement("div");
      let img = document.createElement("img")
      img.src = image;
      // let label = document.createElement("p")
      // label.innerText = label;
      let caption = document.createElement("h6")
      caption.innerText = name;
      let desc = document.createElement("p")
      desc.innerText = description;
      let pri = document.createElement("p")
      pri.innerText = `$`+ price;
  
      // let detailsContainer = document.createElement('div')
  
  
      
      let addtobag = document.createElement("button");
      addtobag.innerText = "ADD TO BAG";
      addtobag.style.cursor = "pointer";

      addtobag.addEventListener("click",()=>{
        let obj_data = {
          image:image,
          name:name,
          description:description,
          price:price
        };
        add_h(obj_data);
      })

      div.append(img,name,desc,pri,addtobag);
      container.append(div);

  //     addtobag.addEventListener("click", function (el) {
        
  //   let addtobagstorage = JSON.parse(localStorage.getItem("add1")) || [] 
  //       el.qty = 1 ;
  //       addtobagstorage.push(el)
  //       console.log(el);
  //       localStorage.setItem("add1", JSON.stringify(addtobagstorage))
  //       alert("Item Added to Cart Successfully")
  //       window.location.href="cart.html"
  //     })

  // detailsContainer.append(image, label, caption, description, price,)
  //     div.append(detailsContainer, addtobag)
  //     document.getElementById("products").append(div)


  
    })
  }

  dispalyproduct(data);

  let add_h = (data) => {
    let arr_data = JSON.parse(localStorage.getItem("add1")) || [];
    data.qty = 1;
    arr_data.push(data);
    localStorage.setItem("add1",JSON.stringify(arr_data));
  }