const slidebar=document.querySelector('.sidebar')
const elements= document.querySelectorAll('.sidebar-item a')
console.log(elements)
const btns=document.querySelectorAll('.mode');
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        getComputedStyle(btn)
        console.log(getComputedStyle(btn).background);
        
        if(e.target.getAttribute('name')=='white') {
            slidebar.style.color='green';
            elements.forEach(el=>{
                el.style.color='green'
            })
        }
        slidebar.style.background=getComputedStyle(btn).background

    })
})
