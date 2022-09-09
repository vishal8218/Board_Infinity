require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const URL="https://cloud.mongodb.com/v2/60c5e943a777d247b454a3e8#metrics/replicaSet/6319df0f3b0a612af891e360/explorer/Data/Board/find";
const mongoString = URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})