"use client";

import Link from "next/link";
import { useState } from "react";
import { joinLinks, navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/80 bg-ground/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
        <Link href="/" className="shrink-0" aria-label="IMTXI home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/imtxi-wordmark-lockup.svg"
            alt="IMTXI — Institute for Immersive Therapeutics"
            width={200}
            height={70}
            className="hidden h-[3.25rem] w-auto sm:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/imtxi-wordmark.svg"
            alt="IMTXI"
            width={120}
            height={36}
            className="h-8 w-auto sm:hidden"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 text-[0.875rem] font-medium text-navy/75 transition-colors hover:bg-navy/[0.04] hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-sm px-2.5 py-2 text-[0.875rem] font-medium text-navy/75 transition-colors hover:bg-navy/[0.04] hover:text-navy"
          >
            Join
          </Link>
          <div className="ml-2 h-5 w-px bg-rule" aria-hidden />
          <Link
            href="/council"
            className="ml-2 rounded-sm bg-accent px-3.5 py-2 text-sm font-semibold text-ground shadow-sm transition-colors hover:bg-accent/90"
          >
            Founding Council
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-navy/20 bg-ground px-3 py-2 text-sm font-medium text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1" aria-hidden>
            <span
              className={`block h-0.5 w-4 bg-navy transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-navy transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-ground px-5 py-5 shadow-lg xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-2.5 font-medium text-navy hover:bg-navy/[0.04]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="rounded-sm px-2 py-2.5 font-medium text-navy hover:bg-navy/[0.04]"
              onClick={() => setOpen(false)}
            >
              Join
            </Link>
            <div className="my-2 border-t border-rule" />
            <p className="px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Membership
            </p>
            {joinLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-2 pl-4 text-sm text-muted hover:bg-navy/[0.04] hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/council"
              className="mt-3 inline-flex w-fit rounded-sm bg-accent px-3.5 py-2.5 text-sm font-semibold text-ground"
              onClick={() => setOpen(false)}
            >
              Founding Council
            </Link>
            <Link
              href="/contact"
              className="mt-1 rounded-sm px-2 py-2.5 text-navy hover:bg-navy/[0.04]"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
