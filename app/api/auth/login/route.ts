import { NextResponse } from "next/server";
import dbConnect from "@/lib/db.connection";
import Users from "@/models/user.model";

import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const payload = await req.json();

    const user = await Users.findOne({ emailId: payload.emailId });

    if (!user) {
      throw new Error("Account not found. Please register the account");
    }

    const isValid = await bcrypt.compare(payload.password, user.password);

    if (!isValid) {
      throw new Error("Invalid credentials. Please enter the correct password");
    }

    delete user.password;

    return NextResponse.json({
      sucess: true,
      message: "Account login succesfully",
      data: user
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message
    });
  }
}
