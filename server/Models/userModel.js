import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profilePicture: String,
    },
    { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel