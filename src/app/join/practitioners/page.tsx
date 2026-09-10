import type { Metadata } from "next";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubmitForm } from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Founding Practitioner",
  description: "Join free as a Founding Practitioner of IMTXI.",
};

export default function PractitionersJoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join · Free"
        title="Founding Practitioner"
        description="For licensed clinicians delivering or preparing to deliver immersive therapy. No account required — under 90 seconds."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="surface-card bg-tint-flat p-6">
              <p className="eyebrow mb-3">What you receive</p>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Named as a Founding Practitioner
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Listed in the directory when it launches
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  First access to certification at no charge
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Monthly standards brief
                </li>
              </ul>
              <p className="trust-line mt-6 border-t border-rule pt-5">
                Free forever for founding members. No payment portal. No
                password account at this stage.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="form-panel p-6 md:p-8">
              <h2 className="mb-1 font-serif text-xl font-semibold">Application</h2>
              <p className="mb-6 text-sm text-muted">
                Required fields marked with *. We follow up by email only.
              </p>
              <SubmitForm
                action="/api/join"
                successMessage="Thank you. You are registered as a Founding Practitioner interest. We will follow up by email."
              >
                <input type="hidden" name="path" value="practitioners" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full name" name="name" required />
                  <FormField
                    label="Credentials"
                    name="credentials"
                    required
                    placeholder="PT, DPT; MD; OTR/L…"
                  />
                </div>
                <FormField label="Email" name="email" type="email" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="License type" name="licenseType" required />
                  <FormField label="License state" name="licenseState" required />
                </div>
                <FormField
                  label="Practice setting"
                  name="practiceSetting"
                  as="select"
                  required
                  options={[
                    { value: "outpatient", label: "Outpatient clinic" },
                    { value: "hospital", label: "Hospital / inpatient" },
                    { value: "rehab", label: "Rehab facility" },
                    { value: "academic", label: "Academic / research" },
                    { value: "private", label: "Private practice" },
                    { value: "other", label: "Other" },
                  ]}
                />
                <FormField
                  label="Modalities used"
                  name="modalities"
                  help="e.g., VR exposure, immersive motor rehab, pain CBT"
                />
                <FormField
                  label="Devices used"
                  name="devices"
                  help="General categories welcome; product classification is not requested here."
                />
              </SubmitForm>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
