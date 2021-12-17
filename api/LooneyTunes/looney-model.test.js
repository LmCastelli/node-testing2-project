const Looney = require('./looney-model')
const db = require('../../data/dbConfig')


beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})
describe('Looney model', () => {
    describe('getAll', () => {
        test('grabs all looney characters in looney table', async() => {
            const result = await Looney.getAll()
            expect(result).toHaveLength(3)
        })
    })
    describe('getById', () => {
        test('looney comes correctly', async () => {
            const result = await Looney.getById(1)
            expect(result).toMatchObject({id:1, name:'Bugs Bunny'})
        })
    })
    describe('create', () => {
        test('creates new looney in db', async () => {
            await Looney.create({name: 'Elmer Fudd'})
            const [elmer] = await db('looney').where('id', 4)
            expect(elmer).toMatchObject({id:4, name: 'Elmer Fudd'})
        })
        test('resolves new looney', async () => {
            const result = await Looney.create({name: 'Elmer Fudd'})
            expect(result).toMatchObject({id:4, name: 'Elmer Fudd'})
        })
        test('adds to database', async () => {
            await Looney.create({name: 'Elmer Fudd'})
            const result = await Looney.getAll()
            expect(result).toHaveLength(4)
        })
    })
})