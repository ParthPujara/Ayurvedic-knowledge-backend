import mongoose from "mongoose";

mongoose
  .connect(`mongodb+srv://parthtpujara:CvMKMEPcoUnFuH1U@ayurvdicknowledge.vee5a.mongodb.net/`)
  .then(() => {
    console.log("Database Conntected Successfully..");
  })
  .catch((e) => {
    console.log(e);
  });