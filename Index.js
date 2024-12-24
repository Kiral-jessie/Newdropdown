const hamburger=document.querySelector(".hamburger");
const closeMenu=document.querySelector(".closemenu");
const openMenu=document.querySelector(".openmenu");
const linkss=document.querySelector(".linkss");
openMenu.addEventListener("click", ()=>{
  linkss.classList.add("active");
  openMenu.style.display="none";
  closeMenu.style.display="block";
  
});
closeMenu.addEventListener("click", ()=>{
  linkss.classList.remove("active");
  openMenu.style.display="block";
closeMenu.style.display="none";
console.log("menu closed");
});