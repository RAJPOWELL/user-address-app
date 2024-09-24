const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const User = require('./models/User');
const Address = require('./models/Address');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" folder (HTML, CSS, JS)
app.use(express.static('public'));

// Route to handle user registration and address submission
app.post('/register', async (req, res) => {
    const { name, street, city, state, postalCode } = req.body;

    if (!name || !street || !city || !state || !postalCode) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create the user
        const user = await User.create({ name });

        // Create the address for the user
        const address = await Address.create({
            street,
            city,
            state,
            postalCode,
            UserId: user.id // Associate address with the user
        });

        res.status(201).json({ message: 'User and address saved successfully', user, address });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user and address', error });
    }
});

// Sync database and start the server
sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
