
// JavaScript to control the speed of the carousel
/* document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.getElementById('carousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000 // Interval in milliseconds (3000ms = 3 seconds)
    });
});
 */

/* document.querySelector('.btn_submit').addEventListener('click', function(e) {
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
}); */


/* document.querySelector('.btn_submit').addEventListener('click', function(e) {
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
    // Optionally, you can highlight the empty fields
    if (!firstName) document.querySelector('input[id="fname"]').focus();
    else if (!email) document.querySelector('input[id="email"]').focus();
    else if (!phone) document.querySelector('input[id="phone"]').focus();
    else document.querySelector('textarea[id="message"]').focus();
  } else {
    // If all fields are filled, submit the form or perform an action
    alert('Thank you for submitting your message!');
  }
}); */

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = {
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('Lname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch('http://localhost:3000/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('Form submitted successfully!');

       // Clear the form fields
       document.getElementById('contactForm').reset();

    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});  

async function handleSubmit() {
  // Get form field values and trim them
  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email2').value.trim();
  const phone = document.getElementById('phonenumber').value.trim();
  const message = document.getElementById('text').value.trim();

  // Check if any of the fields are empty
  if (!firstName || !email || !phone || !message) {
    alert('Please fill out the mandatory fields.');

    // Optionally, focus on the first empty field
    if (!firstName) {
      document.getElementById('firstname').focus();
    } else if (!email) {
      document.getElementById('email2').focus();
    } else if (!phone) {
      document.getElementById('phonenumber').focus();
    } else {
      document.getElementById('text').focus();
    }
  } else {
    // All fields are filled, proceed with form submission
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch('http://localhost:3000/submit-getintouch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');

        // Clear the form fields
        document.getElementById('getInTouch').reset();
        
        const modalElement = document.getElementById('get');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred: ' + error.message);
    }
  }
}

