import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  firstName: string;
  lastName: string;
  username: string;
  emailId: string;
  password: string;
}

const UsersSchema = new mongoose.Schema<Users>({
  firstName: {
    type: String,
    required: [true, "FirstName is the required field."],
    maxlength: [20, "FirstName cannot be more than 20 characters"]
  },
  lastName: {
    type: String,
    required: [true, "LastName is the required field."],
    maxlength: [20, "LastName cannot be more than 20 characters"]
  },
  username: {
    type: String,
    required: [true, "username is the required field."],
    maxlength: [20, "username cannot be more than 20 characters"]
  },
  emailId: {
    type: String,
    required: [true, "EmailID is the required field."],
    maxlength: [30, "EmailID cannot be more than 30 characters"]
  },
  password: {
    type: String,
    required: [true, "Password is the required field."],
    maxlength: [20, "Password cannot be more than 30 characters"]
  }
});

export default mongoose.models.Users ||
  mongoose.model<Users>("Users", UsersSchema);
