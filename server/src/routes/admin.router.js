const express = require('express');
const makeAdminController = require('../controllers/admin.controller');
const router = express.Router();

router
    .route('/')
    .get(makeAdminController.getAdmin)
    .all((req, res) => {
        res.status(405).send({ message: 'Method not allowed' });
    });

router
    .route('/login')
    .post(makeAdminController.loginAdministrator)
    .all((req, res) => {
        res.status(405).send({ message: 'Method not allowed' });
    });

router
    .route('/logout')
    .post(makeAdminController.logoutAdministrator)
    .all((req, res) => {
        res.status(405).send({ message: 'Method not allowed' });
    });

module.exports = router;