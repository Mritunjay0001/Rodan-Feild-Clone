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
      src: 'https://www.rodanandfields.com/en-us/medias/HSMRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wxOTkwNnxpbWFnZS9wbmd8aW1hZ2VzL2g0Yi9oZmYvMTU4ODA4MDgwMDU2NjIucG5nfGRiMjBjZTMwMzYxMzc4YjUxMzZhNWI5NWU2N2Y5YjA4ODBiNmI1YmM1MTI4NTM5ZjdlZDhkOWI3YjU2ZDRlNTI',
      caption: 'Smooth + Regimen + Refresh + Dry Shampoo Special',
      description: 'Buy the smooth + Regimen + Dry Shampoo and get Define + curl cream +scalp massager free',
      price: '$161 ($232 value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HVLRGLP1-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMTU0NnxpbWFnZS9wbmd8aW1hZ2VzL2gyMi9oNTMvMTU4ODA4MTI3NTcwMjIucG5nfDkwMWFkZmIwZjI2N2QyZGQ5YzdlMzhkNDY4ZWViNTUyMjI3MzEwOGE3M2U0MDRiMGQ1NmRhYThkOWRjMjdmYWI',
      caption: 'Hydration Best Sellers',
      description: 'Buy the Volume+ Regimen + Dry Shampoo and get Define+ Curl Cream + scalp massager free.',
      price: '$184 ($250 value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HSMRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMzg4NHxpbWFnZS9wbmd8aW1hZ2VzL2g5Mi9oYmUvMTU4ODA4MDgyMDIyNzAucG5nfDI1OTVmZjA0YmE3YzkyMTFiYTc5ZGRhODU4YTQ1ZWMyNTFjNDM3OWNmNzQ3ZTg2ZDIzNmI3NGRjMGRiNGFmZjk',
      caption: 'Smooth + Regimen + Total RF Serum Special',
      description: 'Buy the Smooth+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.',
      price: '$297 ($368 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HVLRGLP2-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyNjY4M3xpbWFnZS9wbmd8aW1hZ2VzL2gyZS9oOWQvMTU4ODA4MTI4ODgwOTQucG5nfGM3YmRkZmM2MTYyM2VkYzBiNWRhMjc4MDExMDA5OGZhYjZjNzRjNzA3MWM3OTU4ZjcwZGQ2M2JmNWNkYTU1ODk',
      caption: 'Volume + Regimen + Total RF Serum Special',
      description: 'Buy the Volume+ Regimen + Total RF Serum and get free Refresh+ Dry Shampoo and more.',
      price: '$297 ($368 Value) ',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HENAH22P-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMzQ2NnxpbWFnZS9wbmd8aW1hZ2VzL2g4OC9oYjQvMTU4ODkwODc5NTQ5NzQucG5nfDMzZjMyZjBmZjRhYWQzNTdlMWZmZmI1MmUyYWM0MzZkYWU3ODNjZTVhNjc0YjEwNjA3OWI0ZmZkZjZkOTQyOGM',
      caption: 'Hydration Best Sellers',
      description: 'Hydration boost for glowing face+eyes and get FREE Body cream ($66) + R+F Luxe Hair Wrap',
      price: '$184 ($250 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HEYES22P-400x400-image-category-desktop-1.png?context=bWFzdGVyfGltYWdlc3wyMjM1NHxpbWFnZS9wbmd8aW1hZ2VzL2g0MC9oZTIvMTU4ODkwOTE5MTk5MDIucG5nfDU0MmFhYjkxNzU5ZGFhZGViN2ZlYmIzMDMyODBlM2UwNTI4NjY3YmY3MmEyNmI3YTcwNDBiODMxNmM1NmQzZTY',
      caption: 'Eye Best Sellers',
      description: 'Holiday ready eyes + lashes and get FREE Bright Eye Complex ($72) and R+F Luxe Hair Wrap',
      price: '$225 ($297 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1OTI3OXxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaDI1LzE1ODIwMzU5MjM3NjYyLmpwZ3wyMjRjOWIwMGUyMTU3ZjU3YTExNjM5MjkyMmJhNmE1MDAzYzU0YzVmMmE0NGU0NzI4NDRjZTI0YzdiNmNlNDU5',
      caption: 'REDEFINE + Total RF Serum Special',
      description: 'Save on our best selling Regimen + most comprehensive anti-aging serum.',
      price: '$358 ($450 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HRVRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NDMwOHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaGMzLzEzOTc3NjU2NTI0ODMwLmpwZ3wzZDI3Mzk1ZTZhMjVjMTMwMWZhMTYzNTNmZjVlYTAxM2YwMzYwYTg5OWU1NTNlYjY3MTYwNDQzNGY3ZTA4ZGY3',
      caption: 'REVERSE + Total RF Serum Special',
      description: 'Save on our brightening skincare Regimen and our most comprehensive anti-aging serum.',
      price: '$334 ($420 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HSORGTRF-SOWA125-SOTT050-SOMO050-SOSS050-ENFM030-900x900-tablet-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTAzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g5MS8xMzk3NzY1Nzc3MDAxNC5qcGd8ZDhkOGZhNDhhNjAwMTdjN2YxNmRhMjlkYjkzZmVjYzgyMTcwY2VhMmNlMjhlZDQ5NGJhMzExNWQxNjljYjM0Mg',
      
      caption: 'SOOTHE + Total RF Serum Special',
      description: 'Save on our sensitive skin Regimen + our most comprehensive anti-aging serum. ',
      price: '$323 ($410 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HUNRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NTM5MnxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDhjLzEzOTc3NjU3OTY2NjIyLmpwZ3xkYzVkYmZhM2IyYmU1ZmFiZWI5NTMxYjQxYzhkZDNlNDMxMDYzNmFiZDg5NzUzNTc5NDI4NDllYWY0YzEzNmIz',
      caption: 'UNBLEMISH + Total RF Serum Special',
      description: 'Save on our acne-fighting Regimen + most comprehensive anti-aging serum.',
      price: '$328 ($415 Value)',
  
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HRCRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w3ODAwMXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGE3LzEzOTc3NjU1NTc0NTU4LmpwZ3w3MjA1Y2RhNjE1N2VhNWFkN2U3ZDUyNmVkY2NkZWI5MWNhNzQ0N2QxN2U4ZjE1ODYxZDIxMmI1MzA1Y2UyZmEy',
      caption: 'RECHARGE + Total RF Serum Special',
      description: 'Boost + lift, balance + tighten, defend + brighten! Recharge your complexion every day',
      price: '$272 ($309 Value)',
  
    },
    {
        src: 'https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk',
        caption: 'REVERSE + Lash Boost Special',
        description: 'Visibly revitalize skin + condition lashes for a younger-looking appearance.',
        price: ' $318 ($400 Value)',
  
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HSORGLP1-SOWA125-SOTT050-SOMO050-SOSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGQ1LzEyNzcxNTg3MTk0OTEwLmpwZ3w2Y2Q0ZmI5MDMwYzdmYTEwMGUzYzU4M2NiZGRkMWYxOTQ2MWIwMDAwMDIyYTEzYzI4YzUzNTZmMjZhZjNkMTRi',
      caption: 'SOOTHE + Lash Boost Special',
      description: 'Visibly reduce redness + condition lashes for a younger-looking appearance.',
      price: '$307 ($390 Value)',
      
    },
    {
      src: 'https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw',
      caption: 'REDEFINE + Lash Boost Special',
      description: 'Ditch wrinkles + mascara. Visibly lifts, sculpts + firms skin, plus conditions lashes.',
      price: ' $343 ($430 Value)',

    },
    {
        src: 'https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAAPS01-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDg1Nzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMyL2g0OC8xMjM5NjczMTQzMjk5MC5qcGd8YjM5NjlhNjM0MjM3ZDA0M2UwMGVmOTk5YmI0OWFhMjIyODlhN2YxOTFiYjAxYWFlOGQ5NjYyN2NkYjllYTQ3Mg',
        caption: 'REDEFINE AMP it Up Special',
        description: 'Fight wrinkles with micro-exfoliation technology + skin-fortifying serum.',
        price: ' $400 ($502 Value)',
  
    },
  
]
  dispalyproduct(data)
  
  function dispalyproduct(data) {

    document.getElementById("products").innerHTML = ""
  
    let addtobagstorage = JSON.parse(localStorage.getItem("Userbag")) || []

    data.forEach(el => {
  
      let div = document.createElement("div")

      let image = document.createElement("img")
      image.src = el.src

      let caption = document.createElement("h6")
      caption.innerText = el.caption

      let description = document.createElement("p")
      description.innerText = el.description

      let price = document.createElement("p")
      price.innerText = el.price

      let detailsContainer = document.createElement('div')
      let addtobag = document.createElement("button")
      addtobag.innerText = "ADD TO BAG"
      addtobag.style.cursor = "pointer"
      addtobag.addEventListener("click", function (e) {
        // console.log("Hi")
        
    let addtobagstorage = JSON.parse(localStorage.getItem("Userbag")) || []      
        addtobagstorage.push(el)
        console.log((el))
        localStorage.setItem("Userbag", JSON.stringify(addtobagstorage))
        alert("Item Added to Cart Successfully")
        window.location.href="cart.html"
      })
  detailsContainer.append(image, caption, description, price,)
      div.append(detailsContainer, addtobag)
      document.getElementById("products").append(div)
      
    })
  }
  
 
  
   
  
  