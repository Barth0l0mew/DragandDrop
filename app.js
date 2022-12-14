const item=document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')
for (const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)
}
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)
function dragover (event){
    event.preventDefault();
}
function dragstart(event){
    
    event.target.classList.add('hold')

}
function dragend(event){
    event.target.classList.remove('hold')


}
console.log (item)