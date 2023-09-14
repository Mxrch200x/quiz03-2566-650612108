import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Artittaya Tieng-arom",
    studentId: "650612108",
  });
};
