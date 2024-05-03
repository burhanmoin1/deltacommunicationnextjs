import connectMongoDB from "@lib/mongodb";
import Complaint from "@/models/complaint";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { customer_complain_name, complaint, customer_email, customer_phone } = await request.json();
    await connectMongoDB();
    await Complaint.create({ customer_complain_name, complaint, customer_email, customer_phone });
    return NextResponse.json({ message: "Complaint Created" }, { status: 201 });
  }