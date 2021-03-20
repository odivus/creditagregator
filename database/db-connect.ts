import mongoose from 'mongoose';

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  // console.log(mongoose.connection.readyState);
  return mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    .catch(err => console.log(err.reason));
}

export default dbConnect;