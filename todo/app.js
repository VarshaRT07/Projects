const addForm = document.querySelector('.add');
const todoadd = document.querySelector('.todos');
const searchList =document.querySelector('.search input')



const generateTemplate = todo => {
    const html= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    ` ;
    todoadd.innerHTML+= html;
}

addForm.addEventListener('submit', e=> {
    e.preventDefault();
    const todo= addForm.add.value.trim();
    if(todo.length){

        generateTemplate(todo);
        addForm.reset();
    }

    
})

todoadd.addEventListener('click',e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTools= (term) =>{
    Array.from(todoadd.children)
     .filter((todoo) => !todoo.textContent.includes(term))
     .forEach((todoo) => todoo.classList.add('filtered'));

     Array.from(todoadd.children)
     .filter((todoo) => todoo.textContent.includes(term))
     .forEach((todoo) => todoo.classList.remove('filtered'));
 

}

searchList.addEventListener('keyup',()=>{
    const term =searchList.value.trim();
    filterTools(term);

})