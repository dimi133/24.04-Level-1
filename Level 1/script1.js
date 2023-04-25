let fruits = ['Яблоко', 'Ананас', 'Киви', 'Дыня', 'Апельсин', 'Груша'];
let div = document.createElement('div');
document.body.append(div);
for(let i=0; i<fruits.length; i++){
    let newP = document.createElement('p');
    newP.innerText = fruits[i];
    div.append(newP);
}

let par = document.querySelectorAll('p');
par.addEventListener('click', onclick);
function onclick(){
    let star = '**************';
    par.innerText = star;
}

//par.addEventListener('click', function(){p.innerText = '*****'});