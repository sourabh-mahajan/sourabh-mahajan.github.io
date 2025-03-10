// Smooth Scrolling for Navigation
document.querySelector('.cta-button').addEventListener('click', function (e) {
  e.preventDefault();
  
  // Scroll to the contact section smoothly
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Optional: Form handling (if you add a contact form in the future)
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data (you can process it further, e.g., send via email or API)
  const form = event.target;
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  console.log('Form Submitted:', { name, email, message });

  // Clear the form fields after submission
  form.reset();

  // Show a success message (can be styled later)
  alert('Thank you for reaching out! I will get back to you soon.');
}

// Uncomment and modify the form submission handling if you add a contact form
// document.querySelector('#contactForm').addEventListener('submit', handleFormSubmit);