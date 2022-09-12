//install dotenv express morgan bcrypt jsonwebtoken joi lodash cors compression
const express = require('express');
const cors = require('cors') //cross origin resource sharing
const compression = require('compression')
const orderRouter = require('./routers/orderRouter');
const userRouter = require('./routers/userRouter');

const app = express();


app.use(compression());
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/order', orderRouter);
module.exports = app;