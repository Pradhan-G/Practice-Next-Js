import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://abhishekpradhan_6969:NDiiUbUHE1uVLYwd@cluster0.cy4g5dx.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => {
      console.log("Blog Database Connection is Successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectToDB;
