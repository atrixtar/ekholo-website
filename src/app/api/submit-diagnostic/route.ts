import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwE1BuxabFiDLDssuyxjthEoKxbcuQNRaomAsTSH-qEPUWv6YT_on7UPs5WIsIuWON_/exec";

// Simple in-memory rate limiting (per Vercel serverless instance)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

// Basic sanitization — strip HTML tags and limit length
function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function isValidAnswer(val: unknown): val is "A" | "B" | "C" | "D" {
  return val === "A" || val === "B" || val === "C" || val === "D";
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate required fields
    const name = sanitize(body.name, 200);
    const whatsapp = sanitize(body.whatsapp, 30);
    const business = sanitize(body.business, 200);
    const sells = sanitize(body.sells, 500);

    if (!name || !whatsapp || !business || !sells) {
      return NextResponse.json(
        { error: "All contact fields are required." },
        { status: 400 }
      );
    }

    // Validate all question answers
    const questionKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"] as const;
    const answers: Record<string, string> = {};

    for (const key of questionKeys) {
      if (!isValidAnswer(body[key])) {
        return NextResponse.json(
          { error: `Invalid answer for ${key}.` },
          { status: 400 }
        );
      }
      answers[key] = body[key];
    }

    // Validate score and level
    const score = typeof body.score === "number" && body.score >= 10 && body.score <= 40
      ? body.score
      : null;

    if (score === null) {
      return NextResponse.json(
        { error: "Invalid score." },
        { status: 400 }
      );
    }

    // Build the clean, validated payload
    const payload = {
      name,
      whatsapp,
      business,
      sells,
      ...answers,
      score,
      level: typeof body.level === "number" ? body.level : 0,
      levelLabel: sanitize(body.levelLabel, 100),
      components: sanitize(body.components, 500),
      goalLabel: sanitize(body.goalLabel, 100),
      bandwidthLabel: sanitize(body.bandwidthLabel, 100),
    };

    // Forward to Google Apps Script (non-blocking to the user)
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
