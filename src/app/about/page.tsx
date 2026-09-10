import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { hasFoundingSponsor, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why the Institute for Immersive Therapeutics exists, how it is governed, and founding sponsorship disclosure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building the missing infrastructure for immersive therapeutics"
        description="An independent nonprofit standards body for extended reality in clinical care."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Mission</p>
            <h2 className="text-2xl md:text-3xl">Why the Institute exists</h2>
          </div>
          <div className="prose-imtxi measure md:col-span-8 text-muted">
            <p>
              Immersive technologies have moved from research settings into
              clinical practice faster than the infrastructure supporting them.
              Devices reach patients without a shared standard for evaluating
              them. Clinicians deliver treatment without a recognized credential.
              Outcomes are recorded in scattered systems and rarely aggregated.
              And because there is no procedure code for delivering immersive
              therapy, most of this work is unreimbursed — which limits access far
              more than any technical constraint.
            </p>
            <p>
              The Institute was founded to build that missing infrastructure:
              evaluation standards, a practitioner credential, facility
              accreditation, and a national outcomes registry.
            </p>
          </div>
        </div>
      </Section>

      <Section tint className="border-y border-rule">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Governance</p>
            <h2 className="text-2xl md:text-3xl">How we are governed</h2>
          </div>
          <div className="prose-imtxi measure md:col-span-8 text-muted">
            <p>
              The Institute is an independent nonprofit organization. Its
              standards are developed by a council of clinicians, researchers, and
              regulatory experts, with a majority of seats held by independent
              members unaffiliated with industry. Standards are published in draft
              for public comment before adoption. All comments and their
              dispositions are posted.
            </p>
            <p>
              Membership is open to any organization meeting published criteria.
              Certification and accreditation decisions are subject to a written
              appeals process.
            </p>
            <p>
              The founding council is currently being seated. Until the council is
              convened, the Institute publishes methodology and status information
              only — not product classifications or certification decisions.
            </p>
          </div>
        </div>
      </Section>

      {hasFoundingSponsor() && (
        <Section>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-3">Disclosure</p>
              <h2 className="text-2xl md:text-3xl">Founding sponsorship</h2>
            </div>
            <div className="prose-imtxi measure md:col-span-8 text-muted">
              <p>
                The Institute&apos;s formation was funded by{" "}
                <strong className="font-medium text-navy">
                  {siteConfig.foundingSponsor}
                </strong>
                . Founding sponsors are disclosed here, hold no vote on standards
                content, and receive no preference in certification, accreditation,
                or classification decisions.
              </p>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
