import { Schema, Types, Document, Model, model, models } from "mongoose";

interface IUser {
  _id: Types.ObjectId;
  email: string;
  username: string;
  image: string;
  bookmarks: Types.ObjectId;
}

type UserModel = Model<IUser>;

const UserSchema = new Schema<IUser>(
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

const User: UserModel = models.User || model<IUser>("User", UserSchema);

export default User;
