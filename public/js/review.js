
const submitButton = document.querySelector("#submit-review");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitReview();
})

function getFoodList () {
    let dropdown = document.getElementById('foodSelect');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Select Food';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = '/api/food';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].food_name;
      	  option.value = data[i].id;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
    }


let submitReview = () => {
    let food_id
    
    const review_description = document.querySelector('#review_description').value

    const review_name = document.querySelector('#review_name').value

    const data = { food_id: food_id, review_description: review_description, review_name: review_name };
    
  if (document.querySelector('#foodSelect').value === "Select Food") {
    window.alert("Please select a food")
  } else {
    food_id = document.querySelector('#foodSelect').value

    fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}



getFoodList()