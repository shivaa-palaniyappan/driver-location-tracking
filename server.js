const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON data

// Endpoint to receive location data from the driver's mobile
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Driver's location: Latitude: ${latitude}, Longitude: ${longitude}`);
    res.send('Location received');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
