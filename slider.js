const left=document.querySelector('#left');
const right=document.querySelector('#right');
const slider=document.querySelector('.slider');
const image=document.querySelectorAll('.image');

let slideNumber=1;
const length=image.length;

const bottom=document.querySelector('.bottom');
for(let i=0;i<length;i++){
  const div=document.createElement('div');
  div.className='button';
  bottom.appendChild(div);
};

const buttons =document.querySelectorAll('.button');
buttons[0].style.backgroundColor='white';

const resetBg=()=>{
  buttons.forEach((button)=>{
    button.style.backgroundColor='transparent';
    button.addEventListener('mouseover',stopSlideShow);
    button.addEventListener('mouseout',startSlideShow);
  })
};
buttons.forEach((button,i)=>{
  button.addEventListener('click',()=>{
    resetBg();
    slider.style.transform=`translateX(-${i*100}%)`;
    slideNumber=i+1;
    button.style.backgroundColor='white';
  })
});

const changeColor=()=>{
  resetBg();
  buttons[slideNumber-1].style.backgroundColor='white';
};







const nextSlide=()=>{
  slider.style.transform=`translateX(-${slideNumber*100}%)`;
  slideNumber++;
};
const prevSlide=()=>{
  slider.style.transform=`translateX(-${(slideNumber-2)*100}%)`;
  slideNumber--;
};
const getFirstSlide=()=>{
  slider.style.transform=`translateX(0%)`;
  slideNumber=1;
};
const getLastSlide=()=>{
  slider.style.transform=`translateX(-${(length-1)*100}%)`;
  slideNumber=length;
};
right.addEventListener('click',()=>{
  slideNumber<length?nextSlide():getFirstSlide();
  changeColor();
});
left.addEventListener('click',()=>{
  slideNumber>1?prevSlide():getLastSlide();
  changeColor();
});

let slideInterval;

const startSlideShow=()=>{
  slideInterval=setInterval(()=>{
    slideNumber<length?nextSlide():getFirstSlide();
    changeColor();
  },3000);
};

const stopSlideShow=()=>{
  clearInterval(slideInterval);
};

startSlideShow();
slider.addEventListener('mouseover',stopSlideShow);
slider.addEventListener('mouseout',startSlideShow);