import { NextResponse } from "next/server";
import connectDatabase from "@/config/connectDatabase";
import Property from "@/lib/models/Property";

// GET /api/properties
export const GET = async (_: Request) => {
  try {
    await connectDatabase();

    const properties = await Property.find({});

    return NextResponse.json(properties, {
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
