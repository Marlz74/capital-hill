async function getUserIp(){
    const request = await fetch("https://ipinfo.io/json?token=a94b668c78fc51");
    const jsonResponse = await request.json();
    return jsonResponse.country.toLowerCase()

}

function c(){
    let r
    getUserIp().catch((e)=>{r= 'false';console.log(r)})
    
}

function PassText(){
    let p_element=document.querySelectorAll('.pwd');
    p_element.forEach(l=>{
        if(l.dataset.set=='p'){
            l.type='text';
            l.dataset.set='';
        }else{
            l.dataset.set='p'
            l.type='password';
        }
    })

}

async function getCountries(){
    let country=[];    
    let getCountry= await fetch('js/country.json');
    let data=await getCountry.json();
    data.country.forEach(e => {
        country.push(e)
    });
    return country;
}

function insertCountries(c){
    let i;
    c.forEach(e=>{ 
      i+=`<div class="opt ucoun" data-set="">
                <img src="${e.img}" alt="" style="width: 16px; height: 16px;"> <span>${e.Name} (+${e.dailcode})</span>
            </div>` 
    });
    i=i.replace('undefined','');
    drop_inner.innerHTML=i;
}