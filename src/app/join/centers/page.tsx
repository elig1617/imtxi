import type { Metadata } from "next";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubmitForm } from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Founding Center",
  description: "Join free as a Founding Center of IMTXI.",
};

export default function CentersJoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join · Free"
        title="Founding Center"
        description="For clinics, hospitals, and rehab facilities building immersive therapy programs."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="surface-card bg-tint-flat p-6">
              <p className="eyebrow mb-3">What you receive</p>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Named as a Founding Center
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  First access to accreditation
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Registry participation
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Standards preview
                </li>
              </ul>
              <p className="trust-line mt-6 border-t border-rule pt-5">
                Free forever for founding centers. No payment required at this
                stage.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="form-panel p-6 md:p-8">
              <h2 className="mb-1 font-serif text-xl font-semibold">Application</h2>
              <p className="mb-6 text-sm text-muted">
                Required fields marked with *. Organizational contact only.
              </p>
              <SubmitForm
                action="/api/join"
                successMessage="Thank you. Your center interest has been recorded. We will follow up by email."
              >
                <input type="hidden" name="path" value="centers" />
                <FormField label="Organization" name="organization" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Contact name" name="contactName" required />
                  <FormField label="Contact title" name="contactTitle" />
                </div>
                <FormField label="Contact email" name="email" type="email" required />
                <FormField
                  label="Setting type"
                  name="settingType"
                  as="select"
                  required
                  options={[
                    { value: "outpatient", label: "Outpatient clinic" },
                    { value: "hospital", label: "Hospital" },
                    { value: "rehab", label: "Rehab facility" },
                    { value: "snf", label: "SNF / post-acute" },
                    { value: "academic", label: "Academic medical center" },
                    { value: "other", label: "Other" },
                  ]}
                />
                <FormField
                  label="Approximate patient volume"
                  name="patientVolume"
                  placeholder="e.g., 50 immersive sessions / month"
                />
                <FormField label="Devices in use" name="devices" as="textarea" rows={3} />
                <FormField
                  label="Conditions treated"
                  name="conditions"
                  as="textarea"
                  rows={3}
                />
              </SubmitForm>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
