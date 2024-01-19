async function submitForm() {
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var email = document.getElementById('email').value;
    var specialization = document.getElementById('specialization').value;
    var note = document.getElementById('note').value;

     // Check if any field is empty
     if (!name || !company || !email || !specialization) {
        alert('Please fill the Mandatory fields.');
        return;
    }

    // Create a data object
    var data = {
        name: name,
        company: company,
        email: email,
        specialization: specialization,
        note: note
    };

    // Send data to the server using fetch
    const response = await fetch('/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        document.getElementById('name').value = '';
        document.getElementById('company').value = '';
        document.getElementById('email').value = '';
        document.getElementById('specialization').value = '';
        document.getElementById('note').value = '';
        // Show success message
        document.getElementById('message').style.display = 'block';

         // Optionally, you can hide the message after a certain duration
    setTimeout(function() {
        document.getElementById('message').style.display = 'none';
    }, 3000); // Hides the message after 3 seconds
    } else {
        console.error('Failed to save data on the server.');
    }
}
