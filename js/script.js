
// JavaScript to control the speed of the carousel
document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.getElementById('carousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000 // Interval in milliseconds (3000ms = 3 seconds)
    });
});


document.querySelector('.btn_submit').addEventListener('click', function(e) {
  // Prevent the form from submitting initially
  e.preventDefault();

  // Get all form fields
  const firstName = document.querySelector('input[name="name"]').value.trim();
  const lastName = document.querySelector('input[name="lastname"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const phone = document.querySelector('input[name="phonenumber"]').value.trim();
  const message = document.querySelector('textarea[name="text"]').value.trim();

  // Check if any of the fields is empty
  if (!firstName || !lastName || !email || !phone || !message) {
    alert('Please fill out all fields.');
  } else {
    // If all fields are filled, submit the form or perform an action
    alert('Thank you for submitting your message!');

    // Optionally, you can submit the form using AJAX or just a normal form submit
    // For example, if using normal submit:
    // document.querySelector('.form').submit();
    // Close the modal using Bootstrap's modal method
    const modalElement = document.getElementById('get'); // Get the modal by ID
    const modalInstance = bootstrap.Modal.getInstance(modalElement); // Get the Bootstrap modal instance
    modalInstance.hide(); // Hide the modal
  }
});

document.querySelector('.btn_submit').addEventListener('click', function(e) {
  // Prevent the form from submitting initially
  e.preventDefault();

  // Get all form fields
  const firstName = document.querySelector('input[id="fname"]').value.trim();
  const email = document.querySelector('input[id="email"]').value.trim();
  const phone = document.querySelector('input[id="phone"]').value.trim();
  const message = document.querySelector('textarea[id="message"]').value.trim();

  // Check if any of the fields is empty
  if (!firstName || !email || !phone || !message) {
    alert('Please fill out the mandatory fields.');
  } else {
    // If all fields are filled, submit the form or perform an action
    alert('Thank you for submitting your message!');
  }
});
