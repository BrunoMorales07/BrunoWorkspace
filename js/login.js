function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('boton').addEventListener("click", function () {
    
    let usuario = document.getElementById('user').value.trim();
    let password = document.getElementById('password').value.trim();

    localStorage.setItem("sesionIniciada", "true");
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    
    //campos no vacíos
    if (usuario === "" || password === ""){ 
        showAlertError();
        return;
    }
    //redireccionar al sitio de portada
    location.href = "index.html";  
})
