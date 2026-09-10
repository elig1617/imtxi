import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Evaluation Framework",
  description:
    "Four-tier Immersive Therapeutics Evaluation Framework methodology based on regulatory status and clinical evidence.",
};

const tiers = [
  {
    tier: "Tier 1",
    definition:
      "FDA-cleared or authorized for a therapeutic indication, supported by randomized controlled trial evidence.",
    claims:
      "Specific therapeutic claims within the cleared indication.",
  },
  {
    tier: "Tier 2",
    definition:
      "FDA-cleared or authorized, supported by clinical evidence short of RCT.",
    claims:
      "Therapeutic claims within the cleared indication, with evidence qualification.",
  },
  {
    tier: "Tier 3",
    definition:
      "FDA establishment registration only; feasibility or observational data.",
    claims:
      "No therapeutic claims; adjunctive or investigational use.",
  },
  {
    tier: "Tier 4",
    definition:
      "No FDA authorization; general wellness positioning.",
    claims: "Wellness and engagement claims only.",
  },
];

export default function FrameworkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Methodology"
        title="The Immersive Therapeutics Evaluation Framework"
        description="A four-tier classification for immersive therapeutic products, based on regulatory status and clinical evidence."
      />

      <Section>
        <div className="overflow-x-auto rounded-sm border border-rule">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-navy text-on-dark">
              <tr>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Definition</th>
                <th className="px-4 py-3 font-medium">Appropriate claims</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t, i) => (
                <tr
                  key={t.tier}
                  className={i % 2 === 0 ? "bg-ground" : "bg-navy/[0.03]"}
                >
                  <td className="whitespace-nowrap px-4 py-4 align-top font-serif text-base font-semibold">
                    {t.tier}
                  </td>
                  <td className="px-4 py-4 align-top text-muted">{t.definition}</td>
                  <td className="px-4 py-4 align-top text-muted">{t.claims}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          This page publishes methodology only. Named commercial product
          classifications will be issued after the founding council is seated and
          an appeals process is published.
        </p>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Why the framework exists</h2>
        <div className="prose-imtxi measure mt-6 text-muted">
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
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">How products will be classified</h2>
        <div className="prose-imtxi measure mt-6 text-muted">
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
      </Section>
    </>
  );
}
