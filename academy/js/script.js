var burgerElement = document.getElementById('burger');
var overlay = document.getElementById('overlay');
var button = document.getElementById('auth-button');
var header = document.getElementById('header');
var postId = document.getElementById('postId');
var content = document.getElementById('content-block');

var form = document.getElementById('form');
var userName = document.getElementById('username');
var password = document.getElementById('password');
var userStatus = true;
var passwordStatus = true;

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

// userName.addEventListener('keyup', function(e){
//     console.log(userName.value.length);
//     if(userName.value.length <= 4 || userName.value.length > 8){
//         userName.classList.add('error');
//         userStatus = false;
//     }else{
//         userStatus = true;
//         userName.classList.remove("error");
//     }
//     if(passwordStatus && userStatus){
//         button.classList.remove('disable');
//     }else{
//         button.classList.add('disable');
//     }
// })

// password.addEventListener('keyup', function(e){
//     if(password.value.length <= 4 || password.value.length > 8){
//         password.classList.add('error');
//         passwordStatus = false;
//     }else{
//         password.classList.remove("error");
//         passwordStatus = true;
//     }
//     if(passwordStatus && userStatus){
//         button.classList.remove('disable');
//     }else{
//         button.classList.add('disable');
//     }
// })

form.addEventListener('submit', function(e){
   
    e.preventDefault();
    // if(userStatus && password){
    //     console.log(userName.value, password.value);
    // }
    let value = parseInt(postId.value);
    // console.log(typeof(value), value)
    if(typeof value === 'number' && value){
        let url = 'https://jsonplaceholder.typicode.com/posts/'+ value;
        ajax(url).then(function(item){
            let _item = JSON.parse(item);
            if(item === '{}') {
                content.innerHTML = "ობიექტი არარსებობს";
                return;
            }
            let span = document.createElement('div');
            span.innerText = "title :" + _item.title
            let span2 = document.createElement('div');
            span2.innerText = "body :" + _item.body;
            content.innerHTML = "";

            content.appendChild(span)
            content.appendChild(span2);
        })
    }
    // if(postId);
})

function ajax (url){
    return new Promise(function (resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.status == 200 && xhr.readyState == 4){
                // console.log(xhr.responseText);
            }
        }
        xhr.open('GET', url);
        xhr.onload = function (){
            resolve(xhr.responseText);
        }
        xhr.onerror = function(){
            reject("error");
        }
        xhr.send();
    })
}

// ajax('https://google.com').then(function(data){
    // console.log(data);
    // return promi
// })

// function f1 (){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('pirveli');
//         }, 1000)
//     })
// }

// function f2 (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             reject('reject');
//         }, 2000)
//     })
// }

// Promise.all([f1(), f2()]).then(function(val){
    // console.log(val)
// })

//  async function test(){
//      try{
//         let _f1 = await f1();
//         let _f2 = await f2();
//         console.log(_f1, _f2);
//      }
//      catch(error){
//         console.log(error);
//      }
// }

// test();

// var f1 = 



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




