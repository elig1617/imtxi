import Link from "next/link";
import { Button } from "@/components/Button";
import { FrameworkLadderMini } from "@/components/FrameworkLadder";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  IconCenters,
  IconCertification,
  IconFacility,
  IconFramework,
  IconIndustry,
  IconPractitioners,
  IconRegistry,
} from "@/components/ProgramIcons";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

const programs = [
  {
    title: "Evaluation Framework",
    body: "A four-tier classification distinguishing cleared therapeutic devices from registered products and wellness applications.",
    href: "/framework",
    status: null as string | null,
    Icon: IconFramework,
  },
  {
    title: "Practitioner Certification",
    body: "A modality credential for licensed clinicians delivering immersive therapy.",
    href: "/standards",
    status: "In development",
    Icon: IconCertification,
  },
  {
    title: "Facility Accreditation",
    body: "Standards for safe, documented delivery of immersive therapy in clinical settings.",
    href: "/standards",
    status: "In development",
    Icon: IconFacility,
  },
  {
    title: "Outcomes Registry",
    body: "A national dataset of immersive therapy outcomes, built to support coding, coverage, and post-market surveillance.",
    href: "/standards",
    status: "In development",
    Icon: IconRegistry,
  },
];

const joinPaths = [
  {
    title: "Practitioners",
    body: "Licensed clinicians delivering or preparing to deliver immersive therapy.",
    href: "/join/practitioners",
    Icon: IconPractitioners,
  },
  {
    title: "Centers",
    body: "Clinics, hospitals, and rehab facilities building immersive therapy programs.",
    href: "/join/centers",
    Icon: IconCenters,
  },
  {
    title: "Industry",
    body: "Device and software companies seeking standards participation and comment rights.",
    href: "/join/industry",
    Icon: IconIndustry,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule bg-tint">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 88% 18%, rgba(154,123,79,0.14), transparent 42%), radial-gradient(circle at 12% 88%, rgba(11,59,60,0.08), transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Institute for Immersive Therapeutics</p>
            <div className="accent-rule mb-7" aria-hidden />
            <h1 className="max-w-2xl text-4xl leading-[1.12] md:text-5xl lg:text-[3.35rem]">
              Standards for extended reality in clinical care.
            </h1>
            <p className="measure mt-7 text-lg leading-relaxed text-muted md:text-xl">
              The Institute for Immersive Therapeutics is developing the first
              evaluation framework, practitioner credential, and outcomes registry
              for immersive therapy in medicine.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/framework">Read the framework</Button>
              <Button href="/join" variant="secondary">
                Join as a founding member
              </Button>
            </div>
            <p className="trust-line mt-6">
              Free founding membership · Independent governance · Methodology
              published in public
            </p>
          </div>
          <div className="lg:col-span-5">
            <FrameworkLadderMini />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">The gap</p>
            <h2 className="text-3xl md:text-4xl">
              A clinical category without a foundation
            </h2>
          </div>
          <div className="prose-imtxi measure md:col-span-7 text-muted">
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
        </div>
      </Section>

      <Section tint className="border-y border-rule">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Programs</p>
            <h2 className="text-3xl md:text-4xl">What the Institute builds</h2>
          </div>
          <Button href="/standards" variant="secondary">
            View standards roadmap
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="surface-card surface-card-hover group p-6 md:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy/10 bg-navy/[0.04] text-teal transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <p.Icon className="h-5 w-5" />
                </span>
                {p.status ? (
                  <StatusBadge tone="progress">{p.status}</StatusBadge>
                ) : (
                  <StatusBadge tone="accent">Methodology live</StatusBadge>
                )}
              </div>
              <h3 className="text-xl md:text-[1.35rem]">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {p.body}
              </p>
              <p className="mt-5 text-sm font-semibold text-teal group-hover:text-accent">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-on-dark/55">
              Governance
            </p>
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
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button href="/council" variant="onDark">
              Apply to the founding council
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-4">
          <p className="eyebrow mb-3">Membership</p>
          <h2 className="text-3xl md:text-4xl">Three free founding paths</h2>
        </div>
        <p className="measure mt-4 text-muted">
          Founding membership is free. The Institute will introduce fees only
          after its first standards are published. Founding members are
          grandfathered free, permanently.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {joinPaths.map((path) => (
            <div
              key={path.title}
              className="surface-card flex flex-col p-6 md:p-7"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy/10 bg-navy/[0.04] text-teal">
                <path.Icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl">{path.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {path.body}
              </p>
              <div className="mt-6">
                <Button href={path.href} variant="secondary">
                  Join free
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tint className="border-t border-rule">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-3">Updates</p>
            <h2 className="text-2xl md:text-3xl">Stay informed</h2>
            <p className="mt-4 text-muted">
              Get the Institute&apos;s monthly brief on standards, coding, and
              coverage developments in immersive therapeutics.
            </p>
          </div>
          <div className="surface-card p-5 md:p-6">
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
