const menuBtn=document.querySelector('.menu');
const navItem=document.querySelector('.nav__items');
const navLinks=document.querySelectorAll('.nav__items .nav__links');


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

     
      const experience=document.querySelector('.experience')
      const contact=document.querySelector('.contact__section');
      experience.addEventListener("click",()=>[
      contact.classList.toggle('move')
      ])
   
    const aboutLists=document.querySelectorAll('.about__list');
    aboutLists.forEach(aboutList=>{
      const dropdown=aboutList.querySelector('.dropdown');
      const head =aboutList.querySelector('.about__list p');
      console.log(head)
      aboutList.addEventListener('click',()=>{
       
      aboutLists.forEach(list=>{
       
       const  listDropdown=list.querySelector(' .dropdown');
       if( listDropdown!==dropdown){
        listDropdown.classList.remove('active');
        // contact.style.paddingBlock="50rem 0"
       } 
       });
      head.classList.toggle('change')
      dropdown.classList.toggle('active')
   
     })
 });
