var hstatus = document.querySelector('h5');

var btn = document.querySelector('#add');
// var remove = document.querySelector('#remove');

num = 0;

btn.addEventListener('click', ()=>{
    if(num === 0){
        hstatus.innerHTML = 'Friends';
        hstatus.style.color = 'green';
        btn.innerHTML = 'Remove Friend';
        num = 1;
    }else{
        hstatus.innerHTML = 'Stranger';
        hstatus.style.color = 'tomato';
        btn.innerHTML = 'Add Friend';
        num = 0;
    }

})

// remove.addEventListener("click", ()=>{
//     hstatus.innerHTML = 'Strangers';
//     hstatus.style.color = 'tomato';
// })