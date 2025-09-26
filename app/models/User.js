import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ["student", "admin"], default: "student" }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
