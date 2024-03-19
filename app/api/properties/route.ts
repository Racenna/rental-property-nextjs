import { NextApiRequest } from "next";
import connectDatabase from "@/config/connectDatabase";

export const GET = async (request: NextApiRequest) => {
  try {
    await connectDatabase();

    return new Response(JSON.stringify({ message: "Hello world" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
