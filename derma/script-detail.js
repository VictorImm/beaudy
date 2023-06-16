const radio1 = document.querySelectorAll('.btn-menu input[id^="chat"]');
const radio2 = document.querySelectorAll('.btn-menu input[id^="vc"]');

const btn1 = document.querySelectorAll('.btn-menu .btn.c');
const btn2 = document.querySelectorAll('.btn-menu .btn.v');

const biaya1 = document.querySelectorAll('.biaya-konsul');

radio1.forEach((r, idx) => {  
    r.addEventListener('click', function() {
        btn1[idx].classList.add('active')
        btn2[idx].classList.remove('active')
        
        if (idx == 3) {
            biaya1[idx].innerHTML = "Rp 80.000"
        }
        else {
            biaya1[idx].innerHTML = "Rp 50.000"
        }
        biaya1[idx].style.color = "green"
    });
    radio2[idx].addEventListener('click', function() {
        btn1[idx].classList.remove('active')
        btn2[idx].classList.add('active')

        biaya1[idx].innerHTML = "Rp 100.000"
        biaya1[idx].style.color = "green"
    });

});

