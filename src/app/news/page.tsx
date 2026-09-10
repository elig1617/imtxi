import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements from the Institute for Immersive Therapeutics.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Announcements"
        description="Institute updates on standards, coding, and recruitment."
      />
      <Section>
        <article className="surface-card max-w-3xl p-6 md:p-10">
          <p className="text-sm font-medium text-muted">
            <time dateTime="2026-09-10">September 10, 2026</time>
          </p>
          <div className="accent-rule my-5" aria-hidden />
          <h2 className="text-2xl md:text-3xl">
            Institute for Immersive Therapeutics launches
          </h2>
          <div className="prose-imtxi mt-6 space-y-4 text-muted">
            <p>
              The Institute for Immersive Therapeutics (IMTXI) is launching as an
              independent nonprofit standards body for extended reality in
              clinical care. At launch, the Institute publishes the methodology
              for a four-tier Immersive Therapeutics Evaluation Framework and
              opens recruitment for a founding council and free founding
              membership pathways for practitioners, centers, and industry.
            </p>
            <p>
              Immersive systems are already in clinical use. Shared evaluation
              standards, practitioner credentials, facility accreditation, and a
              national outcomes registry are not. IMTXI exists to build that
              infrastructure in public, with independent governance and open
              comment processes.
            </p>
            <p>
              Product classifications of named commercial systems will not be
              issued until the founding council is seated and an appeals process
              is published. The Institute will introduce membership fees only
              after its first standards are published; founding members are
              grandfathered free permanently.
            </p>
            <p>
              Read the{" "}
              <Link
                href="/framework"
                className="text-teal underline underline-offset-2"
              >
                framework methodology
              </Link>
              , review{" "}
              <Link
                href="/reimbursement"
                className="text-teal underline underline-offset-2"
              >
                coding and coverage status
              </Link>
              , or{" "}
              <Link
                href="/council"
                className="text-teal underline underline-offset-2"
              >
                apply to the founding council
              </Link>
              .
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
