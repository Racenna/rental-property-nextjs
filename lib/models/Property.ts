import { Schema, Types, Document, Model, model, models } from "mongoose";
import {
  PropertyLocation,
  PropertyRate,
  PropertySellerInfo,
} from "@/lib/definitions";

interface IPropertyDocument extends Document {
  owner: Types.ObjectId;
  name: string;
  type: string;
  description: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: PropertyRate;
  seller_info: PropertySellerInfo;
  images: string[];
  is_featured: boolean;
}

type PropertyModel = Model<IPropertyDocument>;

const PropertySchema = new Schema<IPropertyDocument>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property: PropertyModel =
  models.Property || model<IPropertyDocument>("Property", PropertySchema);

export default Property;
