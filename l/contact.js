fname =document.querySelector('.fname'),
lname =document.querySelector('.lname'),
mail =document.querySelector('.umail'),
q_req =document.querySelector('.contact_form form textarea'),
econ =document.querySelector('.econ'),
q_res=document.querySelector('.q_submit')
;


var loader=document.querySelector('.submit img'),
submit=document.querySelector('.submit input');
function r(){
    let pattern=/^[a-zA-Z0-9]/g
    let p=/[a-zA-Z]$/g
    let m =document.querySelector('.umail').value.toLowerCase();
    let a=m.indexOf('@');
    return pattern.test(m) && m.indexOf('@')&& p.test(m) && m.slice(a).indexOf('.')!='-1'? true:false;
        
    
}
document.querySelector('form').onsubmit=(e)=>{
    e.preventDefault();
    if(r()){  
        mail.classList.remove('r');
        let time=['5000','3000','4000','2000'];
        let t=Math.round(Math.random()*time.length);
        submit.value='';
        loader.classList.remove('none');
        setTimeout(c,time[t]);
    }else{
        mail.classList.add('r')
        mail.focus()
    }


    
    
    
}
// question()
function question(){
    function toggle_res(){
        econ.classList.toggle('visi')
        econ.classList.toggle('error_con')
    }
    submit.value='Submit';
    loader.classList.add('none');
    toggle_res();
    
    document.querySelector('body').onclick=(e)=>{
        e.target.dataset.id=='q'?toggle_res():'';
    }
}


// reset input field 
// function c is set to call restore function and reset function
function c(){
    
    restore_input(fname,lname,mail,q_req)
    question()
}
function restore_input(fn,ln,m,q){
    let f=[fn,ln,m,q]
    f.forEach(v=>v.value='')
    fn.placeholder="First Name";
    ln.placeholder="Last Name";
    m.placeholder="Email";
    q.placeholder="Enter your message";
    
}
