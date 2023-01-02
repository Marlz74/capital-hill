document.onscroll=()=>{
    document.querySelector('nav').classList.toggle('nav_toggle',window.scrollY>45)
}

document.querySelector('.nav_in .hamburger').onclick=()=>{
    document.querySelector('.nav_in .links').classList.toggle('nr')

}

const s=document.querySelectorAll('.s');

// window.addEventListener('scroll',checkbox)

// function checkbox(){
//     const trigger=window.innerHeight / 5 *4;
//     s.forEach(b=>{
//         const btop=b.getBoundingClientRect().top;
//         if(btop<trigger){
//             // console.log(b);
//             b.classList.remove('none');
//         }else{
//             b.classList.add('none');
//         }
//     })
// }
// checkbox()