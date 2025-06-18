"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import Head from "next/head"; // Import Next.js Head component
import Link from "next/link"; // Import Next.js Link component for client-side navigation

import dynamic from "next/dynamic"; // Import dynamic for code splitting

// Lazily load navigation and footer components for code splitting
const Lownav = dynamic(() => import("../../components/Lownav"), { ssr: false });
const Upnav = dynamic(() => import("../../components/Upnav"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });


function SalesDevelopment() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question:
        "What is sales development and how does it differ from traditional sales?",
      answer:
        "Sales development focuses on identifying and qualifying leads before passing them to account executives. Unlike traditional sales which handles the entire sales cycle, SDRs specialize in the early stages of prospecting and outreach to build a healthy pipeline.",
    },
    {
      question:
        "What tools and technologies are essential for an effective sales development team?",
      answer:
        "Key tools include CRM platforms (like Salesforce), sales engagement platforms (like Outreach or SalesLoft), prospecting tools (like LinkedIn Sales Navigator), email verification tools, and conversation intelligence software to analyze calls and improve techniques.",
    },
    {
      question:
        "How can we measure the success of our sales development efforts?",
      answer:
        "Important metrics include number of qualified leads generated, outreach activity rates (calls, emails), response rates, meeting-to-opportunity conversion rates, and pipeline contribution. Tracking these helps optimize your SDR team's performance.",
    },
    {
      question: "What makes an effective sales development representative (SDR)?",
      answer:
        "Top SDRs combine persistence with emotional intelligence. They need excellent communication skills, the ability to research prospects thoroughly, resilience to handle rejection, and the capacity to quickly understand customer pain points and position solutions accordingly.",
    },
    {
      question:
        "How should sales development align with marketing for maximum impact?",
      answer:
        "Close alignment ensures SDRs follow up on marketing-generated leads promptly. Shared metrics, regular communication between teams, and coordinated messaging based on campaign themes are crucial. Marketing should provide SDRs with relevant content and talking points for outreach.",
    },
    {
      question:
        "What outreach strategies work best in today's sales development environment?",
      answer:
        "Multi-channel approaches combining personalized email, LinkedIn messages, and phone calls work best. Video messages can increase engagement. The key is timely, relevant outreach that focuses on the prospect's challenges rather than your product features.",
    },
    {
      question: "How can AI enhance sales development processes?",
      answer:
        "AI can help prioritize leads, suggest optimal times for outreach, generate personalized email copy, analyze call transcripts for improvement opportunities, and automate data entry tasks - allowing SDRs to focus on high-value interactions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Sales Development & Pipeline Generation - [Your Company Name]</title>
        <meta
          name="description"
          content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates. Learn more!"
        />
        <meta
          name="keywords"
          content="sales development, pipeline generation, lead generation, B2B sales, sales outreach, SDR, sales qualified leads, Modigie, sales strategy"
        />
        <link rel="canonical" href="[Your Canonical URL]" />
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Sales Development & Pipeline Generation - [Your Company Name]" />
        <meta property="og:description" content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates." />
        <meta property="og:url" content="[Your Canonical URL]" />
        <meta property="og:image" content="/images/og-sales-development.jpg" /> {/* Replace with a relevant image */}
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sales Development & Pipeline Generation - [Your Company Name]" />
        <meta name="twitter:description" content="Accelerate your sales pipeline with expert sales development strategies. We generate qualified opportunities, enhance outreach, and boost connect rates." />
        <meta name="twitter:image" content="/images/twitter-sales-development.jpg" /> {/* Replace with a relevant image */}
      </Head>

      <Upnav />
      <Lownav />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32"
        style={{ backgroundImage: "url('/images/saleshero.jpg')" }}
      >
        <div className="text-left text-white max-w-4xl">
          <div className="flex items-center mb-6">
            <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
              SD
            </div>
            <span className="text-white text-2xl font-semibold">
              sales development
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Sales development that <br />
            fills your pipeline with <br />
            <span className="text-[#FFD800]">qualified opportunities.</span>
          </h1>
          <button className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Verified Engagement */}
      <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
          Proven strategies to accelerate pipeline <br />
          growth, <span className="text-[#FFD700]">guaranteed.</span>
        </h2>
        <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-[#FFD700] font-bold text-xl mb-4">
              OUR SOLUTION
            </h3>
          </div>
          <div className="md:w-1/2 text-lg space-y-6">
            <p>
              Our sales development approach combines data-driven targeting with
              human-centric outreach to connect you with decision-makers who are
              ready to have meaningful conversations about your solution.
            </p>
            <p>
              With decades of experience building high-performing SDR teams,
              we've developed methodologies that consistently deliver qualified
              meetings and accelerate sales cycles for our clients across
              industries.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="w-full bg-[#0E1F1C] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-12">
          HOW OUR SALES DEVELOPMENT PROCESS WORKS
        </h2>
        <div className="flex justify-center">
          {/* Using Next.js Image for optimization and lazy loading (default behavior) */}
          <Image
            src="/images/flowchart3.png"
            alt="Sales Development Workflow"
            width={1200} // Set appropriate width for intrinsic sizing
            height={800} // Set appropriate height for intrinsic sizing
            layout="responsive" // Make image responsive
            className="w-full max-w-6xl object-contain"
            priority={false} // Images below the fold should not have priority
          />
        </div>
      </div>

      {/* Strategic Placement Section */}
      <div className="w-full overflow-hidden">
        <section className="bg-[url('/images/bg2.webp')] bg-[#0E1F1C] w-full text-black pt-20 pb-36 px-4 sm:px-12 md:px-20 lg:px-40 xl:px-60 relative overflow-hidden z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Targeted outreach strategies <br /> tailored to your ideal
              customers.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-4 items-start mb-6 p-6"
            >
              <p className="text-lg md:w-1/3 text-black font-semibold">
                Our Services
              </p>
              <p className="text-lg md:w-2/3">
                Our team handles all aspects of sales development, from prospect
                research and list building to outreach and qualification,
                through to handoff to your sales team. All so you can focus on
                closing deals while{" "}
                <strong>we keep your pipeline full</strong>.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-6 mt-10 text-black">
              {[
                {
                  title: "Precision Targeting:",
                  content:
                    "We identify and engage with your ideal customer profile using firmographic, technographic, and intent data.",
                },
                {
                  title: "Multi-Channel Outreach:",
                  content:
                    "Strategic combination of email, phone, LinkedIn, and video messages tailored to each prospect.",
                },
                {
                  title: "Conversation Intelligence:",
                  content:
                    "Our technology analyzes interactions to continuously refine messaging and improve results.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={hoverEffect}
                  variants={cardVariants}
                  className="bg-[#ffea00] p-8 rounded-xl shadow-lg flex-1 min-h-[250px] flex flex-col justify-center"
                >
                  <div className="p-4 rounded-lg">
                    <h2 className="font-bold text-xl mb-3 text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-gray-700">{service.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Using Next.js Link for client-side navigation */}
            <Link href="/" passHref>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ffea00",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd800] hover:bg-yellow-300 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg shadow-lg"
                >
                  I AM READY TO FILL MY PIPELINE →
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        </section>

        {/* Case Study Section */}
        <section className="bg-[#0E1F1C] text-white w-full py-32 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
          >
            <motion.div
              className="flex-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="uppercase text-[#ffd800] font-semibold text-sm mb-2">
                Customer Success Story
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Enterprise SaaS Company 3X Pipeline with Our Sales Development
              </h2>
              <p className="text-gray-300 mb-8">
                By implementing our targeted sales development approach, this
                SaaS provider went from inconsistent pipeline to reliably
                generating 50+ qualified opportunities per month, with 35%
                converting to closed-won deals.
              </p>
              {/* Using Next.js Link for client-side navigation */}
              <Link href="/" passHref>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-2xl text-white font-semibold inline-block cursor-pointer"
                >
                  READ FULL CASE STUDY →
                </motion.p>
              </Link>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-1 max-w-xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)",
                }}
                className="w-full rounded-xl shadow-xl overflow-hidden relative"
                style={{ marginTop: "-200px", position: "relative", zIndex: 20 }}
              >
                <div className="w-full h-[700px] aspect-[1/3]">
                  {/* Using Next.js Image for optimization and lazy loading */}
                  <Image
                    src="/images/display-ads.webp"
                    alt="Display Ads"
                    fill
                    className="object-cover rounded-xl"
                    priority={false} // Images below the fold should not have priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Modigie Section */}
      <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-full text-black py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Boost connect rates with direct <br className="hidden sm:block" />
              dial mobile data.
            </h2>
            <p className="mb-4 text-lg">
              In today's competitive landscape, having accurate contact
              information is critical. Our partnership with Modigie provides{" "}
              <strong>verified mobile numbers</strong> for your prospects,
              dramatically improving connect rates and sales productivity.
            </p>
            <p className="text-lg">
              We enhance your sales development efforts by appending validated
              mobile numbers to prospect records, giving your team the best
              chance to start meaningful conversations.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Using Next.js Image for optimization and lazy loading */}
            <Image
              src="/images/phone.webp"
              alt="Phone"
              width={300} // Set appropriate width
              height={300} // Set appropriate height
              className="rounded-full border-8 border-yellow-300 shadow-lg max-w-[300px] w-full"
              priority={false} // Images below the fold should not have priority
            />
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Launch a sales development campaign",
              content:
                "Work with our team to define your ideal customer profile and outreach strategy for maximum impact.",
            },
            {
              title: "Enhance with verified contact data",
              content:
                "We process your prospect lists through Modigie's real-time database to append accurate mobile numbers.",
            },
            {
              title: "Increased call-to-connect rates",
              content:
                "Your sales team gets hot leads with validated contact information, reducing time wasted on wrong numbers.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen w-full flex items-stretch bg-[#0E1F1C]">
        <div className="w-full flex flex-col md:flex-row">
          {/* Left Side - Logo and Title */}
          <div className="bg-[#0E1F1C] md:w-2/5 p-8 flex flex-col items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Sales Development FAQs
              </h1>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="md:w-3/5 p-6 md:p-10">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex items-center w-full text-left py-4 focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-white flex-shrink-0 mr-3">
                      <Plus
                        size={20}
                        className={
                          openQuestion === index
                            ? "rotate-45 transition-transform"
                            : "transition-transform"
                        }
                      />
                    </span>
                    <span className="text-white font-medium">
                      {item.question}
                    </span>
                  </button>

                  {openQuestion === index && (
                    <div className="pl-8 pb-4 pr-4 text-gray-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/connectus.jpg')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col items-center"
        >
          {/* Using Next.js Link for client-side navigation */}
          <Link
            href="/contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
          >
            <span className="text-yellow-400">Connect</span>
            <motion.span
              className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300"
              whileHover={{ scale: 1.2, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
            </motion.span>
          </Link>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
            with us
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default SalesDevelopment;