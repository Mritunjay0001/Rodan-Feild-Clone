

let login=()=>{
    let email_id=document.getElementById("mail").value;
    let password=document.getElementById("pswd").value;
    if(email_id=="admin@gmail.com"&&password=="admin"){
        alert("Login Successful");
        window.location.href="admin.html";
    }
    else{
        alert("Invalid Credentials");
    }
}
