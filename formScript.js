function validdationForm(){
    let name= document.getElementById("name").value;
    let email=document.getElementById("name").value;
    let message=document.getElementById("password").value;
let subject=ducument.getElementById('subject').value;
if (name === "" || !/^[a-zA-Z ]+$/.test(name)) {
    alert("Name must be filled out and contain only letters");
    return false;
}

// Email validation: using regex
if (email === "" ||  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address");
    return false;
}
if(subject===""){
    alert("Subject  must be filled")
    return false;
}
if(message===""){
    alert("Messege  must be filled")
    return false;
}
return true;
}

document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        var nav = document.querySelector(".nav-links");
        nav.classList.toggle("nav-active");
    }

    
    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
});

