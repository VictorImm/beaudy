const radioOptions1 = document.querySelector('input[id="c1"]');
const radioOptions2 = document.querySelector('input[id="c2"]');
const radioOptions3 = document.querySelector('input[id="c3"]');
const radioOptions4 = document.querySelector('input[id="c4"]');

const contentDivs1 = document.querySelector('.detail-container .detail div[id="c1"]');
const contentDivs2 = document.querySelector('.detail-container .detail div[id="c2"]');
const contentDivs3 = document.querySelector('.detail-container .detail div[id="c3"]');
const contentDivs4 = document.querySelector('.detail-container .detail div[id="c4"]');

radioOptions1.addEventListener('click', function() {
    contentDivs1.classList.add('active')
    contentDivs2.classList.remove('active')
    contentDivs3.classList.remove('active')
    contentDivs4.classList.remove('active')
});
radioOptions2.addEventListener('click', function() {
    contentDivs1.classList.remove('active')
    contentDivs2.classList.add('active')
    contentDivs3.classList.remove('active')
    contentDivs4.classList.remove('active')
});
radioOptions3.addEventListener('click', function() {
    contentDivs1.classList.remove('active')
    contentDivs2.classList.remove('active')
    contentDivs3.classList.add('active')
    contentDivs4.classList.remove('active')
});
radioOptions4.addEventListener('click', function() {
    contentDivs1.classList.remove('active')
    contentDivs2.classList.remove('active')
    contentDivs3.classList.remove('active')
    contentDivs4.classList.add('active')
});