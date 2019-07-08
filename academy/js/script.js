var burgerElement = document.getElementById('burger');
var overlay = document.getElementById('overlay');
var button = document.getElementById('auth-button');
var header = document.getElementById('header');

var form = document.getElementById('form');
var userName = document.getElementById('username');
var password = document.getElementById('password');
var userStatus = false;
var passwordStatus = false;

burgerElement.addEventListener('click', function(){
    burgerElement.classList.toggle('active');
    overlay.classList.toggle('active');
});

var lastScrollPositon = 0;
window.addEventListener('scroll', function(){
    var currentScrollPositon = window.pageYOffset;
    if(currentScrollPositon > lastScrollPositon){
        if(window.pageYOffset >= 150){
            header.classList.add('active');
        }
    }else{
        header.classList.remove('active');
    }
    lastScrollPositon = currentScrollPositon;
})

userName.addEventListener('keyup', function(e){
    console.log(userName.value.length);
    if(userName.value.length <= 4 || userName.value.length > 8){
        userName.classList.add('error');
        userStatus = false;
    }else{
        userStatus = true;
        userName.classList.remove("error");
    }
    if(passwordStatus && userStatus){
        button.classList.remove('disable');
    }else{
        button.classList.add('disable');
    }
})

password.addEventListener('keyup', function(e){
    if(password.value.length <= 4 || password.value.length > 8){
        password.classList.add('error');
        passwordStatus = false;
    }else{
        password.classList.remove("error");
        passwordStatus = true;
    }
    if(passwordStatus && userStatus){
        button.classList.remove('disable');
    }else{
        button.classList.add('disable');
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(userStatus && password){
        console.log(userName.value, password.value);
    }
})



// button.addEventListener('mouseover', function(){
//     // console.log("mouseover");
// });
// button.addEventListener("mouseleave", function(){
//     // console.log("mouselevae");
// });
// button.addEventListener("mousedown", function(){
//     console.log("mousedonw");
// });
// button.addEventListener("focus", function(){
//     console.log("focus");
// });
// button.addEventListener("mousemove", function(){
//     console.log("mousemove");
// });
// button.addEventListener("mouseup", function(){
//     console.log("mouseup");
// });
// button.addEventListener('click', function(){
//     console.log("click");
// });




