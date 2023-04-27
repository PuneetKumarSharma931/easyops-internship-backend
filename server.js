const express = require('express');
const connectDB = require('./db/connection');
const cors = require('cors');

const app = express();

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', require('./routes/contact'));

app.listen(port, () => {

    console.log(`The server is running on port:${port}`);
    
});
