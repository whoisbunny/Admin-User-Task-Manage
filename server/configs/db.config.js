const { default: mongoose } = require("mongoose");


const connectToDb = async () => {
    try {
      const mongoUrl = process.env.mongoUrl;
      
      
    await mongoose.connect(`${mongoUrl}`).then((e) => {
      console.log("Connected To DB");
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = connectToDb