import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      typeof: String,
      required: true,
      trim: true,
    },

    email: {
      typeof: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      typeof: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// Hash passwords before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);

export default User;
