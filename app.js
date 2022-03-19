// This file starts the express server application
//
// The `npm run server` command will run the `server` script in the package.json,
// which then runs another command to start the server

const express = require('express');
const app = express();

require('./src/db').setup();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('dist'));

// Routes
app.get('/', function (req, res) {
    res.redirect('/home/show');
});
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/product', require('./routes/product'));
app.use('/admin', require('./routes/admin'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
