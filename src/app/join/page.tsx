import type { Metadata } from "next";
import { Button } from "@/components/Button";
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
    offer:
      "Named as a Founding Practitioner, listed in the directory when it launches, first access to certification at no charge, monthly brief.",
  },
  {
    title: "Founding Center",
    href: "/join/centers",
    offer:
      "Named as a Founding Center, first access to accreditation, registry participation, standards preview.",
  },
  {
    title: "Founding Industry Partner",
    href: "/join/industry",
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
        <div className="grid gap-5 md:grid-cols-3">
          {paths.map((p) => (
            <article
              key={p.href}
              className="flex flex-col rounded-sm border border-rule p-6"
            >
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted">{p.offer}</p>
              <div className="mt-6">
                <Button href={p.href}>Apply</Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Interested in shaping standards directly?{" "}
          <a href="/council" className="text-teal underline underline-offset-2">
            Apply to the founding council
          </a>
          .
        </p>
      </Section>
    </>
  );
}
