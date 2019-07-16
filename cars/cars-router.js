const express = require('express')

const db = require('../data/db-config.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.json(cars);
    } catch (err) {
        res.status(500).json({
            message: "There was an error retrieving the cars."
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const newCar = req.body;
        if (req.body.VIN && req.body.make && req.body.model && req.body.mileage) {
            const [id] = await db('cars').insert(newCar);
            const newCarEntry = await db('cars').where({ id })
            res.status(201).json(newCarEntry);
        } else {
            res.status(400).json({
                message: "Your car is missing a required field."
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error creating the car."
        })
    }
})

module.exports = router;