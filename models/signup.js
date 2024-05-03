import mongoose, { Schema } from 'mongoose';

const SignupSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    internetPackage: String,
    address: String,
    internetPackage: String,
    cablePackage: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Signup || mongoose.model('Signup', SignupSchema);
