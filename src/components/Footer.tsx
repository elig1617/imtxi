import Link from "next/link";
import { joinLinks, navLinks, siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-auto bg-teal text-on-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/imtxi-wordmark-lockup.svg"
              alt="IMTXI"
              width={180}
              height={63}
              className="mb-5 h-12 w-auto brightness-0 invert"
            />
            <p className="measure text-[0.95rem] leading-relaxed text-on-dark/85">
              Building evaluation standards, practitioner credentials, facility
              accreditation, and an outcomes registry for immersive therapeutics.
            </p>
            <p className="mt-4 text-sm text-on-dark/65">
              Founding sponsorship: {siteConfig.foundingSponsor}. Founding
              sponsors hold no vote on standards content and receive no
              preference in certification, accreditation, or classification
              decisions.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-on-dark/60">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-white">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-on-dark/60">
              Join free
            </p>
            <ul className="mb-6 space-y-2 text-sm">
              {joinLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/council" className="hover:text-white">
                  Founding Council
                </Link>
              </li>
            </ul>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-on-dark/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.domain}
          </p>
          <p>Independent nonprofit standards body — in formation.</p>
        </div>
      </div>
    </footer>
  );
}
