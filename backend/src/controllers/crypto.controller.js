const express = require('express');
const CryptoModel = require('../models/crypto.model');

const router = express.Router();

router.get('/crypto', async (req, res, next) => {
    try {
        const cryptos = await CryptoModel.find();

        res.json({ cryptos });
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
})

module.exports = router;