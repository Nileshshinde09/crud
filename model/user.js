import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});
mongoose.models={}
const Users = mongoose.model("user", userSchema);

export default Users;