const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const nameRoutes = require('./routes/nameRoutes');




app.use('/', nameRoutes);

app.listen(port, () => {
    console.log('App listening on port 3000');
});

