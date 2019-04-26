import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
import router from './routes';

// setup the Express app
const app = express();

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});