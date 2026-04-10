const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const memberRoutes = require('./routes/memberRoutes');
const editRoutes = require('./routes/editRoute');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', memberRoutes);
app.use('/', editRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
