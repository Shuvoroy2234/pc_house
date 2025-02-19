const productContainer = [...document.querySelectorAll(',product-conainer')];

const nextBtn = [...document.querySelectorAll('.next-btn')];

const pretn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
    let conainerDimensions = item.getBoundingClientRect();
    let conainerWidth = conainerDimensions.width;

    nextBtn[i].addEventListener('click',() => {
        item.scrollLeft += conainerWidth;
     })
    preBtn[i].addEventListener('click',() => { 
        item.scrollLeft -=conainerWidth;
     })
})