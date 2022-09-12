//connect mongodb
//run server
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const mongoose = require('mongoose');

const db = process.env.MONGODB_SERVER.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log("Connect to Mongodb"))
    .catch(err => console.log("Connection failed"));


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening port ${port}!!!`)
})
