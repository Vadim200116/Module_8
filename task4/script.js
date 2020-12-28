const text=document.querySelector('a');
text.addEventListener('click',
(event)=>{
const newtext=prompt('Введите текст');
text.textContent=newtext;
event.preventDefault();
});

