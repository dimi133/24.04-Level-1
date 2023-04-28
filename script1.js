let fruits = ['Яблоко', 'Ананас', 'Киви', 'Дыня', 'Апельсин', 'Груша'];
let div = document.createElement('div');
document.body.append(div);
for(let i=0; i<fruits.length; i++){
    let newP = document.createElement('p');
    newP.innerText = fruits[i];
    div.append(newP);
}

let par = document.querySelectorAll('p');
for (let i = 0; i < par.length; i++){
par[i].addEventListener('click', function(){par[i].innerText = '*****'});
}


