import { faqs } from "./faqData";

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="max-w-4xl mx-auto py-16"
    >
      <h2 id="faq-heading" className="text-3xl font-bold mb-8 px-3">
        Frequently Asked Questions
      </h2>

      <dl className="space-y-6 px-3 sm:px-0">
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt className="font-semibold text-lg">{faq.question}</dt>
            <dd className="mt-2   text-gray-400">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
