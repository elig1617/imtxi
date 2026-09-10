import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FrameworkLadder } from "@/components/FrameworkLadder";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Evaluation Framework",
  description:
    "Four-tier Immersive Therapeutics Evaluation Framework methodology based on regulatory status and clinical evidence.",
};

export default function FrameworkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Methodology"
        title="The Immersive Therapeutics Evaluation Framework"
        description="A four-tier classification for immersive therapeutic products, based on regulatory status and clinical evidence."
      />

      <Section>
        <FrameworkLadder />
        <div className="mt-6 rounded-sm border border-accent/25 bg-accent/[0.06] px-5 py-4">
          <p className="text-sm leading-relaxed text-navy/85">
            <strong className="font-semibold text-navy">Methodology only.</strong>{" "}
            This page publishes methodology — not named commercial product
            classifications. Classifications will be issued after the founding
            council is seated and an appeals process is published.
          </p>
        </div>
      </Section>

      <Section tint className="border-y border-rule">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Purpose</p>
            <h2 className="text-2xl md:text-3xl">Why the framework exists</h2>
          </div>
          <div className="prose-imtxi measure md:col-span-8 text-muted">
            <p>
              Immersive products marketed for clinical use span a wide range of
              regulatory status and evidence. Without a shared taxonomy, clinicians,
              payers, facilities, and patients lack a common language for
              distinguishing cleared therapeutics from wellness applications.
            </p>
            <p>
              The framework does not replace FDA review. It organizes publicly
              available regulatory and evidence information into tiers that support
              clinical decision-making, procurement, and coverage discussions.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Process</p>
            <h2 className="text-2xl md:text-3xl">How products will be classified</h2>
          </div>
          <div className="md:col-span-8">
            <div className="prose-imtxi measure text-muted">
              <p>
                Classification will rest on two axes: (1) FDA authorization or
                registration status for a therapeutic indication, and (2) the
                strength of publicly available clinical evidence supporting that
                indication. Assignments will be reviewed quarterly and published
                openly.
              </p>
              <p>
                Manufacturers and clinicians will be able to request classification
                or appeal a published assignment once the council and process
                documents are in place. Until then, the Institute does not classify
                named products.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/council">Join the council that will steward this</Button>
              <Button href="/contact" variant="secondary">
                Ask about classification process
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted">
              Related:{" "}
              <Link href="/standards" className="text-teal underline underline-offset-2">
                Standards development
              </Link>{" "}
              ·{" "}
              <Link href="/resources" className="text-teal underline underline-offset-2">
                Resources
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
