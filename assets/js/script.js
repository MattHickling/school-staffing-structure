$(document).ready(function() {
    
    let numClasses = 0;

    // get the number of classes 
    $.ajax({
        url: '/get_num_classes',
        type: 'GET',
        success: function(data) {
            numClasses = parseInt(data);
            
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
        },
        error: function() {
            console.log('Error getting number of classes');
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
