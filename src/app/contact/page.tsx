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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="General inquiries, media, council applications, and standards participation."
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl">Direct email</h2>
            <ul className="mt-5 space-y-3 text-muted">
              <li>
                <span className="block text-xs uppercase tracking-[0.15em] text-muted">
                  General
                </span>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="text-teal underline underline-offset-2"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.15em] text-muted">
                  Media
                </span>
                <a
                  href={`mailto:${siteConfig.email.media}`}
                  className="text-teal underline underline-offset-2"
                >
                  {siteConfig.email.media}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.15em] text-muted">
                  Council
                </span>
                <a
                  href={`mailto:${siteConfig.email.council}`}
                  className="text-teal underline underline-offset-2"
                >
                  {siteConfig.email.council}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.15em] text-muted">
                  Standards
                </span>
                <a
                  href={`mailto:${siteConfig.email.standards}`}
                  className="text-teal underline underline-offset-2"
                >
                  {siteConfig.email.standards}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-rule p-6">
            <h2 className="mb-5 text-xl">Message</h2>
            <SubmitForm action="/api/contact">
              <FormField label="Name" name="name" required />
              <FormField label="Email" name="email" type="email" required />
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
      </Section>
    </>
  );
}
