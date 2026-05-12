import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Parlay",
  description: "Parlay Conference Management, LLC Privacy Policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "120px 24px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#34D399", marginBottom: 12, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 700, color: "#223A5E", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, color: "#64748b" }}>
            Parlay Conference Management, LLC · Last updated: May 9, 2026
          </p>
        </div>

        <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#334155", lineHeight: 1.75, fontSize: 15 }}>

          {/* Intro */}
          <Section>
            <SectionTitle>What this document is</SectionTitle>
            <P>This Privacy Policy explains what information Parlay collects when you use our platform, how we use it, and what rights you have over it. We&apos;ve written it in plain language because we think you deserve to understand what happens to your data.</P>
          </Section>

          <Section>
            <SectionTitle>Who we are</SectionTitle>
            <P>Parlay is a conference intelligence platform for revenue teams. We are operated by Parlay Conference Management, LLC, based in Castle Rock, Colorado. When this policy says &quot;Parlay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; it means Parlay Conference Management, LLC.</P>
            <P>If you have questions about this policy or your data, contact us at <A href="mailto:privacy@useparlay.app">privacy@useparlay.app</A>.</P>
          </Section>

          <Section>
            <SectionTitle>What information we collect</SectionTitle>
            <SubTitle>Information you give us directly</SubTitle>
            <P>When you sign up for a trial or paid account, we collect:</P>
            <UL>
              <li>Your name, work email address, job title, and company name</li>
              <li>Optional information you choose to provide: your role, industry, revenue team size, number of conferences you attend annually, your primary conference goal, and your current conference management tool</li>
              <li>Payment information when you subscribe to a paid plan — we use Stripe to process payments and do not store your card number, expiry date, or CVV on our servers</li>
            </UL>
            <P>When you use Parlay, we collect:</P>
            <UL>
              <li>Conference data you create or upload: conference names, dates, locations, attendee lists, company information, meeting records, notes, follow-ups, and touchpoints</li>
              <li>Files you upload: CSV files, business card images, and any documents you attach</li>
              <li>Communications within the platform: direct messages, group conversations, and notes</li>
            </UL>

            <SubTitle>Information collected automatically</SubTitle>
            <P>When you use Parlay, we automatically collect:</P>
            <UL>
              <li>Log data: your IP address, browser type, operating system, pages visited, and timestamps</li>
              <li>Usage data: which features you use, how often, and in what sequence — this helps us understand how the product is being used and where to improve it</li>
              <li>Device information: device type, screen resolution, and similar technical data</li>
            </UL>

            <SubTitle>Information from third parties</SubTitle>
            <P>If you connect a Google or Microsoft account for email integration, we receive access to your email sending capabilities as authorized by you. We do not read, index, or store the content of your emails beyond what is necessary to send them on your behalf.</P>
          </Section>

          <Section>
            <SectionTitle>How we use your information</SectionTitle>
            <SubTitle>To provide the service</SubTitle>
            <P>We use your data to operate Parlay — provisioning your account, running the scoring engines against your conference data, generating your analytics, and delivering the product you signed up for.</P>

            <SubTitle>To communicate with you</SubTitle>
            <P>We use your email address to send you:</P>
            <UL>
              <li>Account and trial status notifications</li>
              <li>Product updates and new feature announcements</li>
              <li>Billing and payment communications</li>
              <li>Responses to your support requests</li>
            </UL>
            <P>You can opt out of marketing emails at any time using the unsubscribe link in any email. You cannot opt out of transactional emails (billing, account status, security) while your account is active.</P>

            <SubTitle>To improve the product</SubTitle>
            <P>We analyze aggregated, anonymized usage patterns to understand how people use Parlay and how to make it better. We do not use your specific conference data or customer names to train AI models or sell to third parties.</P>

            <SubTitle>To process payments</SubTitle>
            <P>We share necessary billing information with Stripe, our payment processor, to handle subscription payments and invoices.</P>

            <SubTitle>To comply with legal obligations</SubTitle>
            <P>We may use or disclose your information when required by law, court order, or to protect the rights and safety of Parlay, our users, or others.</P>
          </Section>

          <Section>
            <SectionTitle>How we store and protect your information</SectionTitle>
            <SubTitle>Data isolation</SubTitle>
            <P>Each Parlay account is provisioned in its own isolated database. Your conference data, attendee lists, and company information are not stored in a shared database with other customers.</P>

            <SubTitle>Security measures</SubTitle>
            <P>We use industry-standard security practices including encryption in transit (TLS), encryption at rest, and access controls that limit who on our team can access customer data. We do not sell access to your data to any third party.</P>

            <SubTitle>Data retention</SubTitle>
            <P>We retain your data for as long as your account is active. If your account is cancelled or expires:</P>
            <UL>
              <li>Trial accounts enter a 7-day read-only grace period, followed by 90 days of inactive retention, followed by permanent deletion</li>
              <li>Paid accounts retain data for 90 days after cancellation before permanent deletion</li>
              <li>You can request earlier deletion by contacting <A href="mailto:privacy@useparlay.app">privacy@useparlay.app</A></li>
            </UL>

            <SubTitle>Backups</SubTitle>
            <P>We maintain backups of customer data to protect against data loss. Backup data is subject to the same security standards as live data and is deleted on the same schedule as the primary data.</P>
          </Section>

          <Section>
            <SectionTitle>Third parties we share data with</SectionTitle>
            <P>We share data with the following categories of service providers who help us operate Parlay. Each is bound by data processing agreements and is not permitted to use your data for their own purposes:</P>

            <div style={{ overflowX: "auto", marginTop: 16, marginBottom: 16, borderRadius: 10, border: "1px solid #e2e8f0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#f1f5f9" }}>
                    <Th>Provider</Th>
                    <Th>Purpose</Th>
                    <Th>Data shared</Th>
                  </tr>
                </thead>
                <tbody>
                  <TR even>
                    <Td bold>Turso</Td>
                    <Td>Database infrastructure</Td>
                    <Td>All account and application data</Td>
                  </TR>
                  <TR>
                    <Td bold>Stripe</Td>
                    <Td>Payment processing</Td>
                    <Td>Name, email, billing information</Td>
                  </TR>
                  <TR even>
                    <Td bold>Vercel</Td>
                    <Td>Application hosting</Td>
                    <Td>Request logs, application data</Td>
                  </TR>
                  <TR>
                    <Td bold>Anthropic</Td>
                    <Td>AI features (card scanning, prospect recommendations, executive narratives)</Td>
                    <Td>Business card images, conference data as needed for AI processing</Td>
                  </TR>
                  <TR even>
                    <Td bold>Resend</Td>
                    <Td>Transactional email delivery</Td>
                    <Td>Name, email address</Td>
                  </TR>
                </tbody>
              </table>
            </div>

            <P>We do not sell your personal information to data brokers, advertisers, or any other third party.</P>
          </Section>

          <Section>
            <SectionTitle>AI features and your data</SectionTitle>
            <P>Parlay uses AI to power several features including business card scanning, prospect recommendations, and AI-generated conference narratives. These features are powered by Anthropic&apos;s Claude API.</P>
            <P>When you use these features, relevant data (such as a business card image or conference statistics) is sent to Anthropic&apos;s API for processing. Anthropic&apos;s privacy policy governs how they handle this data. We do not use your data to train AI models, and we do not share identifiable customer data with Anthropic beyond what is necessary to process your specific request.</P>
          </Section>

          <Section>
            <SectionTitle>Your rights</SectionTitle>
            <P>Depending on where you are located, you may have the following rights regarding your personal data:</P>
            <P><strong>Access:</strong> You can request a copy of the personal data we hold about you.</P>
            <P><strong>Correction:</strong> You can ask us to correct inaccurate or incomplete data.</P>
            <P><strong>Deletion:</strong> You can request that we delete your personal data. We will comply unless we are required to retain it by law or for legitimate business purposes.</P>
            <P><strong>Portability:</strong> You can request your data in a machine-readable format.</P>
            <P><strong>Objection:</strong> You can object to certain types of processing, including marketing communications.</P>
            <P><strong>CCPA rights (California residents):</strong> You have the right to know what personal information we collect, to delete your personal information, to opt out of the sale of your personal information (we do not sell personal information), and to non-discrimination for exercising these rights.</P>
            <P><strong>Colorado Privacy Act rights (Colorado residents):</strong> You have the right to access, correct, delete, and obtain a copy of your personal data. You have the right to opt out of the processing of your personal data for purposes of targeted advertising, the sale of personal data, or profiling. We do not sell personal data or use it for targeted advertising.</P>
            <P><strong>GDPR rights (EEA residents):</strong> You have all the rights listed above plus the right to restrict processing and to withdraw consent where processing is based on consent.</P>
            <P>To exercise any of these rights, contact us at <A href="mailto:privacy@useparlay.app">privacy@useparlay.app</A>. We will respond within 30 days.</P>
          </Section>

          <Section>
            <SectionTitle>Cookies</SectionTitle>
            <P>Parlay uses cookies and similar technologies to:</P>
            <UL>
              <li>Keep you logged in between sessions (authentication cookies — required)</li>
              <li>Remember your preferences (functional cookies — required)</li>
              <li>Understand how the product is used (analytics cookies — optional)</li>
            </UL>
            <P>You can control cookie settings through your browser. Disabling required cookies will prevent you from using Parlay. Disabling analytics cookies will not affect your ability to use the product.</P>
          </Section>

          <Section>
            <SectionTitle>Children&apos;s privacy</SectionTitle>
            <P>Parlay is a business-to-business product designed for professional use. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has provided us with personal information, contact us at <A href="mailto:privacy@useparlay.app">privacy@useparlay.app</A> and we will delete it.</P>
          </Section>

          <Section>
            <SectionTitle>Changes to this policy</SectionTitle>
            <P>We may update this policy as our product and legal obligations evolve. When we make material changes, we will notify you by email and update the &quot;Last updated&quot; date at the top of this document. Your continued use of Parlay after notification constitutes acceptance of the updated policy.</P>
          </Section>

          <Section last>
            <SectionTitle>Contact</SectionTitle>
            <P>For privacy questions, data requests, or concerns:</P>
            <div style={{ background: "#f1f5f9", borderRadius: 10, padding: "16px 20px", marginTop: 8 }}>
              <P style={{ margin: 0 }}>Email: <A href="mailto:privacy@useparlay.app">privacy@useparlay.app</A></P>
              <P style={{ margin: "8px 0 0" }}>Address: Parlay Conference Management, LLC<br />5418 Coltin Trail<br />Castle Rock, CO 80104</P>
            </div>
          </Section>

        </div>
      </div>
      <Footer />
    </main>
  );
}

// ── Layout helpers ────────────────────────────────────────────────────────────
function Section({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : 40, paddingBottom: last ? 0 : 40, borderBottom: last ? "none" : "1px solid #e2e8f0" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 700, color: "#223A5E", marginBottom: 14, marginTop: 0 }}>
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#223A5E", marginBottom: 8, marginTop: 20 }}>
      {children}
    </h3>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ margin: "0 0 12px", ...style }}>{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul style={{ margin: "0 0 12px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 6 }}>
      {children}
    </ul>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} style={{ color: "#34D399", textDecoration: "underline", textUnderlineOffset: 2 }}>{children}</a>;
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ textAlign: "left", padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em" }}>{children}</th>;
}

function TR({ children, even }: { children: React.ReactNode; even?: boolean }) {
  return <tr style={{ borderTop: "1px solid #e2e8f0", background: even ? "#f8fafc" : "white" }}>{children}</tr>;
}

function Td({ children, bold }: { children: React.ReactNode; bold?: boolean }) {
  return <td style={{ padding: "10px 16px", verticalAlign: "top", fontWeight: bold ? 600 : 400, color: bold ? "#223A5E" : "#475569" }}>{children}</td>;
}
