const menuBtn=document.querySelector('.menu');
const navItem=document.querySelector('.nav__items');
const navLinks=document.querySelectorAll('.nav__items .nav__links');
 console.log(navLinks)
menuBtn.addEventListener('click',()=>{
  navItem.classList.toggle('show')
  menuBtn.classList.toggle('toggle')
});

navLinks.forEach(navLink=>{
  navLink.addEventListener('click',()=>{
    if(navLink.classList.contains('active')){
      navLink.classList.remove('active');
    }else{
      navLink.classList.add('active');
    }
  })
})