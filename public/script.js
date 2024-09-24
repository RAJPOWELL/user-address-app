document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission reload

    // Collect form data
    const name = document.getElementById('name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postalCode').value;

    // Data to be sent to the backend
    const userData = {
        name,
        street,
        city,
        state,
        postalCode
    };

    try {
        // Send a POST request to the backend
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();
        if (response.status === 201) {
            document.getElementById('message').textContent = 'User and Address Registered Successfully!';
            document.getElementById('message').style.color = '#4CAF50'; // Green color for success
        } else {
            document.getElementById('message').textContent = 'Error: ' + result.message;
        }

    } catch (error) {
        document.getElementById('message').textContent = 'Error: Could not submit the form';
    }

    // Reset the form
    document.getElementById('userForm').reset();
});
