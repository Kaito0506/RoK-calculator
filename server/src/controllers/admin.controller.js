const makeAdminService = require('../services/admin.service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { as } = require('../database/knex');

async function loginAdministrator(req, res){
    try {
        const adminService = makeAdminService();
        const admin = await adminService.getAdmin(req.body);
        if(!admin){
            return res.status(404).json({ message: 'Administrator not found' });
        }
        if(!await bcrypt.compare(req.body.password, admin.password)){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
        return res.send({ message: 'Login successful' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function logoutAdministrator(req, res){
    res.cookie('token', '', { maxAge: 0 });
    return res.send({ message: 'Logout successful' });
}

async function getAdmin(req, res) {
    try {
        const cookie = req.cookies['token'];
        const claims = jwt.verify(cookie, process.env.JWT_SECRET);
        if(!claims){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const admin = await makeAdminService().getAdminById(claims.id);
        const { password, ...data } = admin;
        res.send(data);
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = {
    loginAdministrator,
    getAdmin,
    logoutAdministrator,
}