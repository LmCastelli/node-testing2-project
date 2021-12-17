// Update with your config settings.
const common = {
    client: 'sqlite',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations'},
    seeds: {directory: './data/seeds'}
}

module.exports = {
    development: {
        ...common,
        connection: {
            filename: './data/looney.db3',
        },
    },
    testing: {
        ...common,
        connection: {
            filename: './data/test.db3',
        }
    },
    production: {
        
    }
}