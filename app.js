// Tabs
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
// Mobile nav
const ham=document.getElementById('hamburger');
const links=document.getElementById('navLinks');
ham.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
// Reveal on scroll
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='none'; } });
},{threshold:.08});
document.querySelectorAll('.card,.feat,.step,.res').forEach(el=>{
  el.style.opacity=0; el.style.transform='translateY(14px)';
  el.style.transition='opacity .5s ease, transform .5s ease';
  io.observe(el);
});
