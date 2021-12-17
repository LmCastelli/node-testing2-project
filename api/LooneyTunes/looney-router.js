const express = require('express')
const Looney = require('./looney-model')
const router = express.Router()

router.get('/', async (req,res, next) => {
    try {
        const looneys = await Looney.getAll()
        res.json(looneys)
    } catch (err) {
        next(err)
    }
})

router.get('/:id',  (req,res,next) => {
    Looney.getById(req.params.id)
        .then(looney => {
            res.json(looney)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Looney.create(req.body)
        .then(looney => {
            res.status(201).json(looney)
        })
        .catch(err => {
            next(err)
        })
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;