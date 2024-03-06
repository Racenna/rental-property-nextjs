export type PropertyLocation = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export type PropertyRate = {
  weekly: number;
  monthly: number;
  nightly: number;
};

export type PropertySellerInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Property = {
  _id: string;
  owner: string;
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
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
