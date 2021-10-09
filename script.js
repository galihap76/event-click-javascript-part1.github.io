let h1 = document.getElementsByTagName('h1')[0];
let btn = document.getElementsByTagName('button')[0];
let nilai = 1;

btn.addEventListener('click', function(){  
    h1.innerHTML = nilai++;  
});