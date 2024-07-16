
// Toggle menu
const toggleMenu = document.querySelector(".toggle-menu")
const navMenu = document.querySelector('.nav-menu')

toggleMenu.addEventListener("click", () =>{
  navMenu.classList.toggle("show")
})

// Toggle active Class on Nav Item Click
const navLinks = document.querySelectorAll('.nav-link');

function handleNavItemClick(event) {
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
  navMenu.classList.toggle("show")
}

navLinks.forEach(link => link.addEventListener('click', handleNavItemClick));


// plan hover effect
const plans = document.querySelectorAll('.plan');
const mainColor = "#19c8fa"

plans.forEach(plan => {
  const foot = plan.querySelector('.foot');
  const headSpan = plan.querySelector('.head span');
  const headSub = plan.querySelector('.head sub');
  const headSup = plan.querySelector('.head sup');


  foot.addEventListener('mouseover', () => {
    headSpan.style.color = mainColor;
    headSub.style.color = mainColor
    headSup.style.color = mainColor
    plan.style.border = `1px solid ${mainColor}` 
  });

  // Reset color on mouseout
  foot.addEventListener('mouseout', () => {
    headSpan.style.color = '';
    headSub.style.color = "";
    headSup.style.color = "";
    plan.style.border = "none"; 
  });
});