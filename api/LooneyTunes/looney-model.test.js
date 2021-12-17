const Looney = require('./looney-model')
const db = require('../../data/dbConfig')
const request = require('supertest')

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
describe()