const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const uploadcsvRouter = require('./routes/uploadcsv.router');
const adminRouter = require('./routes/admin.router');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/api/uploadcsv', uploadcsvRouter);
app.use('/api/admin', adminRouter);

module.exports = app; 