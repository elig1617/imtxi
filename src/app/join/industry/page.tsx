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
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="surface-card bg-tint-flat p-6">
              <p className="eyebrow mb-3">What you receive</p>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Seat on the industry advisory committee
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Standards preview and comment rights
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Listed as a founding partner
                </li>
              </ul>
              <p className="trust-line mt-6 border-t border-rule pt-5">
                Industry partners do not vote on standards content. Free founding
                membership — no payment portal.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="form-panel p-6 md:p-8">
              <h2 className="mb-1 font-serif text-xl font-semibold">Application</h2>
              <p className="mb-6 text-sm text-muted">
                Required fields marked with *. Regulatory status is for intake —
                not classification.
              </p>
              <SubmitForm
                action="/api/join"
                successMessage="Thank you. Your industry partner interest has been recorded."
              >
                <input type="hidden" name="path" value="industry" />
                <FormField label="Company" name="company" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Contact name" name="contactName" required />
                  <FormField label="Website" name="website" type="url" />
                </div>
                <FormField label="Contact email" name="email" type="email" required />
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
          </div>
        </div>
      </Section>
    </>
  );
}
