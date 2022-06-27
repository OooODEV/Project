const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const cryptoRoutes = require('./src/controllers/crypto.controller');
const userRoutes = require('./src/controllers/user.controller');
const adminRoutes = require('./src/controllers/admin.controller');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }))

app.use('/api', cryptoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes)

const start = async () => {
    mongoose.connect(
        'mongodb+srv://Vadym:qwerty123@cluster0.zxe5bq8.mongodb.net/CourseProject?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(8080);
}

start();