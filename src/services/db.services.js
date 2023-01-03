const mongoose = require('mongoose');
module.exports = async (uri) => {
    const dbConnect = async () => {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.info(`Successfully connected to ${uri}`)
        } catch (error) {
            console.error(`Error connecting to the database with uri ${uri} and error: `, error)
            process.exit(1)
        }
    }
    await dbConnect()
}