import type { Metadata } from "next";
import { Button } from "@/components/Button";
import {
  IconCenters,
  IconIndustry,
  IconPractitioners,
} from "@/components/ProgramIcons";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Founding membership is free for practitioners, centers, and industry partners.",
};

const paths = [
  {
    title: "Founding Practitioner",
    href: "/join/practitioners",
    Icon: IconPractitioners,
    offer:
      "Named as a Founding Practitioner, listed in the directory when it launches, first access to certification at no charge, monthly brief.",
  },
  {
    title: "Founding Center",
    href: "/join/centers",
    Icon: IconCenters,
    offer:
      "Named as a Founding Center, first access to accreditation, registry participation, standards preview.",
  },
  {
    title: "Founding Industry Partner",
    href: "/join/industry",
    Icon: IconIndustry,
    offer:
      "Seat on the industry advisory committee, standards preview and comment rights, listed as a founding partner.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Join as a founding member — free"
        description="Founding membership is free. The Institute will introduce fees only after its first standards are published. Founding members are grandfathered free, permanently."
      />
      <Section>
        <div className="mb-10 max-w-2xl rounded-sm border border-accent/25 bg-accent/[0.06] px-5 py-4">
          <p className="trust-line text-navy/80">
            <strong className="font-semibold text-navy">No payment required.</strong>{" "}
            No member portal. Under a few minutes to apply. Founding status is
            recorded when your form is received.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {paths.map((p) => (
            <article
              key={p.href}
              className="surface-card surface-card-hover flex flex-col p-6 md:p-7"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy/10 bg-navy/[0.04] text-teal">
                <p.Icon className="h-5 w-5" />
              </span>
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.offer}
              </p>
              <div className="mt-6">
                <Button href={p.href}>Apply</Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted">
          Interested in shaping standards directly?{" "}
          <a href="/council" className="font-medium text-teal underline underline-offset-2">
            Apply to the founding council
          </a>
          .
        </p>
      </Section>
    </>
  );
}
