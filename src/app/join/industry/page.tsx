import type { Metadata } from "next";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubmitForm } from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Founding Industry Partner",
  description: "Join free as a Founding Industry Partner of IMTXI.",
};

export default function IndustryJoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join · Free"
        title="Founding Industry Partner"
        description="For device and software companies. Open membership is a design requirement — not a sales funnel."
      />
      <Section>
        <div className="mb-8 max-w-2xl rounded-sm border border-rule bg-navy/[0.02] p-5 text-sm text-muted">
          <p>
            Seat on the industry advisory committee, standards preview and
            comment rights, listed as a founding partner. Industry partners do
            not vote on standards content.
          </p>
        </div>
        <div className="max-w-xl">
          <SubmitForm
            action="/api/join"
            successMessage="Thank you. Your industry partner interest has been recorded."
          >
            <input type="hidden" name="path" value="industry" />
            <FormField label="Company" name="company" required />
            <FormField label="Contact name" name="contactName" required />
            <FormField label="Contact email" name="email" type="email" required />
            <FormField label="Website" name="website" type="url" />
            <FormField
              label="Products"
              name="products"
              as="textarea"
              rows={3}
              required
              help="List product names and brief descriptions."
            />
            <FormField
              label="Regulatory status of each"
              name="regulatoryStatus"
              as="textarea"
              rows={3}
              required
              help="e.g., 510(k) cleared; De Novo; establishment registered; wellness only."
            />
            <FormField
              label="Target indications"
              name="indications"
              as="textarea"
              rows={3}
            />
          </SubmitForm>
        </div>
      </Section>
    </>
  );
}
