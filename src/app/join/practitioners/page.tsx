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
        <div className="mb-8 max-w-2xl rounded-sm border border-rule bg-navy/[0.02] p-5 text-sm text-muted">
          <p>
            You will be named as a Founding Practitioner, listed in the
            directory when it launches, receive first access to certification at
            no charge, and the monthly brief.
          </p>
        </div>
        <div className="max-w-xl">
          <SubmitForm
            action="/api/join"
            successMessage="Thank you. You are registered as a Founding Practitioner interest. We will follow up by email."
          >
            <input type="hidden" name="path" value="practitioners" />
            <FormField label="Full name" name="name" required />
            <FormField
              label="Credentials"
              name="credentials"
              required
              placeholder="PT, DPT; MD; OTR/L…"
            />
            <FormField label="Email" name="email" type="email" required />
            <FormField label="License type" name="licenseType" required />
            <FormField label="License state" name="licenseState" required />
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
      </Section>
    </>
  );
}
