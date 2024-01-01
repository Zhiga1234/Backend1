const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const bmiRouter = require('./routes/bmiRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/', bmiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
