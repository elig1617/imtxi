"use client";

import Link from "next/link";
import { useState } from "react";
import { joinLinks, navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-rule bg-ground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0" aria-label="IMTXI home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/imtxi-wordmark-lockup.svg"
            alt="IMTXI — Institute for Immersive Therapeutics"
            width={200}
            height={70}
            className="hidden h-14 w-auto sm:block"
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

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] text-navy/85 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="text-[0.9375rem] text-navy/85 transition-colors hover:text-navy"
          >
            Join
          </Link>
          <Link
            href="/council"
            className="rounded-sm bg-accent px-3.5 py-2 text-sm font-medium text-ground"
          >
            Founding Council
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-navy/20 px-3 py-2 text-sm text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-ground px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/join" className="py-1 text-navy" onClick={() => setOpen(false)}>
              Join
            </Link>
            {joinLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 pl-4 text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/council"
              className="mt-2 inline-flex w-fit rounded-sm bg-accent px-3.5 py-2 text-sm font-medium text-ground"
              onClick={() => setOpen(false)}
            >
              Founding Council
            </Link>
            <Link
              href="/contact"
              className="py-1 text-navy"
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
