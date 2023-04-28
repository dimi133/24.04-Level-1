
let images = [
    'https://images.drive.ru/i/0/5c861252ec05c4c071000003.jpg',
    'https://nb159.ru/wp-content/uploads/2016/10/volvo.jpg',
    'https://quto.ru/service-imgs/5f/64/64/51/5f646451e09cd.jpeg',
    'https://s1.1zoom.ru/big0/11/Volvo_XC90_2015_Metallic_513742_1280x853.jpg',
    'https://www.autozeitung.de/assets/field/image/volvo-ex90-2022-01.jpg',
    'https://volvocarfavorit.ru/upload/iblock/7f1/7f108d8aa3b5fdea6af8d5fd8287b173.jpg',
];

let pictures = document.createElement('div');
let zoom = document.createElement('img');

pictures.className = 'pictures';
zoom.className = 'zoom';

document.body.append(pictures);
document.body.append(zoom);

for(let i=0; i<images.length; i++){
    let smallImg = document.createElement('img');
    smallImg.src = images[i];
    pictures.append(smallImg);
    smallImg.addEventListener('click', function(){zoom.src = smallImg.src});
}

// !!! тут первый ввариант решения..... , почти всё получилось, только большие картинки не меняются, 
//      а появляются одна за другой в строку.....!!!
//          ПОДСКАЖИТЕ, ПОЖАЛУЙСТА В ЧЁМ ТУТ ОШИБКА???


// let div1 = document.createElement('div');
// document.body.append(div1);
// div1.classList.add('top')
// for(let i=0; i<images.length; i++){
//     let img = document.createElement('img');
//     img.src = images[i];
//     img.alt = 'PICTURE';
//     img.classList.add('small');
//     div1.append(img);
// }

// let div2 = document.createElement('div');
// document.body.append(div2);
// div2.classList.add('bottom');

// let bigImg = document.querySelectorAll('img');
// for(let i=0; i<bigImg.length; i++){
//    // bigImg[i].addEventListener('click', zoom);
//    bigImg[i].addEventListener('click', function(){bigImg.src = img.src});
// //}

// function zoom(){
//     bigImg[i].classList.toggle('active');
//     //let img1 = document.createElement('img');
//     let img1 = img.src;
//     img1.src = images[i];
//     img1.alt = 'PICTURE';
//      div2.append(img1);
    
// }
// }


