import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Coding & Coverage",
  description:
    "Current status of procedure codes, device codes, and payer coverage for extended reality in clinical care.",
};

const LAST_UPDATED = "September 10, 2026";

const wcRows = [
  {
    state: "New York",
    status: "Case-by-case / evolving",
    notes:
      "No statewide immersive-therapy-specific fee schedule entry widely published. Confirm with carrier and treating specialty board guidance.",
  },
  {
    state: "New Jersey",
    status: "Unknown / confirm locally",
    notes:
      "Public WC fee schedule does not clearly enumerate XR therapy delivery. Documentation and medical necessity drive review.",
  },
  {
    state: "Pennsylvania",
    status: "Unknown / confirm locally",
    notes:
      "No dedicated immersive therapy code identified in publicly reviewed materials. Carrier policies vary.",
  },
  {
    state: "California",
    status: "Case-by-case / evolving",
    notes:
      "OMFS and MTUS references should be verified for each claim type. Device vs. professional service billing treated separately.",
  },
  {
    state: "Texas",
    status: "Unknown / confirm locally",
    notes:
      "DWC fee guidelines do not appear to list a dedicated immersive therapy delivery code. Confirm with adjusting carrier.",
  },
  {
    state: "Florida",
    status: "Unknown / confirm locally",
    notes:
      "No immersive-therapy-specific statewide fee schedule line identified in publicly reviewed materials.",
  },
];

export default function ReimbursementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reimbursement"
        title="Coding and coverage for immersive therapeutics"
        description="Current status of procedure codes, device codes, and payer coverage for extended reality in clinical care. Updated monthly."
      />

      <Section>
        <p className="text-sm text-muted">
          Last updated: <time dateTime="2026-09-10">{LAST_UPDATED}</time>
        </p>
        <p className="measure mt-4 text-sm text-muted">
          This page summarizes publicly discussed coding pathways and known
          coverage gaps. It is not billing advice. Always confirm with current
          payer policy, counsel, and specialty societies.
        </p>
      </Section>

      <Section className="border-t border-rule !pt-10">
        <h2 className="text-2xl md:text-3xl">Device coding — HCPCS E1905</h2>
        <div className="prose-imtxi measure mt-6 text-muted">
          <p>
            <strong className="font-medium text-navy">E1905</strong> is the
            HCPCS Level II code commonly discussed for certain virtual reality
            cognitive behavioral therapy devices used for pain. Coverage and
            documentation expectations vary by DME MAC and plan. E1905 addresses
            a device pathway — it is not a professional service code for
            delivering immersive therapy sessions.
          </p>
          <p>
            Clinicians and DME suppliers should verify local coverage
            determinations, prior authorization requirements, and whether the
            specific product meets the code descriptor in effect at the time of
            billing.
          </p>
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Procedure coding</h2>
        <div className="prose-imtxi measure mt-6 text-muted">
          <p>
            <strong className="font-medium text-navy">
              There is currently no CPT code specific to immersive therapy
              delivery.
            </strong>{" "}
            In practice, clinics may report existing timed therapy or evaluation
            codes when the service otherwise meets those descriptors — or treat
            immersive delivery as an unreimbursed modality. Misapplication of
            existing codes carries audit and compliance risk.
          </p>
          <p>
            Establishing appropriate professional coding is a core Institute
            workstream. We will publish progress as council work advances.
          </p>
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Workers&apos; compensation starter table</h2>
        <p className="measure mt-4 text-sm text-muted">
          Initial six-state scan. Entries marked &ldquo;unknown&rdquo; mean we
          have not yet identified a clear published statewide policy specific to
          immersive therapy delivery. Expand and correct monthly.
        </p>
        <div className="mt-6 overflow-x-auto rounded-sm border border-rule">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-navy text-on-dark">
              <tr>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {wcRows.map((row, i) => (
                <tr
                  key={row.state}
                  className={i % 2 === 0 ? "bg-ground" : "bg-navy/[0.03]"}
                >
                  <td className="whitespace-nowrap px-4 py-4 align-top font-medium">
                    {row.state}
                  </td>
                  <td className="px-4 py-4 align-top text-muted">{row.status}</td>
                  <td className="px-4 py-4 align-top text-muted">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">Commercial coverage</h2>
        <div className="prose-imtxi measure mt-6 text-muted">
          <p>
            Commercial medical policies for immersive therapeutics remain
            uneven. Some plans address specific FDA-authorized devices; many
            remain silent on XR-delivered therapy as a professional service.
            Gaps include: absence of a dedicated delivery code, limited
            outcomes data acceptable to payers, and inconsistent medical
            necessity criteria across plans.
          </p>
        </div>
      </Section>

      <Section className="border-t border-rule">
        <h2 className="text-2xl md:text-3xl">What the Institute is doing</h2>
        <ul className="measure mt-6 space-y-3 text-muted">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Documenting coding pathways and coverage gaps on a monthly
              cadence.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Preparing a coding strategy for council review once seated.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Designing an outcomes registry to support future coverage
              evidence.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Inviting clinicians and centers to contribute de-identified case
              and policy observations via{" "}
              <a
                href="mailto:info@imtxi.com"
                className="text-teal underline underline-offset-2"
              >
                info@imtxi.com
              </a>
              .
            </span>
          </li>
        </ul>
        <div className="mt-8">
          <Button href="/join/practitioners">Contribute as a founding practitioner</Button>
        </div>
      </Section>
    </>
  );
}
