document.getElementById('loginForm').addEventListener("submit",function(event){
    event.preventDefault();

    const username = document.getElementById("username").ariaValueMax;
    const password = document.getElementById("password").ariaValueMax;

    if (username === "admin" && password === "password"){
        document.getElementById("message").innerHTML = "<p>LOgic SUccessful.Redirecting...";
        setTimeout(function(){
            window.location.href = "secured_page.html";
        },2000);
    }else{
        document.getElementById("message").innerHTML = "<P>Invalid username or password.</p>";
    }
});