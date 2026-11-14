const t=document.getElementById('t'),n=document.getElementById('nav');
t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
