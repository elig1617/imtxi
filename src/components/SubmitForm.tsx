"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Button } from "./Button";

type Props = {
  action: string;
  children: ReactNode;
  successMessage?: string;
};

export function SubmitForm({
  action,
  children,
  successMessage = "Thank you. Your submission was received.",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-sm border border-accent/40 bg-accent/5 px-5 py-6">
        <p className="font-medium text-navy">{successMessage}</p>
        <button
          type="button"
          className="mt-3 text-sm text-teal underline underline-offset-2"
          onClick={() => setStatus("idle")}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {children}
      <div className="pt-2">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting…" : "Submit"}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again or email info@imtxi.com.
        </p>
      )}
    </form>
  );
}
