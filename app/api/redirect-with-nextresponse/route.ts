import { NextResponse } from "next/server";
export function POST() {
  return NextResponse.redirect("http://localhost:3000/redirected");
}
