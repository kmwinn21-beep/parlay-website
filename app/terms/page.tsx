import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Parlay",
  description: "Parlay Conference Management, LLC Terms of Service. The agreement governing your use of the Parlay platform.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, color: "#64748b" }}>
            Parlay Conference Management, LLC · Last updated: May 9, 2026
          </p>
        </div>

        <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "#334155", lineHeight: 1.75, fontSize: 15 }}>

          <Section>
            <SectionTitle>Agreement to terms</SectionTitle>
            <P>By creating a Parlay account or using our platform, you agree to these Terms of Service. If you are using Parlay on behalf of a company or organization, you represent that you have the authority to bind that organization to these terms. If you do not agree, do not use Parlay.</P>
            <P>These terms constitute a legally binding agreement between you (or your organization) and Parlay Conference Management, LLC (&quot;Parlay,&quot; &quot;we,&quot; &quot;us&quot;).</P>
          </Section>

          <Section>
            <SectionTitle>Description of service</SectionTitle>
            <P>Parlay is a conference intelligence platform that helps revenue teams manage conference relationships, generate targeting intelligence, track meeting and follow-up execution, and measure conference performance. We provide this service through a subscription model with multiple plan tiers.</P>
          </Section>

          <Section>
            <SectionTitle>Accounts and registration</SectionTitle>
            <SubTitle>Eligibility</SubTitle>
            <P>You must be at least 18 years old and capable of forming a binding contract to create a Parlay account. Parlay is a business product — it is intended for use by companies and professionals, not consumers.</P>

            <SubTitle>Account accuracy</SubTitle>
            <P>You agree to provide accurate, current, and complete information when creating your account and to keep that information updated. We reserve the right to suspend or terminate accounts that use false or misleading information.</P>

            <SubTitle>Account security</SubTitle>
            <P>You are responsible for maintaining the security of your account credentials. You agree not to share your password with others and to notify us immediately at <A href="mailto:support@useparlay.app">support@useparlay.app</A> if you suspect unauthorized access to your account. We are not liable for losses resulting from unauthorized use of your account that occur through no fault of ours.</P>

            <SubTitle>One account per organization</SubTitle>
            <P>Each organization may have one Parlay account. Creating multiple trial accounts to extend trial access is a violation of these terms and grounds for termination of all associated accounts.</P>
          </Section>

          <Section>
            <SectionTitle>Free trial</SectionTitle>
            <P>We offer a 14-day free trial with full access to all platform features (excluding Custom-tier features requiring scoped implementation). No credit card is required to start a trial.</P>
            <P>At the end of the trial period:</P>
            <UL>
              <li>Your account enters a 7-day read-only grace period during which you can view but not edit your data</li>
              <li>If you do not select a paid plan within the grace period, your account is deactivated</li>
              <li>Deactivated accounts are permanently deleted 90 days after deactivation with no recovery</li>
            </UL>
            <P>We reserve the right to modify trial terms, including duration and included features, at any time.</P>
          </Section>

          <Section>
            <SectionTitle>Subscriptions and payment</SectionTitle>
            <SubTitle>Billing</SubTitle>
            <P>Paid plans are billed on a recurring basis — monthly or annually depending on the option you select at checkout. Annual plans are billed as a single payment covering 12 months.</P>

            <SubTitle>Payment processing</SubTitle>
            <P>Payments are processed by Stripe. By providing payment information, you authorize us (through Stripe) to charge your payment method on the applicable billing cycle. You represent that you are authorized to use the payment method provided.</P>

            <SubTitle>Price changes</SubTitle>
            <P>We reserve the right to change subscription prices. We will provide at least 30 days advance notice of any price change by email and in-app notification. Your continued use of Parlay after the price change takes effect constitutes acceptance of the new pricing. If you do not accept a price change, you may cancel your subscription before the new price takes effect.</P>

            <SubTitle>Refunds</SubTitle>
            <P>We do not offer refunds for partial billing periods. If you cancel a monthly subscription, you retain access through the end of the current billing month. If you cancel an annual subscription, you retain access through the end of the annual period. No prorated refunds are issued for unused time.</P>
            <P>Exceptions may be made at our sole discretion for documented billing errors or technical failures that prevented access to the service. Contact <A href="mailto:billing@useparlay.app">billing@useparlay.app</A> within 30 days of the relevant charge to request a refund review.</P>

            <SubTitle>Failed payments</SubTitle>
            <P>If a payment fails, we will attempt to collect payment using Stripe&apos;s automatic retry logic. If payment cannot be collected, your account may be downgraded or suspended. We will notify you by email before taking any access-restricting action due to non-payment.</P>

            <SubTitle>Taxes</SubTitle>
            <P>Prices displayed do not include applicable taxes. We collect and remit sales tax where legally required. The applicable tax is calculated based on your billing address and will be shown before you complete your purchase.</P>
          </Section>

          <Section>
            <SectionTitle>Acceptable use</SectionTitle>
            <P>You agree to use Parlay only for lawful purposes and in accordance with these terms. You agree not to:</P>
            <UL>
              <li>Use Parlay to store, process, or transmit data in violation of applicable law</li>
              <li>Upload or process data without the authorization of the individuals whose data is included</li>
              <li>Attempt to gain unauthorized access to any part of the platform or another user&apos;s account</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the platform</li>
              <li>Use Parlay to build a competing product or service</li>
              <li>Resell, sublicense, or otherwise make the platform available to third parties without our written consent</li>
              <li>Upload malicious code, viruses, or any content designed to disrupt or damage the platform</li>
              <li>Use automated tools to scrape, crawl, or extract data from the platform beyond what our API expressly permits</li>
              <li>Create multiple accounts to circumvent plan limitations or access restrictions</li>
            </UL>
            <P>We reserve the right to suspend or terminate accounts that violate these terms without prior notice.</P>
          </Section>

          <Section>
            <SectionTitle>Your data</SectionTitle>
            <SubTitle>Ownership</SubTitle>
            <P>You own your data. Parlay claims no ownership over the conference data, attendee lists, company information, notes, or any other content you create or upload in the platform.</P>

            <SubTitle>License to us</SubTitle>
            <P>By using Parlay, you grant us a limited, non-exclusive license to store, process, and use your data solely for the purpose of providing the service to you. We do not use your data to train AI models, sell to third parties, or for any purpose beyond operating and improving the platform for your benefit.</P>

            <SubTitle>Responsibility for your data</SubTitle>
            <P>You are responsible for the data you upload and process in Parlay. You represent that you have the right to upload and process all data you provide, including attendee lists and contact information. You agree to comply with all applicable data protection laws with respect to the data you process using Parlay.</P>

            <SubTitle>Data processing</SubTitle>
            <P>For customers subject to GDPR, we are a data processor with respect to personal data you upload. You are the data controller. We will process personal data only on your instructions as described in our Privacy Policy and in accordance with any Data Processing Agreement executed between us.</P>

            <SubTitle>Data portability</SubTitle>
            <P>You can export your data from Parlay at any time using the platform&apos;s export tools. Upon account termination, we will make your data available for export for 30 days before deletion.</P>
          </Section>

          <Section>
            <SectionTitle>Intellectual property</SectionTitle>
            <SubTitle>Parlay&apos;s IP</SubTitle>
            <P>The Parlay platform, including its software, design, scoring algorithms, and all related intellectual property, is owned by Parlay Conference Management, LLC. These terms do not grant you any ownership rights in the platform. You receive a limited, non-transferable license to use the platform during the term of your subscription.</P>

            <SubTitle>Feedback</SubTitle>
            <P>If you provide feedback, suggestions, or ideas about Parlay, you grant us the right to use that feedback without restriction or compensation to you. You waive any claim that such use of your feedback violates your rights.</P>
          </Section>

          <Section>
            <SectionTitle>Third-party integrations</SectionTitle>
            <P>Parlay integrates with third-party services including Google, Microsoft, HubSpot, Salesforce, and Anthropic. Your use of these integrations is subject to the third parties&apos; own terms of service and privacy policies. We are not responsible for the practices, availability, or content of third-party services.</P>
          </Section>

          <Section>
            <SectionTitle>Service availability</SectionTitle>
            <SubTitle>Uptime</SubTitle>
            <P>We make reasonable efforts to maintain platform availability but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance where possible. Custom-tier agreements may include specific uptime commitments as negotiated.</P>

            <SubTitle>Modifications</SubTitle>
            <P>We reserve the right to modify, suspend, or discontinue any part of the platform at any time. We will provide reasonable advance notice of material changes. We are not liable to you or any third party for modifications, suspension, or discontinuation of the service.</P>
          </Section>

          <Section>
            <SectionTitle>Limitation of liability</SectionTitle>
            <P>To the maximum extent permitted by law:</P>
            <P><strong>No consequential damages.</strong> In no event will Parlay be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of revenue, loss of data, or loss of business opportunities, even if we have been advised of the possibility of such damages.</P>
            <P><strong>Liability cap.</strong> Our total liability to you for any claim arising out of or related to these terms or your use of the platform will not exceed the amount you paid to Parlay Conference Management, LLC in the 12 months preceding the claim.</P>
            <P><strong>Essential basis.</strong> You acknowledge that these limitations are an essential element of the agreement between us and that Parlay would not provide the service without them.</P>
            <P>Some jurisdictions do not allow the exclusion or limitation of liability for consequential damages. In such jurisdictions, our liability is limited to the fullest extent permitted by law.</P>
          </Section>

          <Section>
            <SectionTitle>Disclaimer of warranties</SectionTitle>
            <P>The platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will be error-free, uninterrupted, or free of security vulnerabilities.</P>
          </Section>

          <Section>
            <SectionTitle>Indemnification</SectionTitle>
            <P>You agree to indemnify, defend, and hold harmless Parlay Conference Management, LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: your use of the platform, your violation of these terms, your violation of any applicable law, or your violation of any third party&apos;s rights.</P>
          </Section>

          <Section>
            <SectionTitle>Termination</SectionTitle>
            <SubTitle>By you</SubTitle>
            <P>You may cancel your account at any time through the account settings or by contacting <A href="mailto:support@useparlay.app">support@useparlay.app</A>. Cancellation takes effect at the end of the current billing period. No refunds are issued for unused time.</P>

            <SubTitle>By us</SubTitle>
            <P>We may suspend or terminate your account immediately if: you materially breach these terms, you fail to pay amounts owed after notice, we are required to do so by law, or we determine that continued access poses a risk to the platform or other users. We will provide notice where reasonably possible.</P>

            <SubTitle>Effect of termination</SubTitle>
            <P>Upon termination, your right to access the platform ends. Your data will be available for export for 30 days following termination, after which it will be permanently deleted.</P>
          </Section>

          <Section>
            <SectionTitle>Governing law and disputes</SectionTitle>
            <P>These terms are governed by the laws of the State of Colorado, without regard to conflict of law principles.</P>

            <SubTitle>Informal resolution</SubTitle>
            <P>Before initiating any formal dispute, you agree to contact us at <A href="mailto:legal@useparlay.app">legal@useparlay.app</A> and attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes through direct discussion.</P>

            <SubTitle>Arbitration</SubTitle>
            <P>If informal resolution fails, any dispute arising from these terms or your use of Parlay will be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. Arbitration will take place in Douglas County, Colorado. The arbitrator&apos;s decision will be final and binding.</P>

            <SubTitle>Class action waiver</SubTitle>
            <P>You agree to resolve disputes with Parlay on an individual basis only. You waive any right to bring or participate in class action lawsuits or class-wide arbitration against Parlay Conference Management, LLC.</P>

            <SubTitle>Exception</SubTitle>
            <P>Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm while arbitration is pending.</P>
          </Section>

          <Section>
            <SectionTitle>General provisions</SectionTitle>
            <SubTitle>Entire agreement</SubTitle>
            <P>These terms, together with the Privacy Policy and any executed Order Forms or Data Processing Agreements, constitute the entire agreement between you and Parlay Conference Management, LLC regarding the platform.</P>

            <SubTitle>Severability</SubTitle>
            <P>If any provision of these terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full effect.</P>

            <SubTitle>No waiver</SubTitle>
            <P>Our failure to enforce any provision of these terms does not constitute a waiver of our right to enforce it in the future.</P>

            <SubTitle>Assignment</SubTitle>
            <P>You may not assign these terms or your account without our prior written consent. We may assign these terms in connection with a merger, acquisition, or sale of assets without your consent.</P>

            <SubTitle>Notices</SubTitle>
            <P>Notices to you will be sent to the email address on your account. Notices to us should be sent to <A href="mailto:legal@useparlay.app">legal@useparlay.app</A>.</P>

            <SubTitle>Force majeure</SubTitle>
            <P>We are not liable for delays or failures in performance resulting from causes beyond our reasonable control, including natural disasters, acts of government, internet outages, or third-party service failures.</P>
          </Section>

          <Section last>
            <SectionTitle>Contact</SectionTitle>
            <P>For questions about these terms:</P>
            <div style={{ background: "#f1f5f9", borderRadius: 10, padding: "16px 20px", marginTop: 8 }}>
              <P style={{ margin: 0 }}>Email: <A href="mailto:legal@useparlay.app">legal@useparlay.app</A></P>
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
