const log= document.getElementById("in1");
const pass= document.getElementById("in2");
 
function login(){
if(log.value==="Aranya"){
    if(pass.value==="2014"){
        window.location.href="index.html"
    }
    else {
            alert("Wrong Password. Try again!");
        }
}
   else{
    alert("Login or Password is Wrong Try again!");   
}
}