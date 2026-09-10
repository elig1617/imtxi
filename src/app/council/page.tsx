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
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl">What council members do</h2>
              <p className="mt-3 text-muted">
                Author and review standards. Serve on one of four
                condition-specific committees. Named authorship on published
                documents. Two-year renewable terms. Approximately 8–10 hours per
                quarter.
              </p>
            </div>
            <div>
              <h2 className="text-xl">Who we&apos;re seeking</h2>
              <p className="mt-3 text-muted">
                Licensed clinicians and researchers in physical medicine and
                rehabilitation, physical therapy, occupational therapy,
                speech-language pathology, pain medicine, behavioral health, and
                neurology; regulatory affairs professionals with device
                experience; health services researchers and health economists.
              </p>
            </div>
            <div>
              <h2 className="text-xl">What we ask</h2>
              <p className="mt-3 text-muted">
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

          <div className="rounded-sm border border-rule p-6">
            <h2 className="mb-5 text-xl">Application</h2>
            <SubmitForm
              action="/api/council"
              successMessage="Thank you for applying to the founding council. We will review your materials and follow up by email."
            >
              <FormField label="Full name" name="name" required />
              <FormField
                label="Credentials"
                name="credentials"
                required
                placeholder="MD; PhD; PT, DPT…"
              />
              <FormField label="Institution" name="institution" required />
              <FormField label="Specialty / field" name="specialty" required />
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
      </Section>
    </>
  );
}
