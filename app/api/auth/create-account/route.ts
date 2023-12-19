import { NextResponse } from "next/server";
import dbConnect from "@/lib/db.connection";
import Users from "@/models/user.model";

import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const payload = await req.json();

    const user = await Users.findOne({ emailId: payload.emailId });

    if (user) {
      throw new Error(
        "User account already exists with this emailId. Please proceed to login."
      );
    }

    const hashPassword = await bcrypt.hash(payload.password, 13);

    const createPayload = {
      ...payload,
      password: hashPassword
    };

    const record = await Users.create(createPayload);

    await record.save();

    return NextResponse.json({
      sucess: true,
      message: "Account created succesfully",
      data: record
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message
    });
  }
}
