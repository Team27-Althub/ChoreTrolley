import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-[#757575]">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy for ChoreTrolly</h1>
      <p className="mb-2">Effective Date: [Insert Date]</p>
      <p className="mb-4">
        At ChoreTrolly, your privacy is a priority. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our web application
        ("ChoreTrolly", "we", "us", or "our") which connects users with on-demand services
        including fresh grocery delivery, home cleaning, and other trusted providers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="font-medium">Personal Information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Delivery address</li>
        <li>Payment information (processed via secure third-party processors)</li>
      </ul>
      <p className="font-medium">Usage Data:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Time zone, access times, and referring URLs</li>
        <li>Device and platform information</li>
      </ul>
      <p className="mb-4">
        <span className="font-medium">Location Data (if enabled):</span> To better connect you with
        nearby service providers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">We use your data to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Deliver requested services</li>
        <li>Communicate updates or order status</li>
        <li>Improve service quality and user experience</li>
        <li>Process payments and transactions securely</li>
        <li>Send promotions, with opt-out ability</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-2">We may share your data with:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Service providers (e.g., cleaners, shoppers) to fulfill orders</li>
        <li>Payment processors to securely handle transactions</li>
        <li>Analytics and tech partners to improve the platform</li>
        <li>Law enforcement where legally required</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Choices and Rights</h2>
      <p className="mb-2">You can:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access or correct your personal information</li>
        <li>Delete your account and data upon request</li>
        <li>Opt-out of marketing communications</li>
        <li>Disable location tracking via device settings</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Retention and Security</h2>
      <p className="mb-4">
        We retain your information as long as your account is active or as needed to fulfill legal
        or service obligations. We use encryption, access controls, and secure hosting to protect
        your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies and Tracking</h2>
      <p className="mb-4">
        ChoreTrolly uses cookies and similar technologies to improve functionality, remember user
        preferences, and perform analytics. You can manage cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children's Privacy</h2>
      <p className="mb-4">
        Our services are not intended for users under 13. We do not knowingly collect data from
        children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. We'll notify you via email or platform
        notice when changes are material.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-6">
        For privacy questions or data requests, contact us at: 📧{' '}
        <a href="mailto:privacy@choretrolly.com" className="text-blue-600 underline">
          privacy@choretrolly.com
        </a>
      </p>

      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-blue-600" />
        <span>I agree</span>
      </label>
    </div>
  );
};

export default PrivacyPolicy;
