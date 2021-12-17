const server = require('../server')
const request = require('supertest')
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

test('correct environment', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Looney Router', () => {
    describe('[GET] /api/looney', () => {
        let res 
        beforeEach(async () => {
            res = await request(server).get('/api/looney')
        })
        test('responds with 200 OK', async () => {
            expect(res.status).toBe(200)
        })
        test('responds with all looney', async () => {
            expect(res.body).toHaveLength(3)
        })
    })
    describe('[POST] /api/looney', () => {
        let res 
        beforeEach(async () => {
            res = await request(server)
                .post('/api/looney')
                .send({name: 'Elmer Fudd'})
        })
        test('responds with 210 created', async () => {
            expect(res.status).toBe(201)
        })
        test('responds with new looney character', async () => {
            expect(res.body).toMatchObject({id:4 , name: 'Elmer Fudd'})
        })
    })
})