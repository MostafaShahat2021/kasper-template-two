
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