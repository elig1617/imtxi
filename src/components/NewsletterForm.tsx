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
      ? "border-white/25 bg-teal/40 text-on-dark placeholder:text-on-dark/45 focus:border-accent focus:ring-accent/30"
      : "border-navy/15 bg-ground text-navy placeholder:text-muted/70 focus:border-accent focus:ring-accent/20";

  return (
    <div>
      <p
        className={`mb-3 text-sm leading-relaxed ${
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
          className={`w-full rounded-sm border px-3.5 py-2.5 text-sm outline-none focus:ring-2 ${inputCls}`}
        />
        <Button type="submit" disabled={status === "loading"} className="shrink-0">
          {status === "loading" ? "Sending…" : "Subscribe"}
        </Button>
      </form>
      {status === "ok" && (
        <p
          className={`mt-2 text-sm ${
            variant === "dark" ? "text-accent" : "text-teal"
          }`}
        >
          You are subscribed. Thank you.
        </p>
      )}
      {status === "error" && (
        <p
          className={`mt-2 text-sm ${
            variant === "dark" ? "text-red-300" : "text-red-700"
          }`}
        >
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
