import { NextResponse } from "next/server";
import connectDatabase from "@/config/connectDatabase";
import Property from "@/lib/models/Property";

type GetParams = {
  id: string;
};

// GET /api/properties/:id
export const GET = async (request: Request, context: { params: GetParams }) => {
  try {
    await connectDatabase();

    const propertyId = context.params.id;

    const property = await Property.findById(propertyId);

    if (!property)
      return NextResponse.json(
        { message: "Property not fount" },
        { status: 404 }
      );

    return NextResponse.json(property, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
