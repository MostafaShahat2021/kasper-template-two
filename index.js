// Toggle menu
const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav-menu');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Toggle active Class on Nav Item Click with (Event Delegation)
navMenu.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('nav-link')) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
    target.classList.add('active');
  }
});

// plan hover effect
const plans = document.querySelectorAll('.plan');
const mainColor = '#19c8fa';

plans.forEach((plan) => {
  const foot = plan.querySelector('.foot');
  const headSpan = plan.querySelector('.head span');
  const headSub = plan.querySelector('.head sub');
  const headSup = plan.querySelector('.head sup');

  foot.addEventListener('mouseover', () => {
    headSpan.style.color = mainColor;
    headSub.style.color = mainColor;
    headSup.style.color = mainColor;
    plan.style.border = `1px solid ${mainColor}`;
  });

  // Reset color on mouseout
  foot.addEventListener('mouseout', () => {
    headSpan.style.color = '';
    headSub.style.color = '';
    headSup.style.color = '';
    plan.style.border = 'none';
  });
});

// Scroll to top btn
const scrollToTopBtn = document.getElementById('scrollToTop');

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

scrollToTopBtn.addEventListener('click', scrollToTop);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  window.scrollY > 200
    ? (scrollToTopBtn.style.display = 'block')
    : (scrollToTopBtn.style.display = 'none');
});
