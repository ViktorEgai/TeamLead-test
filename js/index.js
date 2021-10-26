'use strict'
const swiper = new Swiper('.review__swiper', {
  speed: 400,
  loop: true,
  navigation: {
    nextEl: '.review__button--next',
    prevEl: '.review__button--prev',
  },
});

const scrollToForm = () => {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if(target.closest('.order-btn')) {
      const id = target.getAttribute('href').substr(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    } else {
      return
    }
  })
}
scrollToForm();


const countTimer = (mins) => {
  const minBlock = document.getElementById('min'),
    secBlock = document.getElementById('sec');
 let getSecsFromMin = mins * 60;
 const timer = setInterval(() => {
    --getSecsFromMin; 
    let seconds = getSecsFromMin%60, 
       minutes = getSecsFromMin/60; 
    
    if (getSecsFromMin <= 0) {        
        clearInterval(timer);
        minBlock.textContent = '00';
        secBlock.textContent = '00';
    } else {
      if(seconds < 10) seconds = `0${seconds}`;
      if(minutes < 10) minutes = `0${minutes}`;
      minBlock.textContent = Math.trunc(minutes);
      secBlock.textContent = seconds;
    }
}, 1000)
};
countTimer(30);

const showInputTips = () => {
  const inputs = document.querySelectorAll('.form__input');
  inputs.forEach(item => {
    item.addEventListener('focus', e=> {
      e.preventDefault()
      item.labels[0].style.display = 'block';
    });
    item.addEventListener('blur', ()=> {
      item.labels[0].style.display = 'none';
    });
  })
};
showInputTips();

const onlyNum = () => {
  const phoneInput = document.getElementById('phone');
  
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^\d]/g,'');
  })
};
onlyNum();