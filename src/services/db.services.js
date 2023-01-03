const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/autocomplete`;
module.exports = async () => {
    const dbConnect = async () => {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.info(`Successfully connected to db`)
        } catch (error) {
            console.error(`Error connecting to the database with uri ${uri}`, error)
            process.exit(1)
        }
    }
    await dbConnect()
}