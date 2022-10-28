const express = require('express');
const sequelize = require('./utils/database.js');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/users.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

sequelize
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Success connect port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
