const text=document.querySelector('input');
const field=document.querySelector('#duplicateField');
text.addEventListener('input',
(event)=>{
    field.textContent=text.value;
});
const but=document.querySelector('button');
but.addEventListener('click',
(event)=>{
    console.log(text.value);
    text.value="";
    field.textContent="";
    event.preventDefault();
})