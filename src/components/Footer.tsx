import Link from "next/link";
import { hasFoundingSponsor, joinLinks, navLinks, siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-auto bg-teal text-on-dark">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
          <p className="text-xs font-medium tracking-wide text-on-dark/55">
            Independent nonprofit standards body — in formation
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/imtxi-wordmark-lockup.svg"
              alt="IMTXI"
              width={180}
              height={63}
              className="mb-6 h-12 w-auto brightness-0 invert"
            />
            <p className="measure text-[0.95rem] leading-relaxed text-on-dark/85">
              Building evaluation standards, practitioner credentials, facility
              accreditation, and an outcomes registry for immersive therapeutics.
            </p>
            <p className="mt-5 text-sm text-on-dark/65">
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email.general}
              </a>
            </p>
            {hasFoundingSponsor() && (
              <p className="mt-4 text-sm text-on-dark/55">
                Founding sponsorship: {siteConfig.foundingSponsor}. Founding
                sponsors hold no vote on standards content and receive no
                preference in certification, accreditation, or classification
                decisions.
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-on-dark/50">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-dark/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-on-dark/80 transition-colors hover:text-white"
                >
                  Governance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-on-dark/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-on-dark/50">
              Join free
            </p>
            <ul className="space-y-2.5 text-sm">
              {joinLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-dark/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/council"
                  className="text-on-dark/80 transition-colors hover:text-white"
                >
                  Founding Council
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-on-dark/50">
              Newsletter
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-on-dark/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.domain}
          </p>
          <p className="text-on-dark/40">
            Standards · Credentials · Accreditation · Registry
          </p>
        </div>
      </div>
    </footer>
  );
}
