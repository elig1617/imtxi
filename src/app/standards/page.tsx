import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Standards",
  description:
    "What the Institute is building: evaluation standards, practitioner certification, facility accreditation, and outcomes registry.",
};

const workstreams = [
  {
    title: "Evaluation Framework",
    status: "Methodology published",
    tone: "accent" as const,
    body: "Four-tier classification based on regulatory status and clinical evidence. Product classifications begin after the founding council is seated.",
  },
  {
    title: "Practitioner Certification",
    status: "In development",
    tone: "progress" as const,
    body: "A modality credential for licensed clinicians. Scope, competencies, and assessment design will be authored by the council.",
  },
  {
    title: "Facility Accreditation",
    status: "In development",
    tone: "progress" as const,
    body: "Standards for safe, documented delivery environments — staffing, protocols, infection control considerations, and documentation.",
  },
  {
    title: "Outcomes Registry",
    status: "In development",
    tone: "progress" as const,
    body: "A national dataset to support coding strategy, coverage evidence, and post-market surveillance for immersive therapeutics.",
  },
];

const committees = [
  "Musculoskeletal & pain rehabilitation",
  "Neurologic rehabilitation",
  "Behavioral health & cognitive conditions",
  "Regulatory affairs & health economics",
];

export default function StandardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Standards"
        title="What we are building"
        description="Four workstreams, condition-specific committees, and an open development process."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {workstreams.map((w) => (
            <article key={w.title} className="rounded-sm border border-rule p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <h2 className="text-xl">{w.title}</h2>
                <StatusBadge tone={w.tone}>{w.status}</StatusBadge>
              </div>
              <p className="text-sm text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Committees</h2>
        <p className="measure mt-4 text-muted">
          Council members serve on condition-specific committees that draft and
          review standards language.
        </p>
        <ul className="mt-6 space-y-2 text-muted">
          {committees.map((c) => (
            <li key={c} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Development process</h2>
        <ol className="measure mt-6 list-decimal space-y-3 pl-5 text-muted">
          <li>Council drafts methodology and standards language.</li>
          <li>Draft published for public comment.</li>
          <li>Comments and dispositions posted.</li>
          <li>Council adopts; version published with effective date.</li>
          <li>Periodic review on a published schedule.</li>
        </ol>
        <p className="measure mt-6 text-sm text-muted">
          Public comment infrastructure will launch with the first draft
          standard. Until then, write to{" "}
          <a
            href="mailto:standards@imtxi.com"
            className="text-teal underline underline-offset-2"
          >
            standards@imtxi.com
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/council">Apply to the founding council</Button>
          <Button href="/framework" variant="secondary">
            Read the framework
          </Button>
        </div>
      </Section>
    </>
  );
}
