const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const CryptoModel = require('../models/crypto.model')

const router = express.Router();

router.post('/update-crypto', async (req, res, next) => {
    await mongoose.connection.collections['cryptos'].drop();

    try {
        await fs.readFile(__dirname + `../../../../data.json`, 'utf8', async (err, data) => {
            const cryptos = JSON.parse(data)

            Object.keys(cryptos).forEach(async (cryptoName) => {
                try {
                    const cryptoDb = new CryptoModel({ ...cryptos[cryptoName], name: cryptoName });

                    await cryptoDb.save();
                } catch (error) {
                    console.log(error)
                }
            })
        })

        res.send('Success');
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;