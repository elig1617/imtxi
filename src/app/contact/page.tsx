import type { Metadata } from "next";
import { FormField } from "@/components/FormField";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SubmitForm } from "@/components/SubmitForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Institute for Immersive Therapeutics.",
};

const emails = [
  { label: "General", value: siteConfig.email.general },
  { label: "Media", value: siteConfig.email.media },
  { label: "Council", value: siteConfig.email.council },
  { label: "Standards", value: siteConfig.email.standards },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="General inquiries, media, council applications, and standards participation."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-xl">Direct email</h2>
            <ul className="mt-6 space-y-4">
              {emails.map((e) => (
                <li key={e.value} className="surface-card px-4 py-3.5">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {e.label}
                  </span>
                  <a
                    href={`mailto:${e.value}`}
                    className="mt-1 inline-block text-teal underline underline-offset-2"
                  >
                    {e.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="trust-line mt-6">
              We respond to institutional inquiries as promptly as capacity
              allows. Council and membership forms are preferred for those
              pathways.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="form-panel p-6 md:p-8">
              <h2 className="mb-1 font-serif text-xl font-semibold">Message</h2>
              <p className="mb-6 text-sm text-muted">
                Prefer a form? Send a note and we will route it to the right desk.
              </p>
              <SubmitForm action="/api/contact">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Name" name="name" required />
                  <FormField label="Email" name="email" type="email" required />
                </div>
                <FormField
                  label="Topic"
                  name="topic"
                  as="select"
                  required
                  options={[
                    { value: "general", label: "General" },
                    { value: "media", label: "Media" },
                    { value: "council", label: "Council" },
                    { value: "standards", label: "Standards participation" },
                    { value: "other", label: "Other" },
                  ]}
                />
                <FormField
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={5}
                  required
                />
              </SubmitForm>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
