const toggler = document.querySelector('nav img.toggler');
const sidebar = document.querySelector('aside.links');
const close = document.querySelector('img.close');


toggler.addEventListener('click',()=>{
    sidebar.classList.toggle('show');
});

close.addEventListener('click',()=>{
    sidebar.classList.remove('show');
});
