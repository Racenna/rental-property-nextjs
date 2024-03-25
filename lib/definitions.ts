export type PropertyLocation = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export type PropertyRate = {
  weekly?: number;
  monthly?: number;
  nightly?: number;
};

export type PropertySellerInfo = {
  name: string;
  email: string;
  phone: string;
};
