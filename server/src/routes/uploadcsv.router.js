const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, 'public/csv');
    },
    filename: function (req, file, cb) {
        const date = Date.now();
        const filename = `${date}_${file.originalname}`;
        return cb(null, filename);
    }
})

const upload = multer({ storage: storage });

const router = express.Router();

router
    .route('/')
    .post(upload.single('file'), (req, res) => {
        res.json({ message: 'File uploaded successfully' });
    })
    .all((req, res) => {
        res.status(405).send({ message: 'Method not allowed' });
    });

module.exports = router;