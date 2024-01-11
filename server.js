const express = require('express');
const app = express();
const port = 3000;
const nameRoutes = require('./routes/nameRoutes');

app.use('/', nameRoutes);

app.listen(port, () => {
    console.log('App listening on port 3000');
});
