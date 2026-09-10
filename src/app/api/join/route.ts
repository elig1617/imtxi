import { NextRequest, NextResponse } from "next/server";
import { appendJsonRecord } from "@/lib/forms";

const allowed = new Set(["practitioners", "centers", "industry"]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
    }
    const path = String((body as { path?: string }).path || "");
    if (!allowed.has(path)) {
      return NextResponse.json({ ok: false, error: "Invalid path" }, { status: 400 });
    }
    await appendJsonRecord(`${path}.json`, body as Record<string, unknown>);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
