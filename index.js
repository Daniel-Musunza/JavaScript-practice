  function handleButtonClick() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    sendRandomNumber(randomNumber);
  }
  
  document.getElementById("addButton").onclick = handleButtonClick;
    // Add a random number
    function sendRandomNumber(randomNumber) {
        // Fetch the existing data from the server
        fetch('http://localhost:3000/data.json')
          .then(response => response.json())
          .then(data => {
            // Assuming the data is an array, concatenate the new number to it
            data.push(randomNumber);
      
            // Send the updated data to the server
            fetch('http://localhost:3000/addData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              .then(response => {
                if (response.ok) {
                  console.log('Numbers sent to data.json successfully!');
                } else {
                  console.log('Failed to send numbers to data.json');
                }
              })
              .catch(error => {
                console.log('An error occurred:', error);
              });
          })
          .catch(error => {
            console.log('An error occurred:', error);
          });
      }
      
  
  // Fetch the data from the external source
  fetch('http://localhost:3000/data.json')
    .then(response => response.json())
    .then(data => {
      var num = data; // Assuming the data is an array of numbers
      addNumbers(num);
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
  
    function addNumbers(num) {
        console.log(add(num));
        var numbersDiv = document.getElementById("numbers");
        numbersDiv.textContent = "Numbers: " + num.join(", ");
      
        // Calculate and display the total sum
        var totalDiv = document.getElementById("total");
        var sum = add(num);
        totalDiv.textContent = "Total: " + sum;
      }
      
      function add(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
      }
      
    
      