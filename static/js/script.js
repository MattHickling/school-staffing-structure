$(document).ready(function() {
  let numClasses = 0;

  $('#add-classes').click(function() {
    numClasses = $('#num-classes').val();

    //---dropdown lists for each class
    for (let i = 1; i <= numClasses; i++) {
      $('.class-list').append(`
        <div class="class">
          <label for="class${i}">Class ${i}:</label>
          <select name="class${i}" id="class${i}" class="my-dropdown">
            <option value="">-- Select a class --</option>
          </select>
        </div>
      `);

      // Populate dropdown with class names
      $.getJSON('/classes', function(data) {
        const dropdown = $(`#class${i}`);

        // Add options to dropdown
        data.class_names.forEach(function(name) {
          dropdown.append(`<option value="${name}">${name}</option>`);
        });

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
      });
    }
  });
});
