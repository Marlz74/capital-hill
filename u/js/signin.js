document.querySelector('body').addEventListener('click',(e)=>{
    e.target.classList.contains('fa-eye-slash') || e.target.parentElement.classList.contains('fa-eye-slash')?PassText():'';
},false)

document.querySelector('form').onsubmit=(e)=>{
    e.preventDefault();
    location.assign('p/index.html')
}