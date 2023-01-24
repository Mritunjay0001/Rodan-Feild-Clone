import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
import {lower} from "../components/lower.js"
let low=document.getElementById("lower");
low.innerHTML=lower();
let foot=document.getElementById("footer");
foot.innerHTML=footer();
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();