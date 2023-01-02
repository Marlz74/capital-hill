const drop_wrap=document.querySelector('.drop'),
drop_inner =document.querySelector('.drop_inner'),
drop_active =document.querySelector('.drop_active'),
ji =document.querySelector('.ji'),
ji_img =document.querySelector('.ji img'),
ji_input=document.querySelector('.de input');

document.querySelector('body').addEventListener('click',(e)=>{
    e.target.classList.contains('fa-eye-slash') || e.target.parentElement.classList.contains('fa-eye-slash')?PassText():'';
},false)



document.addEventListener('DOMContentLoaded',()=>{
    getCountries().then(countries=>{
        insertCountries(countries);
        getUserIp().then(u=>{
            let user_c=countries.find(cn=>cn.short==u);
            if(user_c!=undefined){
                let a=`<div class="opt">
                <img src="${user_c.img}" alt="" style="width: 16px; height: 16px;"> <span>${user_c.Name} (+${user_c.dailcode})</span>
                </div>`;
                drop_active.innerHTML=a;
                ji_img.src=user_c.img;
                ji_input.value=`+${user_c.dailcode}-`;

            }

        })
        document.querySelector('.ji').addEventListener('click',()=>{
            drop_wrap.classList.toggle('none')
            let opt = document.querySelectorAll('.ucoun');
            opt.forEach(sel=>{
                sel.onclick=()=>{
                    sel.classList.add('uactive');
                    drop_active.innerHTML='';
                    let node=sel.cloneNode(true);
                    drop_active.append(node);
                    let t=document.querySelector('.opt.uactive span').innerHTML;
                    t=t.split('+')[1].replace(')','');
                    ji_img.src=document.querySelector('.opt.uactive img').src;
                    ji_input.value=`+${t}-`;
                    ji_input.focus();

                }  
                
            })
        },false)
        
    })


    
},false)

