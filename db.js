const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const connectToDb = async () => {
    try {
      await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
       
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb