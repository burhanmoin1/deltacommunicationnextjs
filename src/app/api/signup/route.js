import connectMongoDB from "@lib/mongodb";
import Signup from "@/models/signup";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { name, email, phoneNumber, address, internetPackage, cablePackage } = await request.json();
    await connectMongoDB();
    await Signup.create({ name, email, phoneNumber, address, internetPackage, cablePackage});
    return NextResponse.json({ message: "Customer Created" }, { status: 201 });
  }