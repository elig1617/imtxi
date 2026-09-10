import { NextRequest, NextResponse } from "next/server";
import { appendJsonRecord } from "@/lib/forms";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
    }
    await appendJsonRecord("council.json", body as Record<string, unknown>);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
