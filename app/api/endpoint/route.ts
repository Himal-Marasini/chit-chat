import { NextResponse } from "next/server";
import dbConnect from "@/lib/db.connection";
import Users from "@/models/user.model";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const record = await Users.find();

    return NextResponse.json({
      sucess: true,
      message: "reCAPTCHA verification successful",
      data: record
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();

    const payload = await req.json();

    return NextResponse.json({
      sucess: true,
      message: "reCAPTCHA verification successful post API",
      data: payload
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
