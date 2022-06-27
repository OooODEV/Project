const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body

        const doesUserExists = await UserModel.findOne({ email })
        if (doesUserExists) {
            return res.status(400).send({ message: 'User already exists!' })
        }

        await UserModel.create({
            email,
            name,
            password: await bcrypt.hash(password, 10),
        })

        res.json({ message: 'User created successfuly', name})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({ message: 'Invalid email or password!' })
        }

        res.json({ message: 'Successfuly logged in', name: user.name})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = router;