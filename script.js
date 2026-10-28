const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// CUSTOMIZE: replace these placeholders with your real contact and profile links.
const portfolioConfig = {
  email: 'shajeehmuhammed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammed-shajeeh/'
};
const emailLink = document.querySelector('#email-link');
const linkedinLink = document.querySelector('#linkedin-link');

if (emailLink && portfolioConfig.email !== 'YOUR_EMAIL@example.com') {
  emailLink.href = `mailto:${portfolioConfig.email}`;
}
if (linkedinLink && !portfolioConfig.linkedin.includes('YOUR-LINKEDIN-USERNAME')) {
  linkedinLink.href = portfolioConfig.linkedin;
}
