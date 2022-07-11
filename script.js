const Matem=[
    {
        savol:'2+2=?',
        a:'4',
        b:'8',
        c:'12',
        d:'22',
        javob:'a',
    },
    {
        savol:'4+4=?',
        a:'4',
        b:'8',
        c:'12',
        d:'22',
        javob:'b',
    },
    {
        savol:'12+2=?',
        a:'4',
        b:'8',
        c:'12',
        d:'16',
        javob:'b',
    },
    {
        savol:'22+2=?',
        a:'24',
        b:'8',
        c:'12',
        d:'22',
        javob:'a',
    },
]
let a=document.getElementById('a_text');
let b=document.getElementById('b_text');
let c=document.getElementById('c_text');
let d=document.getElementById('d_text');
let savol=document.getElementById('savol');
let raqam=document.getElementById('soni');
let radio=document.querySelectorAll('.check');
let cont=document.querySelector('.quiz-container')
let hisobot=[];
let ball=0;
let sanoq=0;
let sekund=60;
Testboshlash()
function yangila(){
    let slim=`
        <span > N <span id="soni">1</span></span>
        <span id="vaqt1"></span>
        <h2 id="savol">Test savol</h2>
        <ul>
            <li><input type="radio" id="a" class="check" name="a"> <label for="a" id="a_text">Salom</label></li>
            <li><input type="radio" id="b" class="check" name="a"> <label for="b" id="b_text">Salom</label></li>
            <li><input type="radio" id="c" class="check" name="a"> <label for="c" id="d_text">Salom</label></li>
            <li><input type="radio" id="d" class="check" name="a"> <label for="d" id="c_text">Salom</label></li>
        </ul>
        <button id="natija" onclick="keyingi()">Javob</button>
    `
    cont.innerHTML=slim
    Testboshlash()
}
function Testboshlash(){
   
   tozala()
   const fan=Matem[sanoq];
   savol.innerText=fan.savol;
   a.innerText=fan.a;
   b.innerText=fan.b;
   c.innerText=fan.c;
   d.innerText=fan.d;
   sekund=60;
   raqam.innerText=sanoq+1;
  
  
   t=setInterval(vaqt, 1000); 


}

function vaqt(){
    document.getElementById('vaqt1').innerText=sekund;
    sekund--
    if(sekund<1){
        if(sanoq<Matem.length){
            sanoq++
            sekund=60;
            Testboshlash()
        }
        else{
            nh=""
            for (const bg of hisobot){
                nh+=`<li>${bg}</li>`
            }
            clearTimeout(t);
            sanoq=0
            cont.innerHTML=`<h1>siz testni tugatdingiz siz ${ball} bal oldingiz </h1> ${nh} <button onclick=yangila()>Boshlash</button>`
            
            clearTimeout(t);
        }
    }
}
function keyingi(){
    let nat=Tekshir();
    let xnat=''
    if(nat){
        let x=0;
        if(nat===Matem[sanoq].javob){
            ball++
            x++
            xnat+=`${sanoq+1} savolga to'gri javob berdiz `
        }
        else{
            xnat+=`${sanoq+1} savolga xato javob berdiz `
        }
     
        sanoq++
       

    }
    hisobot.push(xnat)
    if(sanoq<Matem.length){
        Testboshlash()
    }
    else{
        let nh=""
       
        for (const bg of hisobot){
            nh+=`<li>${bg}</li>`
        }
        sanoq=0
        cont.innerHTML=`<h1>siz testni tugatdingiz siz ${ball} bal oldingiz </h1> ${nh} <button onclick=Testboshlash()>Boshlash</button>`
    
        clearTimeout(t);
    }
   
    clearTimeout(t);

}

function tozala(){
    for(const olma of radio){     
        olma.checked=false;
        if(olma.checked){
            console.log(olma.id)

        }
    }
}
function Tekshir(){
    let bjavob;
    
    radio.forEach(njavob=>{
        if(njavob.checked){
            bjavob=njavob.id
            console.log(bjavob)

        }
   
    })
    return bjavob
}
