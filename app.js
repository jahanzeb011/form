const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.port || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/save-data', (req, res) => {
    const data = req.body;

    // Save data to a text file (you can modify this logic as needed)
    fs.appendFile('userdata.txt', `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nSpecialization: ${data.specialization}\nNote: ${data.note}\n\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Data saved to userdata.txt');
            res.status(200).send('Data saved successfully');
        }
    });
});

// Serve the HTML file and CSS
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
