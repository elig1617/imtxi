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
        <div className="mb-8 max-w-2xl rounded-sm border border-rule bg-navy/[0.02] p-5 text-sm text-muted">
          <p>
            Named as a Founding Center, first access to accreditation, registry
            participation, and standards preview.
          </p>
        </div>
        <div className="max-w-xl">
          <SubmitForm
            action="/api/join"
            successMessage="Thank you. Your center interest has been recorded. We will follow up by email."
          >
            <input type="hidden" name="path" value="centers" />
            <FormField label="Organization" name="organization" required />
            <FormField label="Contact name" name="contactName" required />
            <FormField label="Contact email" name="email" type="email" required />
            <FormField label="Contact title" name="contactTitle" />
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
      </Section>
    </>
  );
}
