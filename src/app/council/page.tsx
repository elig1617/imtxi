import type { Metadata } from "next";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubmitForm } from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Founding Council",
  description:
    "Call for founding council members to author the first evaluation standards for immersive therapeutics.",
};

export default function CouncilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Call for applications"
        title="Call for founding council members"
        description="The Institute is convening its founding council to author the first evaluation standards for immersive therapeutics."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="surface-card bg-tint-flat p-6">
              <p className="eyebrow mb-4">At a glance</p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Commitment</dt>
                  <dd className="mt-1 text-muted">
                    Approximately 8–10 hours per quarter · Two-year renewable terms
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Authorship</dt>
                  <dd className="mt-1 text-muted">
                    Named on published standards documents
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Independence</dt>
                  <dd className="mt-1 text-muted">
                    Majority of seats held by members unaffiliated with industry
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-xl">What council members do</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Author and review standards. Serve on one of four
                condition-specific committees. Named authorship on published
                documents. Two-year renewable terms. Approximately 8–10 hours per
                quarter.
              </p>
            </div>
            <div>
              <h2 className="text-xl">Who we&apos;re seeking</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Licensed clinicians and researchers in physical medicine and
                rehabilitation, physical therapy, occupational therapy,
                speech-language pathology, pain medicine, behavioral health, and
                neurology; regulatory affairs professionals with device
                experience; health services researchers and health economists.
              </p>
            </div>
            <div>
              <h2 className="text-xl">What we ask</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Credentials, a short statement of interest, and disclosure of
                industry relationships. You may email a CV to{" "}
                <a
                  href="mailto:council@imtxi.com"
                  className="text-teal underline underline-offset-2"
                >
                  council@imtxi.com
                </a>{" "}
                after submitting this form.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="form-panel p-6 md:p-8">
              <h2 className="mb-1 font-serif text-xl font-semibold">Application</h2>
              <p className="mb-6 text-sm text-muted">
                Required fields marked with *. Disclosures are reviewed for
                governance integrity.
              </p>
              <SubmitForm
                action="/api/council"
                successMessage="Thank you for applying to the founding council. We will review your materials and follow up by email."
              >
                <FormField label="Full name" name="name" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Credentials"
                    name="credentials"
                    required
                    placeholder="MD; PhD; PT, DPT…"
                  />
                  <FormField label="Specialty / field" name="specialty" required />
                </div>
                <FormField label="Institution" name="institution" required />
                <FormField label="Email" name="email" type="email" required />
                <FormField
                  label="Statement of interest"
                  name="statement"
                  as="textarea"
                  rows={6}
                  required
                  help="Up to about 300 words."
                />
                <FormField
                  label="Industry relationship disclosures"
                  name="disclosures"
                  as="textarea"
                  rows={4}
                  required
                  help="List relevant relationships, or write “None.”"
                />
              </SubmitForm>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
