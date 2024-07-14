
// plan hover effect
const plans = document.querySelectorAll('.plan');
const mainColor = "#19c8fa"

plans.forEach(plan => {
  const foot = plan.querySelector('.foot');
  const headSpan = plan.querySelector('.head span');


  foot.addEventListener('mouseover', () => {
    headSpan.style.color = mainColor;
    plan.style.border = `1px solid ${mainColor}` 
  });

  foot.addEventListener('mouseout', () => {
    headSpan.style.color = ''; // Reset color on mouseout
    plan.style.border = "none" 
  });
});