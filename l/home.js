// va is video arrray 
const va=['v/pid_1.mp4','v/pid_2.mp4','v/pid_3.mp4','v/pid_4.mp4','v/pid_5.mp4','v/pid_9.mp4'];
// var l=0;
const vid=document.querySelector('.bgin video');
vid.play();
// vs is a function that changes the video source file of the nav background
function vs(){
    let i=Math.floor(Math.random()*va.length);
    vid.attributes[0].nodeValue=va[i];
}
setInterval(vs,8000);

// q is question headigns;
const q =document.querySelectorAll('.question h2');
q.forEach(e=>{
    e.onclick=()=>{
        e.nextElementSibling.classList.toggle('v');
    }
})

document.querySelector('.qbutton').addEventListener('click',()=>{location.assign('faq.html')},false)
