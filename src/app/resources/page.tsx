import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "White paper placeholder, glossary of immersive therapeutics terms, bibliography stubs, and FDA MXR links.",
};

const glossary = [
  {
    term: "Medical Extended Reality (MXR)",
    def: "FDA terminology for medical applications of VR, AR, and related immersive technologies.",
  },
  {
    term: "Immersive therapeutics",
    def: "Clinically directed use of immersive technologies to diagnose, treat, or manage a medical condition.",
  },
  {
    term: "Virtual reality (VR)",
    def: "A fully immersive computer-generated environment typically delivered via a head-mounted display.",
  },
  {
    term: "Augmented reality (AR)",
    def: "Digital information overlaid on the user’s view of the physical environment.",
  },
  {
    term: "Mixed reality (MR)",
    def: "Systems that blend physical and digital objects with spatial registration and interaction.",
  },
  {
    term: "Head-mounted display (HMD)",
    def: "A wearable display device used to present immersive visual content.",
  },
  {
    term: "Presence",
    def: "The subjective sense of being in a mediated environment; relevant to engagement and therapeutic dosing.",
  },
  {
    term: "Cybersickness",
    def: "Motion-sickness-like symptoms that can occur with immersive displays; a safety and tolerability consideration.",
  },
  {
    term: "510(k) clearance",
    def: "FDA premarket notification pathway demonstrating substantial equivalence to a predicate device.",
  },
  {
    term: "De Novo classification",
    def: "FDA pathway for novel low- to moderate-risk devices without a suitable predicate.",
  },
  {
    term: "Establishment registration",
    def: "FDA registration of device establishments; does not by itself authorize therapeutic claims.",
  },
  {
    term: "General wellness product",
    def: "Products intended for wellness that may fall outside certain FDA device requirements when claims stay within guidance.",
  },
  {
    term: "HCPCS E1905",
    def: "Device code discussed for certain VR cognitive behavioral therapy devices used for pain; not a delivery CPT.",
  },
  {
    term: "CPT",
    def: "Current Procedural Terminology — codes for reporting medical procedures and services. No immersive-therapy-specific CPT exists today.",
  },
  {
    term: "DME MAC",
    def: "Durable Medical Equipment Medicare Administrative Contractor — regional contractors that administer DME claims and coverage.",
  },
  {
    term: "Outcomes registry",
    def: "A structured dataset of patient outcomes intended to support quality, coding, coverage, and surveillance.",
  },
  {
    term: "Facility accreditation",
    def: "Standards-based recognition that a clinical site meets published requirements for safe, documented immersive therapy delivery.",
  },
  {
    term: "Practitioner certification",
    def: "A credential indicating a licensed clinician has met published competencies for immersive therapy delivery.",
  },
];

const bibliography = [
  {
    cite: "Rizzo A, Koenig ST. Is clinical virtual reality ready for primetime? Neuropsychology. 2017.",
    note: "Overview of clinical VR readiness and research gaps.",
  },
  {
    cite: "Spiegel B, et al. Virtual reality for management of pain in hospitalized patients. PLOS ONE / related clinical VR pain literature.",
    note: "Hospital pain management applications of VR.",
  },
  {
    cite: "Trost Z, et al. Virtual reality approaches to pain: toward a state of the science. Pain. 2021 (and related reviews).",
    note: "Pain-focused VR evidence synthesis.",
  },
  {
    cite: "Laver KE, et al. Virtual reality for stroke rehabilitation. Cochrane Database Syst Rev.",
    note: "Systematic review of VR in stroke rehab.",
  },
  {
    cite: "Maples-Keller JL, et al. The use of virtual reality technology in the treatment of anxiety and other psychiatric disorders. Harv Rev Psychiatry.",
    note: "Psychiatric applications of VR exposure and related methods.",
  },
  {
    cite: "FDA CDRH. Medical Extended Reality program materials (OSEL / AR-VR research).",
    note: "Regulatory science framing for MXR evaluation methods.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Documents, glossary, and references"
        description="Foundational materials for clinicians, researchers, and standards participants."
      />

      <Section>
        <div className="rounded-sm border border-rule p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h2 className="text-2xl">White paper</h2>
            <StatusBadge tone="progress">Placeholder</StatusBadge>
          </div>
          <p className="measure text-muted">
            <em>Defining Immersive Therapeutics</em> — category definition, the
            four-tier framework, the infrastructure gap, and what the Institute
            will build. PDF forthcoming. Request notification via the newsletter
            or{" "}
            <a
              href="mailto:info@imtxi.com"
              className="text-teal underline underline-offset-2"
            >
              info@imtxi.com
            </a>
            .
          </p>
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Glossary</h2>
        <dl className="mt-8 divide-y divide-rule border-y border-rule">
          {glossary.map((g) => (
            <div key={g.term} className="grid gap-2 py-4 md:grid-cols-12">
              <dt className="font-medium md:col-span-4">{g.term}</dt>
              <dd className="text-muted md:col-span-8">{g.def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Bibliography stubs</h2>
        <p className="measure mt-4 text-sm text-muted">
          Starting citations for a curated VR therapy bibliography. Full PubMed
          list expanding.
        </p>
        <ul className="mt-6 space-y-4">
          {bibliography.map((b) => (
            <li key={b.cite} className="border-l-2 border-accent/40 pl-4">
              <p className="text-sm text-navy">{b.cite}</p>
              <p className="mt-1 text-sm text-muted">{b.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">External links</h2>
        <ul className="mt-6 space-y-2 text-muted">
          <li>
            <a
              href="https://www.fda.gov/"
              className="text-teal underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              U.S. Food and Drug Administration
            </a>{" "}
            — device regulation and MXR program materials
          </li>
          <li>
            <a
              href="mailto:OSEL_ARVR@fda.hhs.gov"
              className="text-teal underline underline-offset-2"
            >
              OSEL_ARVR@fda.hhs.gov
            </a>{" "}
            — FDA CDRH MXR research contact (public)
          </li>
        </ul>
      </Section>
    </>
  );
}
