import Link from "next/link";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

const programs = [
  {
    title: "Evaluation Framework",
    body: "A four-tier classification distinguishing cleared therapeutic devices from registered products and wellness applications.",
    href: "/framework",
    status: null as string | null,
  },
  {
    title: "Practitioner Certification",
    body: "A modality credential for licensed clinicians delivering immersive therapy.",
    href: "/standards",
    status: "In development",
  },
  {
    title: "Facility Accreditation",
    body: "Standards for safe, documented delivery of immersive therapy in clinical settings.",
    href: "/standards",
    status: "In development",
  },
  {
    title: "Outcomes Registry",
    body: "A national dataset of immersive therapy outcomes, built to support coding, coverage, and post-market surveillance.",
    href: "/standards",
    status: "In development",
  },
];

const joinPaths = [
  {
    title: "Practitioners",
    body: "Licensed clinicians delivering or preparing to deliver immersive therapy.",
    href: "/join/practitioners",
  },
  {
    title: "Centers",
    body: "Clinics, hospitals, and rehab facilities building immersive therapy programs.",
    href: "/join/centers",
  },
  {
    title: "Industry",
    body: "Device and software companies seeking standards participation and comment rights.",
    href: "/join/industry",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Institute for Immersive Therapeutics
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
            Standards for extended reality in clinical care.
          </h1>
          <p className="measure mt-6 text-lg text-muted md:text-xl">
            The Institute for Immersive Therapeutics is developing the first
            evaluation framework, practitioner credential, and outcomes registry
            for immersive therapy in medicine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/framework">Read the framework</Button>
            <Button href="/join" variant="secondary">
              Join as a founding member
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          A clinical category without a foundation
        </h2>
        <div className="measure mt-6 space-y-4 text-muted">
          <p>
            The FDA has recognized Medical Extended Reality since 2018 and has
            authorized roughly 40 devices. Its own research program identifies
            the central gap: the field lacks standardized methods for evaluating
            these technologies.
          </p>
          <p>
            There is no evaluation standard. No practitioner credential. No
            facility accreditation. No outcomes registry. No procedure code for
            delivering immersive therapy.
          </p>
          <p>
            Patients are being treated with these systems today. The
            infrastructure that governs how, by whom, and with what evidence does
            not yet exist.
          </p>
        </div>
      </Section>

      <Section className="border-y border-rule !py-16">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Programs
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-sm border border-rule bg-ground p-6 transition-colors hover:border-navy/25"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl">{p.title}</h3>
                {p.status && <StatusBadge tone="progress">{p.status}</StatusBadge>}
              </div>
              <p className="text-[0.95rem] text-muted">{p.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl text-3xl text-on-dark md:text-4xl">
          We are forming the founding council
        </h2>
        <div className="measure mt-6 space-y-4 text-on-dark/85">
          <p>
            The Institute is convening clinicians, researchers, and regulatory
            experts to author its first standards. Council members shape the
            framework, are named on the published documents, and serve two-year
            terms.
          </p>
          <p>
            We are seeking representation across physical medicine and
            rehabilitation, physical and occupational therapy, speech-language
            pathology, pain medicine, behavioral health, and regulatory affairs.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/council">Apply to the founding council</Button>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl">Three free founding paths</h2>
        <p className="measure mt-4 text-muted">
          Founding membership is free. The Institute will introduce fees only
          after its first standards are published. Founding members are
          grandfathered free, permanently.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {joinPaths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-sm border border-rule p-6"
            >
              <h3 className="text-xl">{path.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{path.body}</p>
              <div className="mt-5">
                <Button href={path.href} variant="secondary">
                  Join free
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-rule">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="text-2xl md:text-3xl">Stay informed</h2>
            <p className="mt-3 text-muted">
              Get the Institute&apos;s monthly brief on standards, coding, and
              coverage developments in immersive therapeutics.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
