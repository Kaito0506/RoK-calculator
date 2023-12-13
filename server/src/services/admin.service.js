const knex = require('../database/knex');

function makeAdminService(){
    async function getAdmin(req){
        const { username } = req;
        const res = await knex('administrator').where({ username }).first();
        return res;
    }
    async function getAdminById(id){
        const res = await knex('administrator').where({ id }).first();
        return res;
    }
    return {
        getAdmin,
        getAdminById,
    }
}

module.exports = makeAdminService;