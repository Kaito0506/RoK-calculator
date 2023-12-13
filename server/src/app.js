const express = require('express');
const cors = require('cors');
const uploadcsvRouter = require('./routes/uploadcsv.router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/api/uploadcsv', uploadcsvRouter);

module.exports = app; 