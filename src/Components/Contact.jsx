import React from "react";

const contactInfo = [
  {
    icon: "https://aakashlabs.com/_nuxt/img/contact.388c133.svg",
    title: "Call Us",
    detail: "+977-1-4430196",
  },
  {
    icon: "https://aakashlabs.com/_nuxt/img/contact-mail.9cd2422.svg",
    title: "Email",
    detail: "info@aakashlabs.com",
  },
  {
    icon: "https://aakashlabs.com/_nuxt/img/contact-location.d972805.svg",
    title: "Address",
    detail: "Laxmi Plaza, Putali Sadak, Kathmandu, Nepal",
  },
];

const Contact = () => {
  return (
    <div className="w-full md:w-1/2 p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We at Aakash Labs provide you with unparalleled insight and digital
        marketing analysis. For assistance with any inquiries, or if you require
        our services, reach out to us at:
      </p>

      <div className="space-y-2">

        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-sky-50 p-4 rounded shadow-sm"
          >
            <img src={item.icon} alt={item.title} className="w-5 h-5 " />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
