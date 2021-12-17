const db = require('../../data/dbConfig')

function getAll()  {
    return db('looney')
}

function getById(id) {
    return db('looney')
        .where('id', id)
        .first()
}


async function create(looney) {
    return db('looney')
        .insert(looney)
        .then(([id]) => getById(id))
}

module.exports = {
    getAll, 
    getById,
    create,
}