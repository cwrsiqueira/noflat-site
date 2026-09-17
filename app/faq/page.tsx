import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { navLinks } from "@/lib/nav";

export const metadata: Metadata = {
  title: "FAQ | NO FLAT Tire Protection",
  description:
    "Frequently asked questions about NoFlat tire sealant — installation, compatibility, maintenance, storage, and safety.",
};

type FaqItem = {
  question: string;
  answer?: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const sections: FaqSection[] = [
  {
    title: "General",
    items: [
      {
        question: "What is NoFlat?",
        answer:
          "NoFlat is a professional water-based tire sealant designed to prevent air loss caused by punctures.",
      },
      {
        question: "How does it work?",
        answer:
          "The sealant coats the inside of the tire and instantly seals punctures as they occur.",
      },
      {
        question: "What size punctures can it seal?",
        answer:
          'Up to 1/4" (6 mm) in the tread area of most passenger and light truck tires.',
      },
    ],
  },
  {
    title: "Installation",
    items: [
      {
        question: "Do I need to remove the tire?",
        answer:
          "Yes. NoFlat is installed by separating one bead from the rim and injecting the product directly into the tire.",
      },
      {
        question: "Can I install it through the valve stem?",
        answer: "No. NoFlat is designed to be installed through the bead opening.",
      },
      {
        question: "How long does installation take?",
        answer: "Approximately 10–15 minutes per tire.",
      },
    ],
  },
  {
    title: "Compatibility",
    items: [
      {
        question: "Is NoFlat TPMS safe?",
        answer:
          "Yes. When installed correctly, NoFlat is compatible with TPMS sensors.",
      },
      {
        question: "Can it be used in cars, SUVs and trucks?",
        answer: "Yes.",
      },
      {
        question: "Can it be used in commercial vehicles?",
        answer: "Yes. Larger tires require a higher dosage.",
      },
    ],
  },
  {
    title: "Maintenance",
    items: [
      {
        question: "Do I need to rebalance the tire?",
        answer: "Normally no, when the correct amount is installed.",
      },
      {
        question: "How often should NoFlat be replaced?",
        answer:
          "It should remain effective throughout the normal service life of the tire.",
      },
      {
        question: "Does it affect tire pressure?",
        answer: "No. Tire pressure should still be checked regularly.",
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        question: "How should I store the product?",
        answer: "Keep the container tightly closed in a cool, dry place.",
      },
      {
        question: "Can the product freeze?",
        answer: "Avoid prolonged exposure to freezing temperatures.",
      },
    ],
  },
  {
    title: "Safety",
    items: [
      {
        question: "Is NoFlat water-based?",
        answer: "Yes.",
      },
      {
        question: "Does it contain ammonia?",
        answer: "No.",
      },
      {
        question: "Is it corrosive?",
        answer: "No. The formula is non-corrosive.",
      },
      {
        question: "Can it be washed with water?",
        answer: "Yes.",
      },
    ],
  },
  {
    title: "Warranty & Support",
    items: [
      { question: "Where can I purchase NoFlat?" },
      { question: "How can I become a dealer?" },
      { question: "How do I contact technical support?" },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header links={navLinks} solid />
      <main className="bg-neutral pt-28 md:pt-36">
        <div className="section-padding mx-auto max-w-3xl py-16 md:py-24">
          <p className="text-label text-secondary mb-4">Resources</p>
          <h1 className="text-display mb-4">Frequently Asked Questions</h1>
          <p className="mb-12 text-secondary">
            Answers to common questions about installation, compatibility, storage,
            maintenance, and product performance.{" "}
            <Link href="/#contact" className="text-primary underline-offset-2 hover:underline">
              Contact us
            </Link>{" "}
            if you need additional support.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h1 mb-6 border-b border-secondary/20 pb-3 text-xl">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.question}>
                      <h3 className="mb-2 font-medium text-primary">{item.question}</h3>
                      {item.answer ? (
                        <p className="text-secondary">{item.answer}</p>
                      ) : (
                        <p className="text-secondary">
                          Please{" "}
                          <Link
                            href="/#contact"
                            className="text-primary underline-offset-2 hover:underline"
                          >
                            contact our team
                          </Link>{" "}
                          for the latest information.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/#resources" className="btn-outline">
              Back to Resources
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
