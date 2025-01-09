import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    firstname: String,
    lastname: String,
});

const userModel = mongoose.model("users", userSchema);
export { userModel };
