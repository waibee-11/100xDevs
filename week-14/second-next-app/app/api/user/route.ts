import { NextRequest, NextResponse } from "next/server";
import axios from "axios"


export function GET(req: NextRequest){
    return NextResponse.json({
        name: "Yash Barve",
        email: "yhbarve@yb.com"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    return NextResponse.json({
        body
    })
}