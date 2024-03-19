import { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "@/config/connectDatabase";
import Property from "@/lib/models/Property";

// GET /api/properties
export const GET = async (request: NextApiRequest) => {
  try {
    await connectDatabase();

    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
