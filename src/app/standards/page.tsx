import type { Metadata } from "next";
import { Button } from "@/components/Button";
import {
  IconCertification,
  IconFacility,
  IconFramework,
  IconRegistry,
} from "@/components/ProgramIcons";
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
    Icon: IconFramework,
  },
  {
    title: "Practitioner Certification",
    status: "In development",
    tone: "progress" as const,
    body: "A modality credential for licensed clinicians. Scope, competencies, and assessment design will be authored by the council.",
    Icon: IconCertification,
  },
  {
    title: "Facility Accreditation",
    status: "In development",
    tone: "progress" as const,
    body: "Standards for safe, documented delivery environments — staffing, protocols, infection control considerations, and documentation.",
    Icon: IconFacility,
  },
  {
    title: "Outcomes Registry",
    status: "In development",
    tone: "progress" as const,
    body: "A national dataset to support coding strategy, coverage evidence, and post-market surveillance for immersive therapeutics.",
    Icon: IconRegistry,
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
            <article key={w.title} className="surface-card p-6 md:p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy/10 bg-navy/[0.04] text-teal">
                  <w.Icon className="h-5 w-5" />
                </span>
                <StatusBadge tone={w.tone}>{w.status}</StatusBadge>
              </div>
              <h2 className="text-xl md:text-[1.35rem]">{w.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tint className="border-y border-rule">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Structure</p>
            <h2 className="text-2xl md:text-3xl">Committees</h2>
          </div>
          <div className="md:col-span-8">
            <p className="measure text-muted">
              Council members serve on condition-specific committees that draft and
              review standards language.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {committees.map((c) => (
                <li
                  key={c}
                  className="surface-card flex items-start gap-3 px-4 py-3.5 text-sm text-navy/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Process</p>
            <h2 className="text-2xl md:text-3xl">Development process</h2>
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-4">
              {[
                "Council drafts methodology and standards language.",
                "Draft published for public comment.",
                "Comments and dispositions posted.",
                "Council adopts; version published with effective date.",
                "Periodic review on a published schedule.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-navy text-xs font-bold text-on-dark">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 text-muted">{step}</span>
                </li>
              ))}
            </ol>
            <p className="measure mt-8 text-sm text-muted">
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
          </div>
        </div>
      </Section>
    </>
  );
}
