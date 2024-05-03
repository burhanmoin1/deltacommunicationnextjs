import mongoose, { Schema } from 'mongoose';

const ComplaintSchema = new Schema(
  {
    customer_complain_name: String,
    complaint: String,
    customer_email: String,
    customer_phone: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
