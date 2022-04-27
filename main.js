const slidebar=document.querySelector('.sidebar')
const elements= document.querySelectorAll('.sidebar-item a')
const cookies = document.querySelector('.cookies')
const btnAccept=document.getElementById('accept-cook')


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


//onload
window.onload=()=>{
    setTimeout(() => {        
        cookies.style.display="flex"
        cookies.style.bottom=0
    }, 3000);
}


// click accept
btnAccept.addEventListener('click',()=>{
    cookies.style.display="none"
})