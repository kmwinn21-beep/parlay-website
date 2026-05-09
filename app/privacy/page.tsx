import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Parlay",
  description: "Privacy Policy for Parlay Conference Management, LLC.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-brand-primary min-h-screen text-white">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <pre className="whitespace-pre-wrap font-inter text-white/90 leading-relaxed text-sm sm:text-base">{`Privacy Policy
Parlay Conference Management, LLC
Last updated: May 9, 2026

What this document is
This Privacy Policy explains what information Parlay collects when you use our platform, how we use it, and what rights you have over it. We've written it in plain language because we think you deserve to understand what happens to your data.

Who we are
Parlay is a conference intelligence platform for revenue teams. We are operated by Parlay Conference Management, LLC, based in Castle Rock, Colorado. When this policy says "Parlay," "we," "us," or "our," it means Parlay Conference Management, LLC.
If you have questions about this policy or your data, contact us at privacy@useparlay.app.

What information we collect
Information you give us directly
When you sign up for a trial or paid account, we collect:

Your name, work email address, job title, and company name
Optional information you choose to provide: your role, industry, revenue team size, number of conferences you attend annually, your primary conference goal, and your current conference management tool
Payment information when you subscribe to a paid plan — we use Stripe to process payments and do not store your card number, expiry date, or CVV on our servers

When you use Parlay, we collect:

Conference data you create or upload: conference names, dates, locations, attendee lists, company information, meeting records, notes, follow-ups, and touchpoints
Files you upload: CSV files, business card images, and any documents you attach
Communications within the platform: direct messages, group conversations, and notes

Information collected automatically
When you use Parlay, we automatically collect:

Log data: your IP address, browser type, operating system, pages visited, and timestamps
Usage data: which features you use, how often, and in what sequence — this helps us understand how the product is being used and where to improve it
Device information: device type, screen resolution, and similar technical data

Information from third parties
If you connect a Google or Microsoft account for email integration, we receive access to your email sending capabilities as authorized by you. We do not read, index, or store the content of your emails beyond what is necessary to send them on your behalf.

How we use your information
To provide the service
We use your data to operate Parlay — provisioning your account, running the scoring engines against your conference data, generating your analytics, and delivering the product you signed up for.
To communicate with you
We use your email address to send you:

Account and trial status notifications
Product updates and new feature announcements
Billing and payment communications
Responses to your support requests

You can opt out of marketing emails at any time using the unsubscribe link in any email. You cannot opt out of transactional emails (billing, account status, security) while your account is active.
To improve the product
We analyze aggregated, anonymized usage patterns to understand how people use Parlay and how to make it better. We do not use your specific conference data or customer names to train AI models or sell to third parties.
To process payments
We share necessary billing information with Stripe, our payment processor, to handle subscription payments and invoices.
To comply with legal obligations
We may use or disclose your information when required by law, court order, or to protect the rights and safety of Parlay, our users, or others.

How we store and protect your information
Data isolation
Each Parlay account is provisioned in its own isolated database. Your conference data, attendee lists, and company information are not stored in a shared database with other customers.
Security measures
We use industry-standard security practices including encryption in transit (TLS), encryption at rest, and access controls that limit who on our team can access customer data. We do not sell access to your data to any third party.
Data retention
We retain your data for as long as your account is active. If your account is cancelled or expires:

Trial accounts enter a 7-day read-only grace period, followed by 90 days of inactive retention, followed by permanent deletion
Paid accounts retain data for 90 days after cancellation before permanent deletion
You can request earlier deletion by contacting privacy@useparlay.app

Backups
We maintain backups of customer data to protect against data loss. Backup data is subject to the same security standards as live data and is deleted on the same schedule as the primary data.

Third parties we share data with
We share data with the following categories of service providers who help us operate Parlay. Each is bound by data processing agreements and is not permitted to use your data for their own purposes:
ProviderPurposeData sharedTursoDatabase infrastructureAll account and application dataStripePayment processingName, email, billing informationVercelApplication hostingRequest logs, application dataAnthropicAI features (card scanning, prospect recommendations, executive narratives)Business card images, conference data as needed for AI processingResendTransactional email deliveryName, email address
We do not sell your personal information to data brokers, advertisers, or any other third party.

AI features and your data
Parlay uses AI to power several features including business card scanning, prospect recommendations, and AI-generated conference narratives. These features are powered by Anthropic's Claude API.
When you use these features, relevant data (such as a business card image or conference statistics) is sent to Anthropic's API for processing. Anthropic's privacy policy governs how they handle this data. We do not use your data to train AI models, and we do not share identifiable customer data with Anthropic beyond what is necessary to process your specific request.

Your rights
Depending on where you are located, you may have the following rights regarding your personal data:
Access: You can request a copy of the personal data we hold about you.
Correction: You can ask us to correct inaccurate or incomplete data.
Deletion: You can request that we delete your personal data. We will comply unless we are required to retain it by law or for legitimate business purposes.
Portability: You can request your data in a machine-readable format.
Objection: You can object to certain types of processing, including marketing communications.
CCPA rights (California residents): You have the right to know what personal information we collect, to delete your personal information, to opt out of the sale of your personal information (we do not sell personal information), and to non-discrimination for exercising these rights.
Colorado Privacy Act rights (Colorado residents): You have the right to access, correct, delete, and obtain a copy of your personal data. You have the right to opt out of the processing of your personal data for purposes of targeted advertising, the sale of personal data, or profiling. We do not sell personal data or use it for targeted advertising.
GDPR rights (EEA residents): You have all the rights listed above plus the right to restrict processing and to withdraw consent where processing is based on consent.
To exercise any of these rights, contact us at privacy@useparlay.app. We will respond within 30 days.

Cookies
Parlay uses cookies and similar technologies to:

Keep you logged in between sessions (authentication cookies — required)
Remember your preferences (functional cookies — required)
Understand how the product is used (analytics cookies — optional)

You can control cookie settings through your browser. Disabling required cookies will prevent you from using Parlay. Disabling analytics cookies will not affect your ability to use the product.

Children's privacy
Parlay is a business-to-business product designed for professional use. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has provided us with personal information, contact us at privacy@useparlay.app and we will delete it.

Changes to this policy
We may update this policy as our product and legal obligations evolve. When we make material changes, we will notify you by email and update the "Last updated" date at the top of this document. Your continued use of Parlay after notification constitutes acceptance of the updated policy.

Contact
For privacy questions, data requests, or concerns:
Email: privacy@useparlay.app
Address: Parlay Conference Management, LLC
5418 Coltin Trail
Castle Rock, CO 80104`}</pre>
      </div>
      <Footer />
    </main>
  );
}
