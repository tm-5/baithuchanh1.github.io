const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
var check=document.getElementsByTagName("INPUT");

function signIn() {
    var bool=true
    for(var i=0;i<check.length;i++){
        if(check[i].value==""){
            bool=false
        }
    }
    if(bool) window.location.href = "exercise1.html";  
    else{
        alert("Hãy nhập đủ các thông tin!");
    }

    localStorage.setItem("user",document.getElementById("usernameLogin").value)
    localStorage.setItem("birth",document.getElementById("birth").value)

}
