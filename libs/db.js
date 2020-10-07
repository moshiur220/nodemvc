const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  //   "mongodb://localhost:27017/sitlmvc",
  `{mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

// https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas#schemas
// https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34
// http://harpjs.com/recipes/print-debugging   check console log for ejs
