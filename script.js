const prev = document.querySelector('.services .pre-btn');
const next = document.querySelector('.services .nxt-btn');
const slider = document.querySelector('.services .slider');

const nav1 = document.querySelector('.services .online');
const nav2 = document.querySelector('.services .clinic');
const nav3 = document.querySelector('.services .test');

let count = 0;
function navChange(c){
    if(c == 0){
        nav1.classList.add('active');
        nav2.classList.remove('active');
        nav3.classList.remove('active');
    }
    else if(c == 840){
        nav1.classList.remove('active');
        nav2.classList.add('active');
        nav3.classList.remove('active');
    }
    else if(c == 1680){
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
    }
}

prev.addEventListener('click', function() {
    slider.scrollLeft -= 840;
    
    if(count != 0){
        count-=840
    }
    navChange(count);
    
}, false);

next.addEventListener('click', function() {
    slider.scrollLeft += 840;

    if(count != 1680){
        count+=840
    }
    navChange(count);

});