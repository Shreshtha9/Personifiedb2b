"use client"; // <
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import Head from 'next/head'; // Import Head for SEO
import Link from 'next/link'; // Import Link for internal navigation
import Image from 'next/image'; // Import Image for image optimization
import dynamic from 'next/dynamic'; // Import dynamic for lazy loading components

// Define a simple LoadingSkeleton component for dynamic imports
const LoadingSkeleton = () => (
  <div className="flex items-center justify-center h-20 bg-gray-800 text-white">
    Loading navigation...
  </div>
);

// Dynamically import Lownav and Upnav for lazy loading
const LazyLoadedLownav = dynamic(() => import('../../components/Lownav'), { ssr: false }); // Adjust path if necessary
const DynamicUpnav = dynamic(() => import('../../components/Upnav'), {
  loading: () => <LoadingSkeleton />,
  ssr: false
}); // Adjust path if necessary

const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });

function B2BcontentSyndication() {
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
      question: 'What is content syndication, and how does it work in B2B marketing?',
      answer: 'Content syndication in B2B marketing involves distributing your content across third-party platforms to reach a broader audience and generate qualified leads. These platforms publish your content and share lead data based on user interactions, helping to fill your sales funnel with relevant prospects.'
    },
    {
      question: 'What types of content are most effective for syndication campaigns?',
      answer: 'Whitepapers, eBooks, case studies, webinars, and research reports are typically the most effective content types for syndication. These resources offer value to your target audience and are often gated, allowing you to collect lead information.'
    },
    {
      question: 'How can I ensure my content reaches the right audience?',
      answer: 'To reach the right audience, define your ideal customer profile (ICP), use precise targeting criteria like industry, job title, company size, and geography, and partner with syndication providers who offer intent data and firmographic targeting.'
    },
    {
      question: 'What metrics should I track to measure the success of a content syndication campaign?',
      answer: 'Key metrics include the number of leads generated, lead quality, conversion rates, engagement levels (such as email open and click-through rates), and ROI. Tracking these helps determine the effectiveness and refine future campaigns.'
    },
    {
      question: 'What follow-up strategies work best for nurturing syndicated leads?',
      answer: 'Use multi-touch nurture campaigns with personalized emails, follow-up calls, and retargeting ads. Align your messaging with the content the lead engaged with and educate them further through the sales funnel with additional relevant content.'
    },
    {
      question: 'How can I use content syndication leads to support account-based marketing (ABM) strategies?',
      answer: 'Use the leads to identify high-value accounts showing intent, then align sales and marketing efforts to engage those accounts with personalized content, messaging, and outreach strategies tailored to their specific needs and challenges.'
    },
    {
      question: 'What is it like working with Kulan on a content syndication campaign?',
      answer: 'Working with Kulan provides a hands-on, consultative experience. They tailor targeting strategies, provide transparency in lead reporting, and offer continuous optimization to ensure your campaign generates quality leads and meets your business objectives.'
    }
  ];

  return (
    <>
      <Head>
        <title>B2B Content Syndication Services | Your Company Name</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Drive qualified B2B leads with our content syndication services. Distribute whitepapers, eBooks & case studies to targeted audiences."
        />
        <meta
          name="keywords"
          content="B2B content syndication, lead generation, content distribution, B2B marketing, content distribution strategy, B2B lead generation services"
        />
        <link rel="canonical" href="[Your Canonical URL]" /> {/* IMPORTANT: Replace with the actual URL of this page */}

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="B2B Content Syndication Services | Your Company Name" />
        <meta
          property="og:description"
          content="Drive qualified B2B leads with our targeted content syndication solutions."
        />
        <meta property="og:image" content="/images/syndication-og.jpg" /> {/* Replace with a suitable OG image */}
        <meta property="og:url" content="[Your Canonical URL]" /> {/* IMPORTANT: Replace with the actual URL of this page */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B Content Syndication Services | Your Company Name" />
        <meta
          name="twitter:description"
          content="Drive qualified B2B leads with our targeted content syndication solutions."
        />
        <meta name="twitter:image" content="/images/syndication-og.jpg" /> {/* Replace with a suitable Twitter image */}

        {/* You can add more specific meta tags here, e.g., for schema markup (JSON-LD) */}
        {/* Example for FAQPage Schema, uncomment and replace with your data: */}
        {/*
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "${faqItems[0].question}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${faqItems[0].answer}"
                }
              },
              {
                "@type": "Question",
                "name": "${faqItems[1].question}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${faqItems[1].answer}"
                }
              }
              // ... add more FAQ items dynamically
            ]
          }
          `}
        </script>
        */}
      </Head>

      <DynamicUpnav />
      <LazyLoadedLownav />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen mt-24 bg-cover bg-center flex items-center justify-start px-6 sm:px-8 md:px-16 lg:px-32">
        <Image
          src="/images/syndication.jpg"
          alt="B2B Content Syndication Services"
          fill
          priority // Load this image with high priority as it's above the fold
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Optimize for responsive images
        />
        <div className="text-left text-white max-w-4xl relative z-10"> {/* Added z-10 to ensure text is above image */}
          <div className="flex items-center mb-6">
            <div className="bg-[#FFD800] text-black font-bold text-xl rounded-full w-14 h-14 flex items-center justify-center mr-3">
              IQ
            </div>
            <span className="text-white text-2xl font-semibold">syndicate</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Content syndication <br />
            that drives audiences <br />
            <span className="text-[#FFD800]">not just leads.</span>
          </h1>
          <button className="bg-[#FFD800] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Verified Engagement */}
      <div className="w-full bg-[#0E1F1C] text-white py-20 px-6 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
          Verified engagement with your brand <br />
          and content, <span className="text-[#FFD700]">guaranteed.</span>
        </h2>
        <div className="border-t border-gray-700 pt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-[#FFD700] font-bold text-xl mb-4">
              OUR SOLUTION
            </h3>
          </div>
          <div className="md:w-1/2 text-lg space-y-6">
            <p>
              Do more with your content than just share it. We align your
              content with our already engaged audiences, distributing assets
              your ideal customers actually want to consume.
            </p>
            <p>
              We’ve spent over two decades building and refining our first-party
              audiences, giving us unparalleled insights and precision targeting
              that go far beyond generic third-party data.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="w-full bg-[#0f2d26] py-20 px-6 sm:px-8 md:px-16 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-12">
          HOW IQSYNDICATE WORKS
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/flowchart.png"
            alt="IQSyndicate Workflow Process"
            width={1200} // Provide intrinsic width
            height={630} // Provide intrinsic height
            loading="lazy" // Ensures image is lazy-loaded
            className="w-full max-w-6xl object-contain"
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
              Strategic content placement <br /> tailored to your unique
              audience.
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
                Our team handles all aspects, from audience creation to
                placement and distribution, through to campaign management and
                quality assurance. All so you can see more revenue from content
                syndication while <strong>spending less time on it</strong>.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-6 mt-10 text-black">
              {[
                {
                  title: "Contextual Accuracy:",
                  content:
                    "Place your brand message in the right editorial context to enhance relevance and credibility.",
                },
                {
                  title: "Optimized Channels:",
                  content:
                    "Leverage high-performing platforms where your audience spends the most time for better ROI.",
                },
                {
                  title: "Brand Safety:",
                  content:
                    "Ensure your content appears in trusted environments with full transparency and control.",
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

            <Link href="/" passHref> {/* Use Link for internal navigation */}
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
                  I AM READY TO DRIVE REVENUE →
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
                Cisco Integrated Channel Program Exceeds Expectations with Kulan
              </h2>
              <p className="text-gray-300 mb-8">
                With Kulan, Cisco launched a dynamic integrated demand
                generation strategy combining display advertising,
                direct-to-decision-maker email, and content syndication to
                convert buyers and nurture them to a sales-ready stage.
              </p>
              <Link href="/" passHref> {/* Use Link for internal navigation */}
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
                style={{
                  marginTop: "-200px",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                <div className="w-full h-[700px] aspect-[1/3]">
                  <Image
                    src="/images/display-ads.webp"
                    alt="Display Ads"
                    fill // Use fill to cover the parent div's dimensions
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes, adjust as needed
                    className="object-cover rounded-xl"
                    loading="lazy"
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
              Increase call to connect with direct{" "}
              <br className="hidden sm:block" />
              dial mobile data.
            </h2>
            <p className="mb-4 text-lg">
              In the digital hustle, precise contact info is a revenue
              game-changer. IQappend nails it with Modigie’s real-time data
              model and the industry’s{" "}
              <strong>largest active cell phone database</strong>, giving you
              that competitive edge.
            </p>
            <p className="text-lg">
              Elevating call-to-connection rates, IQappend smoothly blends
              current mobile contact data into leads from our content
              syndication services.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/phone.webp"
              alt="Mobile phone with verified contact data"
              width={300} // Provide intrinsic width
              height={300} // Provide intrinsic height
              className="rounded-full border-8 border-yellow-300 shadow-lg max-w-[300px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Launch an IQsyndicate campaign",
              content:
                "Let your pharosIQ team know that you are interested in adding confirmed mobile phone data to your campaign.",
            },
            {
              title: "Add the Modigie mobile magic",
              content:
                "Through our partnership with Modigie, we process your new content syndication leads through their up-to-the-minute mobile phone database.",
            },
            {
              title: "Increased call-to-connect rates",
              content:
                "Let your sales team in on the secret: Your pharosIQ leads come with validated mobile phone data that is ready for them to use.",
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
                Content Syndication FAQs
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
          <Link
            href="/contact"
            className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
            passHref // Ensures the `href` is passed down to the underlying `<a>` tag
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

export default B2BcontentSyndication;