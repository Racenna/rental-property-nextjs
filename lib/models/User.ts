import { Schema, Types, Document, Model, model, models } from "mongoose";

interface IUserDocument extends Document {
  email: string;
  username: string;
  image: string;
  bookmarks: Types.ObjectId;
}

type UserModel = Model<IUserDocument>;

const UserSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User: UserModel = models.User || model<IUserDocument>("User", UserSchema);

export default User;
