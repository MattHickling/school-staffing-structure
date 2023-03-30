$(document).ready(function() {
  let numClasses = 0;
  
  $('#add-classes').click(function() {
    numClasses = $('#num-classes').val();

    // Select all dropdowns on the page
const dropdowns = document.querySelectorAll('.my-dropdown');

// Add event listener to each dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('change', () => {
    // Get the selected option value
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    // Create a new element with the selected value
    const newElement = document.createElement('div');
    newElement.textContent = selectedOption;
    
    // Append the new element to the screen
    document.body.appendChild(newElement);
  });
});

    
    //---dropdown lists for each class
    for (let i = 1; i <= numClasses; i++) {
      $('.class-list').append(`
        <div class="class">
          <label for="class${i}">Class ${i}:</label>
          <select name="class${i}" id="class${i}">
            <!-- Dropdown list of teachers for Class ${i} -->
          </select>
        </div>
      `);
    }
    
    //----input boxes for each teacher
    for (let i = 1; i <= numClasses; i++) {
      $('.teacher-list').append(`
        <div class="teacher">
          <label for="teacher${i}">Teacher:</label>
          <input type="text" name="teacher${i}" id="teacher${i}">
        </div>
      `);
    }
  });
  
  // form submission
  $('form').submit(function(event) {
    event.preventDefault();

    // get form data and submit 
    let formData = $('form').serialize();
    $.ajax({
      url: '/process_form',
      type: 'POST',
      data: formData,
      success: function(data) {
        console.log('Form submitted successfully');
      },
      error: function() {
        console.log('Error submitting form');
      }
    });
  });
});
