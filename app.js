
const render=()=>{
    const lista=document.querySelector('#lista')
    
   lista.innerHTML=""
    for(i=0;i<bd.length;i++){

        lista.innerHTML+='<li>'+bd[i]+'</li>'

    }

    const elemntos= document.querySelectorAll('#lista li')
    console.log(elemntos)
    elemntos.forEach((elemento,i)=>{
        console.log(elemento,i)
elemento.addEventListener('click',()=>{

elemento.parentNode.removeChild(elemento)
bd.splice(i,1)

})
    })
    
};
const actualizar=()=>{
    const guardar=JSON.stringify(bd)
    localStorage.setItem('bd',guardar)
}


const bd=JSON.parse(localStorage.getItem('bd'))||[]
window.onload=()=>{
    render()
    const form=document.querySelector('#formulario')
    console.log(form)
   form.onsubmit=(e)=>{
    e.preventDefault();
    const texto=document.querySelector('#texto1')
    const response=texto.value;
    console.log(response)
    bd.push(response)

    console.log(bd)
    actualizar(bd)
    render()
  
    
}}

