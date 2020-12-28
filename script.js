document.querySelector('body').addEventListener('click', 
  (event) => {
    alert('Событие body');
})
document.querySelector('#parent').addEventListener('click', 
  (event) => {
    alert('Событие родителя');
})
document.querySelector('#child').addEventListener('click', 
  (event) => {
    alert('Событие потомка');
})