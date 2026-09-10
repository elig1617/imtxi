"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

type Props = { variant?: "light" | "dark" };

export function NewsletterForm({ variant = "light" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    variant === "dark"
      ? "border-white/25 bg-teal text-on-dark placeholder:text-on-dark/50"
      : "border-navy/20 bg-ground text-navy placeholder:text-muted";

  return (
    <div>
      <p
        className={`mb-3 text-sm ${
          variant === "dark" ? "text-on-dark/80" : "text-muted"
        }`}
      >
        Monthly brief on standards, coding, and coverage in immersive
        therapeutics.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@institution.edu"
          className={`w-full rounded-sm border px-3 py-2.5 text-sm outline-none focus:border-accent ${inputCls}`}
        />
        <Button type="submit" disabled={status === "loading"} className="shrink-0">
          {status === "loading" ? "Sending…" : "Subscribe"}
        </Button>
      </form>
      {status === "ok" && (
        <p className="mt-2 text-sm text-accent">You are subscribed. Thank you.</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-red-300">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
