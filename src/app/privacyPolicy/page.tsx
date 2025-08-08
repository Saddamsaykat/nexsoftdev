import React from "react";

const privacyPolicy = [
  {
    title: "1. Introduction",
    content:
      "At NexSoftDev, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide through contact forms, sign-ups, or service inquiries.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, communicate with you, send updates, and ensure the security of our website.",
  },
  {
    title: "4. Sharing Your Information",
    content:
      "We do not sell, rent, or trade your personal information. We may share your data with trusted third-party service providers who assist us in operating our business, as long as they agree to keep your information confidential.",
  },
  {
    title: "5. Cookies",
    content:
      "Our website may use cookies to enhance your user experience. You can set your browser to refuse cookies or alert you when cookies are being sent.",
  },
  {
    title: "6. Data Security",
    content:
      "We implement appropriate security measures to protect your personal data against unauthorized access, alteration, or destruction.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You can contact us at support@nexsoftdev.com to request changes to your data.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy occasionally. We encourage you to review this page periodically to stay informed about how we are protecting your data.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact us at support@nexsoftdev.com.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: August 6, 2025</p>
      {privacyPolicy.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <p className="text-base text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;