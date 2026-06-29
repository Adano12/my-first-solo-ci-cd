
// This file tests if the backend is working correctly

const http = require('http');

// Function to test the /api endpoint
function testAPI() {
  console.log('Testing /api endpoint...');
  
  http.get('http://localhost:3000/api', (response) => {
    let data = '';
    
    // Collect all the data pieces
    response.on('data', (chunk) => {
      data = data + chunk;
    });
    
    // When all data is received
    response.on('end', () => {
      // Convert the data from text to an object
      const result = JSON.parse(data);
      
      // Check if the status is "working"
      if (result.status === 'working') {
        console.log('TEST PASSED! Backend is working!');
        process.exit(0);  // Exit with success code
      } else {
        console.log('TEST FAILED! Status is not "working"');
        process.exit(1);  // Exit with failure code
      }
    });
  }).on('error', (error) => {
    // If we can't connect at all
    console.log('TEST FAILED! Cannot connect to backend');
    console.log('Error:', error.message);
    process.exit(1);
  });
}

// Run the test
testAPI();

