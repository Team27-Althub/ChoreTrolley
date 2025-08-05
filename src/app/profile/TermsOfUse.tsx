import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-[#757575]">
      <h1 className="text-2xl font-semibold mb-4">Terms of Use for ChoreTrolly</h1>
      <p className="mb-2">Effective Date: [Insert Date]</p>

      <p className="mb-4">
        Welcome to ChoreTrolly! These Terms of Use ("Terms") govern your access to and use of the
        ChoreTrolly web app and services ("Service").
        <br />
        By using ChoreTrolly, you agree to these Terms. If you do not agree, please do not use the
        Service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old to use ChoreTrolly. By using the platform, you represent
        that you meet this requirement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Your Account</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You agree to provide accurate, complete information.</li>
        <li>You are responsible for safeguarding your login credentials.</li>
        <li>You must notify us immediately of any unauthorized use.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Use of the Service</h2>
      <p className="mb-2">You agree to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Use the Service only for lawful purposes</li>
        <li>Not misuse, hack, or reverse-engineer the platform</li>
        <li>Respect service providers and complete transactions in good faith</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments and Transactions</h2>
      <p className="mb-4">
        ChoreTrolly facilitates transactions between you and service providers. We are not the
        service provider ourselves. All payments must be made through our secure payment system.
        Prices are subject to change.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellations and Refunds</h2>
      <p className="mb-4">
        Cancellations must be made within the timeframes outlined on the platform. Refunds are
        provided at our discretion and in accordance with our Refund Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Service Provider Responsibility</h2>
      <p className="mb-4">
        We vet and partner with trusted providers, but ChoreTrolly is not liable for their
        individual actions, performance, or conduct. Please report issues so we can address them
        appropriately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, and software associated with ChoreTrolly are our property or licensed
        to us. You may not copy, distribute, or exploit any part of the Service without prior
        written consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access at any time for violation of these Terms or for any
        lawful reason.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
      <p className="mb-4">
        ChoreTrolly is not liable for indirect, incidental, or consequential damages related to your
        use of the Service. Use is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of [Insert Country/State]. Any disputes will be
        resolved in the courts of [Insert Jurisdiction].
      </p>
    </div>
  );
};

export default TermsOfUse;
