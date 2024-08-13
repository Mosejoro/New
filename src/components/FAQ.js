import React, { useState } from "react";
import plusIcon from "./media/plus.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Africa Digital Economy Summit?",
      answer:
        "The Africa Digital Economy Summit (AfriDES) is a conference aimed at accelerating Africa's digital economy aspirations. It brings together key stakeholders, thought leaders, innovators, policymakers, and industry experts to foster collaboration, share insights, and devise strategic solutions for advancing Africa's digital landscape.",
    },
    {
      question: "When and where is the summit taking place?",
      answer:
        "The summit will be held from October 22nd to 25th, 2024, at Blue Tree Premium Paulista, Sãu Paulo, Brazil.",
    },
    {
      question: "What are the main themes of the summit?",
      answer:
        "The main theme is 'Digital Transformation for Sustainable Growth: Africa's Path to a Connected Future.' Sub-themes include Digital Infrastructure and Connectivity, Fintech and Financial Inclusion, E-Government and Public Services, Digital Skills and Education, Entrepreneurship and Innovation, Cybersecurity and Data Protection, and Smart Investment.",
    },
    {
      question: "Who should attend the summit?",
      answer:
        "Government officials and policymakers, industry leaders and entrepreneurs, venture capitalists, academics, researchers, civil society organizations, media representatives, entrepreneurs, startups, and innovators.",
    },
    {
      question: "What are the objectives of the summit?",
      answer:
        "Showcase African innovation and investment potential, foster international collaboration, promote policy advocacy, provide capacity building, and accelerate smart investment and risk mitigation.",
    },
    {
      question: "What can participants expect from the summit?",
      answer:
        "Participants can expect engaging keynote sessions, panel discussions, workshops, and networking opportunities, all aimed at providing valuable knowledge, exchanging ideas, and forging partnerships",
    },
    {
      question: "What is the Africa Digital Economy Awards 2024?",
      answer:
        "The Africa Digital Economy Awards 2024 is an event featured at the summit to recognize and honor outstanding digital initiatives and innovations that are driving economic growth and improving livelihoods in Africa.",
    },
    {
      question:
        "What role does AfriDES play in Africa’s digital transformation?",
      answer:
        "AfriDES serves as a platform for reflection and dialogue on Africa's digital transformation, addressing structural concerns, risks mitigation, and smart investment to meet new requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#95d5b2] flex flex-col items-center py-12 px-4">
      <h2 className="text-[#005720] font-semibold mb-4 text-8xl">FAQ</h2>
      <div className="w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`p-4 bg-[#35bc3d] text-white font-semibold cursor-pointer transition-all duration-300 flex justify-between items-center ${
                activeIndex === index ? "rounded-t-lg" : "rounded-lg"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <img
                src={plusIcon}
                alt="plus icon"
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 bg-[#35bc3d] text-white ${
                activeIndex === index ? "max-h-96 p-4 rounded-b-lg" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
