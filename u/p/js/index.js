const d_links=document.querySelectorAll('.links ul li p');
d_links.forEach(l=>{
    l.onclick=()=>{
        l.children[2].classList.toggle('arrow')
        l.parentElement.children[1].dataset.set=='vt'?link_toggle(l,'vt'):'';
        l.parentElement.children[1].dataset.set=='vs'?link_toggle(l,'vs'):'';
        
    }
})

function link_toggle(l,e){
    l.parentElement.children[1].classList.toggle(e);
    
}
document.getElementById('bars').addEventListener('click',()=>{
    document.querySelector('.v_nav').classList.toggle('v_nav_toggle')
    document.querySelector('.title').classList.toggle('wrap_main_toggle')
    if(window.innerWidth<614){
        document.querySelector('.user_details').classList.toggle('user_hide')
    }
    if(window.innerWidth<441){
        document.querySelector('#dash').classList.toggle('user_hide')
    }
    if(document.querySelector('#bars').dataset.set=='s'){
        set_toggle('j')
    }

    if(window.innerWidth<285){
        if(document.querySelector('#bars').dataset.set!='s'){
            set_toggle()
        }
    }

},false)
function set_toggle(e){
    if(e==undefined){
        document.querySelector('#bars').classList.add('fa-bars_ab')
        document.querySelector('#bars').dataset.set='s'
    }else{
        document.querySelector('#bars').classList.remove('fa-bars_ab')
        document.querySelector('#bars').dataset.set=''
    }
}