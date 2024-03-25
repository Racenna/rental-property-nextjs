import { IProperty } from "../models/Property";

export const sortPropertiesByDate = (a: IProperty, b: IProperty) =>
  Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
