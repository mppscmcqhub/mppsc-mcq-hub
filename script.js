
const home=document.getElementById('home'),test=document.getElementById('test');
for(let u=1;u<=10;u++){
 let d=document.createElement('div');d.className='unit';
 d.innerHTML=`<h3>Unit ${u}</h3>`;
 let s=(u-1)*22+1,e=Math.min(u*22,220);
 for(let i=s;i<=e;i++){let b=document.createElement('button');b.className='btn';b.textContent='Test '+i;b.onclick=()=>openTest(i);d.appendChild(b);}
 home.appendChild(d);
}
function openTest(n){home.classList.add('hide');test.classList.remove('hide');document.getElementById('title').textContent='Test '+n;let q=document.getElementById('quiz');q.innerHTML='';for(let i=1;i<=20;i++){q.innerHTML+=`<div class=q><b>Q${i}. Test ${n} Question ${i}?</b><br>
<label><input type=radio name=q${i} value=A> A</label><br>
<label><input type=radio name=q${i} value=B> B</label><br>
<label><input type=radio name=q${i} value=C> C</label><br>
<label><input type=radio name=q${i} value=D> D</label></div>`;}document.getElementById('result').innerHTML='';}
function submitTest(){let score=0,r='';for(let i=1;i<=20;i++){let a=document.querySelector(`input[name=q${i}]:checked`);let ok='A';if(a&&a.value===ok)score++;r+=`<p class="${a&&a.value===ok?'correct':'wrong'}">Q${i}: सही उत्तर A — Example explanation.</p>`;}document.getElementById('result').innerHTML=`<h2>Score: ${score}/20</h2>`+r;}
function goHome(){test.classList.add('hide');home.classList.remove('hide');}
