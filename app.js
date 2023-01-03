const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const connectDB = require('./src/services/db.services');
const env = process.env;
const cors = require('cors')
const app = express();
const port = process.env.APP_PORT || 3001;
const db_uri = env.DB_URI;
const employeesRouter = require('./src/routers/employees.route');
const { default: helmet } = require('helmet');

app.use(cors())
app.use(logger('dev'))

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

app.use('/', employeesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = httpStatus[err.statusCode] || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});

connectDB(db_uri)
    .then(() => {
        app.listen(port, '0.0.0.0', () => {
            console.log(`autocomplete service is running at http://localhost:${port}`)
        })
    }).catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
