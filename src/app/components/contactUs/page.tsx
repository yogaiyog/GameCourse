import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Email</h2>
          <p>info@gamecourse.com</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Address</h2>
          <p>123 Gaming Avenue, Suite 100</p>
          <p>Los Angeles, CA 90001</p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p>We'd love to hear from you! Drop us a message anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
