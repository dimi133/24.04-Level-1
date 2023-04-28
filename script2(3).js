let newP = document.querySelectorAll('p');
for(let i=0; i<newP.length; i++){
    newP[i].addEventListener('click', changeColor);


function changeColor(){
    newP[i].classList.toggle('active');
    //newP[i].classList.add('active');
}
 }
