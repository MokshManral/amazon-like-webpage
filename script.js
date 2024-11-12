const bar=document.getElementById('clickBar');
const slideBarOpen=document.getElementById('slideBar');
const mainHead=document.getElementById('mainHead');
const xmark=document.getElementById('xmark');

slideBarOpen.style.display='none';
bar.addEventListener('click',()=>{
  slideBarOpen.style.display='block';
})

xmark.addEventListener('click',()=>{
  slideBarOpen.style.display='none';
});