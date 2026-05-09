import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Parlay",
  description: "Terms of Service for Parlay Conference Management, LLC.",
};

export default function TermsPage() {
  return (
    <main className="bg-brand-primary min-h-screen text-white">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <pre className="whitespace-pre-wrap font-inter text-white/90 leading-relaxed text-sm sm:text-base">{`Terms of Service
Parlay Conference Management, LLC
Last updated: May 9, 2026

Agreement to terms
By creating a Parlay account or using our platform, you agree to these Terms of Service. If you are using Parlay on behalf of a company or organization, you represent that you have the authority to bind that organization to these terms. If you do not agree, do not use Parlay.
These terms constitute a legally binding agreement between you (or your organization) and Parlay Conference Management, LLC ("Parlay," "we," "us").

Description of service
Parlay is a conference intelligence platform that helps revenue teams manage conference relationships, generate targeting intelligence, track meeting and follow-up execution, and measure conference performance. We provide this service through a subscription model with multiple plan tiers.

Accounts and registration
Eligibility
You must be at least 18 years old and capable of forming a binding contract to create a Parlay account. Parlay is a business product — it is intended for use by companies and professionals, not consumers.
Account accuracy
You agree to provide accurate, current, and complete information when creating your account and to keep that information updated. We reserve the right to suspend or terminate accounts that use false or misleading information.
Account security
You are responsible for maintaining the security of your account credentials. You agree not to share your password with others and to notify us immediately at support@useparlay.app if you suspect unauthorized access to your account. We are not liable for losses resulting from unauthorized use of your account that occur through no fault of ours.
One account per organization
Each organization may have one Parlay account. Creating multiple trial accounts to extend trial access is a violation of these terms and grounds for termination of all associated accounts.

Free trial
We offer a 14-day free trial with full access to all platform features (excluding Custom-tier features requiring scoped implementation). No credit card is required to start a trial.
At the end of the trial period:

Your account enters a 7-day read-only grace period during which you can view but not edit your data
If you do not select a paid plan within the grace period, your account is deactivated
Deactivated accounts are permanently deleted 90 days after deactivation with no recovery

We reserve the right to modify trial terms, including duration and included features, at any time.

Subscriptions and payment
Billing
Paid plans are billed on a recurring basis — monthly or annually depending on the option you select at checkout. Annual plans are billed as a single payment covering 12 months.
Payment processing
Payments are processed by Stripe. By providing payment information, you authorize us (through Stripe) to charge your payment method on the applicable billing cycle. You represent that you are authorized to use the payment method provided.
Price changes
We reserve the right to change subscription prices. We will provide at least 30 days advance notice of any price change by email and in-app notification. Your continued use of Parlay after the price change takes effect constitutes acceptance of the new pricing. If you do not accept a price change, you may cancel your subscription before the new price takes effect.
Refunds
We do not offer refunds for partial billing periods. If you cancel a monthly subscription, you retain access through the end of the current billing month. If you cancel an annual subscription, you retain access through the end of the annual period. No prorated refunds are issued for unused time.
Exceptions may be made at our sole discretion for documented billing errors or technical failures that prevented access to the service. Contact billing@useparlay.app within 30 days of the relevant charge to request a refund review.
Failed payments
If a payment fails, we will attempt to collect payment using Stripe's automatic retry logic. If payment cannot be collected, your account may be downgraded or suspended. We will notify you by email before taking any access-restricting action due to non-payment.
Taxes
Prices displayed do not include applicable taxes. We collect and remit sales tax where legally required. The applicable tax is calculated based on your billing address and will be shown before you complete your purchase.

Acceptable use
You agree to use Parlay only for lawful purposes and in accordance with these terms. You agree not to:

Use Parlay to store, process, or transmit data in violation of applicable law
Upload or process data without the authorization of the individuals whose data is included
Attempt to gain unauthorized access to any part of the platform or another user's account
Reverse engineer, decompile, or attempt to extract the source code of the platform
Use Parlay to build a competing product or service
Resell, sublicense, or otherwise make the platform available to third parties without our written consent
Upload malicious code, viruses, or any content designed to disrupt or damage the platform
Use automated tools to scrape, crawl, or extract data from the platform beyond what our API expressly permits
Create multiple accounts to circumvent plan limitations or access restrictions

We reserve the right to suspend or terminate accounts that violate these terms without prior notice.

Your data
Ownership
You own your data. Parlay claims no ownership over the conference data, attendee lists, company information, notes, or any other content you create or upload in the platform.
License to us
By using Parlay, you grant us a limited, non-exclusive license to store, process, and use your data solely for the purpose of providing the service to you. We do not use your data to train AI models, sell to third parties, or for any purpose beyond operating and improving the platform for your benefit.
Responsibility for your data
You are responsible for the data you upload and process in Parlay. You represent that you have the right to upload and process all data you provide, including attendee lists and contact information. You agree to comply with all applicable data protection laws with respect to the data you process using Parlay.
Data processing
For customers subject to GDPR, we are a data processor with respect to personal data you upload. You are the data controller. We will process personal data only on your instructions as described in our Privacy Policy and in accordance with any Data Processing Agreement executed between us.
Data portability
You can export your data from Parlay at any time using the platform's export tools. Upon account termination, we will make your data available for export for 30 days before deletion.

Intellectual property
Parlay's IP
The Parlay platform, including its software, design, scoring algorithms, and all related intellectual property, is owned by Parlay Conference Management, LLC. These terms do not grant you any ownership rights in the platform. You receive a limited, non-transferable license to use the platform during the term of your subscription.
Feedback
If you provide feedback, suggestions, or ideas about Parlay, you grant us the right to use that feedback without restriction or compensation to you. You waive any claim that such use of your feedback violates your rights.

Third-party integrations
Parlay integrates with third-party services including Google, Microsoft, HubSpot, Salesforce, and Anthropic. Your use of these integrations is subject to the third parties' own terms of service and privacy policies. We are not responsible for the practices, availability, or content of third-party services.

Service availability
Uptime
We make reasonable efforts to maintain platform availability but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance where possible. Custom-tier agreements may include specific uptime commitments as negotiated.
Modifications
We reserve the right to modify, suspend, or discontinue any part of the platform at any time. We will provide reasonable advance notice of material changes. We are not liable to you or any third party for modifications, suspension, or discontinuation of the service.

Limitation of liability
To the maximum extent permitted by law:
No consequential damages. In no event will Parlay be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of revenue, loss of data, or loss of business opportunities, even if we have been advised of the possibility of such damages.
Liability cap. Our total liability to you for any claim arising out of or related to these terms or your use of the platform will not exceed the amount you paid to Parlay Conference Management, LLC in the 12 months preceding the claim.
Essential basis. You acknowledge that these limitations are an essential element of the agreement between us and that Parlay would not provide the service without them.
Some jurisdictions do not allow the exclusion or limitation of liability for consequential damages. In such jurisdictions, our liability is limited to the fullest extent permitted by law.

Disclaimer of warranties
The platform is provided "as is" and "as available" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will be error-free, uninterrupted, or free of security vulnerabilities.

Indemnification
You agree to indemnify, defend, and hold harmless Parlay Conference Management, LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: your use of the platform, your violation of these terms, your violation of any applicable law, or your violation of any third party's rights.

Termination
By you
You may cancel your account at any time through the account settings or by contacting support@useparlay.app. Cancellation takes effect at the end of the current billing period. No refunds are issued for unused time.
By us
We may suspend or terminate your account immediately if: you materially breach these terms, you fail to pay amounts owed after notice, we are required to do so by law, or we determine that continued access poses a risk to the platform or other users. We will provide notice where reasonably possible.
Effect of termination
Upon termination, your right to access the platform ends. Your data will be available for export for 30 days following termination, after which it will be permanently deleted.

Governing law and disputes
These terms are governed by the laws of the State of Colorado, without regard to conflict of law principles.
Informal resolution
Before initiating any formal dispute, you agree to contact us at legal@useparlay.app and attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes through direct discussion.
Arbitration
If informal resolution fails, any dispute arising from these terms or your use of Parlay will be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. Arbitration will take place in Douglas County, Colorado. The arbitrator's decision will be final and binding.
Class action waiver
You agree to resolve disputes with Parlay on an individual basis only. You waive any right to bring or participate in class action lawsuits or class-wide arbitration against Parlay Conference Management, LLC.
Exception
Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm while arbitration is pending.

General provisions
Entire agreement
These terms, together with the Privacy Policy and any executed Order Forms or Data Processing Agreements, constitute the entire agreement between you and Parlay Conference Management, LLC regarding the platform.
Severability
If any provision of these terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full effect.
No waiver
Our failure to enforce any provision of these terms does not constitute a waiver of our right to enforce it in the future.
Assignment
You may not assign these terms or your account without our prior written consent. We may assign these terms in connection with a merger, acquisition, or sale of assets without your consent.
Notices
Notices to you will be sent to the email address on your account. Notices to us should be sent to legal@useparlay.app.
Force majeure
We are not liable for delays or failures in performance resulting from causes beyond our reasonable control, including natural disasters, acts of government, internet outages, or third-party service failures.

Contact
For questions about these terms:
Email: legal@useparlay.app
Address: Parlay Conference Management, LLC
5418 Coltin Trail
Castle Rock, CO 80104`}</pre>
      </div>
      <Footer />
    </main>
  );
}
