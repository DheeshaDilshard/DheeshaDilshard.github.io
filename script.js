const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='82px';links.style.left='0';links.style.right='0';links.style.background='#f5f1ed';links.style.padding='25px 7vw';links.style.flexDirection='column';links.style.gap='20px';});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)links.style.display='none'}));
