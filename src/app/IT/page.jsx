"use client"; // This directive makes the component a Client Component

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component for optimization
import Link from "next/link"; // Import Next.js Link component for navigation
import { motion } from "framer-motion";
import Lownav from "../../components/Lownav";
import Upnav from "../../components/Upnav";
import Footer from "../../components/Footer";
import { 
  Lightbulb, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Zap, 
  Shield,
  Brain,
  Rocket,
  Users,
  Globe,
  Database,
  Settings,
  BarChart,
  Eye,
  Heart,
  Briefcase,
  CheckCircle,
  Star
} from 'lucide-react';

const It = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Replace with your Web3Forms API key
      const apiKey = "d2de4773-7e69-47b5-976c-50267c31532a";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          email: email,
          subject: "New Finance Professional Newsletter Subscription",
          message: `New subscription request from: ${email}`,
          from_name: "Finance Newsletter Subscription",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to submit. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const categories = [
    {
      name: "Software Development & Engineering",
      count: "468k",
      width: "95%",
      src: "/images/person1.webp",
      alt: "Professional 1",
    },
    {
      name: "IT Generalists, Specialists & Analysts",
      count: "396k",
      width: "80%",
      src: "/images/person2.webp",
      alt: "Professional 2",
    },
    {
      name: "Data Management, Data Science & BI",
      count: "168k",
      width: "60%",
      src: "/images/person3.webp",
      alt: "Professional 3",
    },
    {
      name: "DevOps, IT Ops & Systems",
      count: "63k",
      width: "30%",
      src: "/images/person4.webp",
      alt: "Professional 4",
    },
    {
      name: "IT Support & Helpdesk",
      count: "61k",
      width: "28%",
      src: "/images/person5.webp",
      alt: "Professional 5",
    },
    {
      name: "IT Networking & Infrastructure",
      count: "58k",
      width: "26%",
      src: "/images/person6.webp",
      alt: "Professional 6",
    },
    {
      name: "IT Security",
      count: "47k",
      width: "21%",
      src: "/images/person7.webp",
      alt: "Professional 7",
    },
  ];

  const vendors = [
    {
      name: "zscaler",
      logo: "/images/zscaler.webp",
      top: "10%",
      left: "15%",
      size: "medium",
    },
    {
      name: "aws",
      logo: "/images/aws.webp",
      top: "20%",
      left: "35%",
      size: "small",
    },
    {
      name: "cisco",
      logo: "/images/cisco.webp",
      top: "5%",
      left: "60%",
      size: "large",
    },
    {
      name: "gooddata",
      logo: "/images/gooddata.webp",
      top: "30%",
      left: "75%",
      size: "medium",
    },
    {
      name: "ibm",
      logo: "/images/ibm.png",
      top: "50%",
      left: "15%",
      size: "large",
    },
    {
      name: "mavrck",
      logo: "/images/mavrck.webp",
      top: "65%",
      left: "30%",
      size: "medium",
    },
    {
      name: "microfocus",
      logo: "/images/microfocus.webp",
      top: "40%",
      left: "50%",
      size: "medium",
    },
    {
      name: "nvidia",
      logo: "/images/nvidia.webp",
      top: "60%",
      left: "65%",
      size: "small",
    },
    {
      name: "sap",
      logo: "/images/sap.webp",
      top: "80%",
      left: "75%",
      size: "medium",
    },
    {
      name: "tibco",
      logo: "/images/tibco.webp",
      top: "80%",
      left: "40%",
      size: "small",
    },
  ];

  const contentCards = [
    {
      image: "/images/audiences-thumbs-6.webp",
      title: "Audience Segment 6",
    },
    {
      image: "/images/audiences-thumbs-1.webp",
      title: "Audience Segment 1",
    },
    {
      image: "/images/audiences-thumbs-2-1.webp",
      title: "Audience Segment 2",
    },
    {
      image: "/images/audiences-thumbs-4-1.webp",
      title: "Audience Segment 4",
    },
    {
      image: "/images/audiences-thumbs-5-1.webp",
      title: "Audience Segment 5",
    },
  ];
   const topics = [
    {
      name: "Market Analysis",
      opacity: 1,
      size: "text-sm",
      weight: "font-semibold",
    },
    {
      name: "Consumer Behavior",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Financial Trends",
      opacity: 1,
      size: "text-sm",
      weight: "font-bold",
    },
    {
      name: "Digital Transformation",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Risk Management",
      opacity: 1,
      size: "text-sm",
      weight: "font-semibold",
    },
    {
      name: "Investment Strategies",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Compliance",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    { name: "Automation", opacity: 1, size: "text-sm", weight: "font-bold" },
    {
      name: "Data Analytics",
      opacity: 0.9,
      size: "text-sm",
      weight: "font-semibold",
    },
    {
      name: "Customer Experience",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    { name: "Innovation", opacity: 1, size: "text-sm", weight: "font-bold" },
    {
      name: "Sustainability",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
  ];
 
  
  const icons = [
    Brain, Rocket, Users, Globe, Database, Settings, 
    BarChart, Eye, Heart, Briefcase, CheckCircle, Star
  ];

  return (
    <>
      <Upnav />
      <Lownav />
      <div className="font-sans mt-36">
        {/* Hero Section */}
        <motion.section
          className="bg-white py-16 px-4 md:px-8 lg:px-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-lg font-semibold text-[#333] mb-2">
                IT AUDIENCE INSIGHTS
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-4">
                Reach 46 million IT buyers
              </h1>
              <p className="text-[#333] mb-6 text-lg leading-relaxed">
                We help Information Technology leaders research solutions to
                complex problems. Make sure your brand is part of their journey.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                TALK TO SALES
              </button>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/Audiences-IT.webp"
                alt="IT Audience Illustration"
                width={500} // Set appropriate width
                height={500} // Set appropriate height
                layout="responsive" // Makes image responsive
                objectFit="contain" // Ensures the image fits within its container
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/500/500"; // Fallback placeholder
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Professionals Engaged Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <motion.div
                className="w-full lg:w-2/5 mb-8 lg:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold">620,000</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Professionals
                  <br />
                  Engaged
                </h2>
                <p className="mb-8">
                  We recommend content to a wide-reaching Finance audience based
                  on their job role and experience. Precision targeting you can
                  tap into to reach the right Accounts & Contacts.
                </p>
                {/* Updated to Link component */}
                <Link href="/Contact" legacyBehavior>
                  <a className="flex items-center text-white font-bold hover:underline transition duration-300">
                    CONTACT US TO LEARN MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </Link>
              </motion.div>

              <div className="w-full lg:w-3/5 lg:pl-16">
                <motion.div
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                >
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#0E1F1C] rounded-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={category.src}
                          alt={category.name}
                          width={40}
                          height={40}
                          objectFit="cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/api/placeholder/40/40";
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span>{category.name}</span>
                          <span className="bg-yellow-400 text-white px-2 py-0.5 rounded-full text-sm">
                            {category.count}
                          </span>
                        </div>
                        <div className="h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-yellow-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: category.width }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendors Researched Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col lg:flex-row items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-bold">2,350</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Vendors
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  IT teams rely on software solutions for Network & Cloud
                  Security, Application Development, Big Data, Process
                  Automation, IT Infrastructure, IoT and more. Our insights into
                  vendor engagement can help you go-to-market efficiently in
                  highly competitive categories.
                </p>
              </div>

              <div className="w-full lg:w-2/3 lg:pl-16">
                <div className="relative min-h-[300px]">
                  <motion.div
                    className="w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                  >
                    {vendors.map((vendor, index) => {
                      let sizeValue;
                      if (vendor.size === "medium") sizeValue = 80;
                      else if (vendor.size === "large") sizeValue = 96;
                      else sizeValue = 64; // default small

                      return (
                        <motion.div
                          key={index}
                          className={`absolute w-${sizeValue / 4} h-${
                            sizeValue / 4
                          } bg-[#0E1F1C] rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400`}
                          variants={circleAnimation}
                          whileHover={{ scale: 1.1 }}
                          style={{
                            top: vendor.top,
                            left: vendor.left,
                          }}
                        >
                          <Image
                            src={vendor.logo}
                            alt={vendor.name}
                            width={sizeValue}
                            height={sizeValue}
                            objectFit="contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/api/placeholder/80/80";
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assets Consumed Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-3xl font-bold">5,900</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Assets Consumed</h2>
              <p className="mb-8 max-w-4xl">
                Today's B2B buyers prefer to self-educate before vendor
                engagement, making your content a crucial part of the sales
                process. Gain intelligence on the content favored by IT leaders
                to inform your marketing strategies.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {contentCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0E1F1C] rounded-lg overflow-hidden cursor-pointer shadow-lg"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="h-48 bg-[#0E1F1C] overflow-hidden relative">
                    {" "}
                    {/* Added relative to parent for Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill" // Fill parent div
                      objectFit="cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/300/200";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-white">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 text-center">
              {/* Updated to Link component */}
              <Link href="/contact-us flex items-center mx-auto text-white font-bold hover:underline transition duration-300">
                GET YOUR CONTENT INTO THE HANDS OF BUYERS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Researched Section */}
      
<section className="relative bg-[#0E1F1C] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
              {/* Enhanced Left Content - Interactive Cloud */}
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {/* Central Hub */}
                {/* Responsive Central Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 
             bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 
             rounded-full shadow-2xl z-20 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 animate-pulse opacity-30"></div>
                </motion.div>

                {/* Orbiting Topic Cards - Properly Organized with Continuous Heartbeat */}
                <div className="relative w-full overflow-visible">
                  <div className="relative mx-auto w-full overflow-visible flex justify-center items-center py-8 sm:py-12">
                    {/* Responsive container with viewport-based sizing */}
                    <div className="relative w-[20rem] h-[20rem] xs:w-[24rem] xs:h-[24rem] sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[48rem] 2xl:h-[48rem]">
                      {topics.map((topic, index) => {
                        const Icon = icons[index % icons.length];
                        // Adjust radius based on screen size
                        const radius = `calc(min(20vw, 12rem) + ${
                          index % 2 === 0 ? "0px" : "2rem"
                        })`;
                        const angle = (index * 360) / topics.length;
                        const x = `calc(cos(${angle}deg) * ${radius})`;
                        const y = `calc(sin(${angle}deg) * ${radius})`;

                        return (
                          <motion.div
                            key={index}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                              // Use CSS variables for dynamic positioning
                              "--x": x,
                              "--y": y,
                              "--radius": radius,
                            }}
                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                            whileInView={{
                              opacity: topic.opacity,
                              scale: 1,
                              x: "var(--x)",
                              y: "var(--y)",
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.1,
                              type: "spring",
                              stiffness: 100,
                              scale: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                delay: index * 0.15,
                              },
                            }}
                            animate={{ scale: [1, 1.12, 1] }}
                            whileHover={{
                              scale: 1.2,
                              zIndex: 30,
                              boxShadow:
                                "0 20px 40px rgba(255, 255, 255, 0.15)",
                            }}
                          >
                            <div className="relative group cursor-pointer">
                              {/* Connection Line - now responsive */}
                              <motion.div
                                className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent origin-left transform -translate-y-1/2"
                                style={{
                                  width: "var(--radius)",
                                  transform: `translate(-50%, -50%) rotate(${
                                    angle + 180
                                  }deg)`,
                                }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                  duration: 1,
                                  delay: index * 0.05,
                                }}
                              />

                              {/* Topic Card - made more compact on small screens */}
                              <motion.div
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 sm:p-3 shadow-xl group-hover:bg-white/20 group-hover:border-yellow-400/50 transition-all duration-300"
                                animate={{
                                  boxShadow: [
                                    "0 0 0 0 rgba(251, 191, 36, 0)",
                                    "0 0 0 8px rgba(251, 191, 36, 0.1)",
                                    "0 0 0 0 rgba(251, 191, 36, 0)",
                                  ],
                                  borderColor: [
                                    "rgba(255, 255, 255, 0.2)",
                                    "rgba(251, 191, 36, 0.4)",
                                    "rgba(255, 255, 255, 0.2)",
                                  ],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  ease: "easeInOut",
                                  delay: index * 0.2,
                                }}
                              >
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                  <motion.div
                                    className="text-yellow-300 group-hover:text-yellow-200 transition-colors"
                                    animate={{
                                      color: [
                                        "rgb(253, 224, 71)",
                                        "rgb(251, 191, 36)",
                                        "rgb(253, 224, 71)",
                                      ],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      repeatType: "loop",
                                      ease: "easeInOut",
                                      delay: index * 0.1,
                                    }}
                                  >
                                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </motion.div>
                                  <div
                                    className={`text-sm sm:text-base ${topic.weight} text-white group-hover:text-yellow-100 transition-colors whitespace-nowrap`}
                                  >
                                    {topic.name}
                                  </div>
                                </div>

                                {/* Continuous Glow */}
                                <motion.div
                                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0"
                                  animate={{ opacity: [0, 0.3, 0] }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                    delay: index * 0.25,
                                  }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* Responsive Pulse Rings */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-yellow-400/20 rounded-full"
                          style={{
                            width: `calc(${8 + i * 4}rem)`,
                            height: `calc(${8 + i * 4}rem)`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Stats Badge */}
                <motion.div
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full mr-4">
                    <BarChart3 className="h-5 w-5 text-black" />
                  </div>
                  <motion.span
                    className="text-3xl font-bold bg-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    37,500+
                  </motion.span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.h2
                    className="text-3xl lg:text-4xl font-bold leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="bg-yellow-400 bg-clip-text text-transparent">
                      Topics
                    </span>
                    <br />
                    <span className="bg-yellow-400 bg-clip-text text-transparent">
                      Researched
                    </span>
                  </motion.h2>

                  {/* Accent Line */}
                  <motion.div
                    className="w-24 h-1 bg-yellow-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>

                {/* Enhanced Description */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    We analyze{" "}
                    <strong className="text-yellow-400">
                      millions of engagement signals
                    </strong>{" "}
                    to identify common pain points, shifting trends and the most
                    critical business needs of Finance teams.
                  </p>

                  <p className="text-lg text-white/70 leading-relaxed">
                    Insights we leverage to help you run{" "}
                    <strong className="text-white">better campaigns</strong>{" "}
                    with precision and impact.
                  </p>

                  {/* Feature Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      { icon: Target, text: "Precision Targeting" },
                      { icon: TrendingUp, text: "Trend Analysis" },
                      { icon: Zap, text: "Real-time Insights" },
                      { icon: Shield, text: "Reliable Data" },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-yellow-400">
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="text-white/80 font-medium">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#0E1F1C] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                className="w-full lg:w-1/2 mb-8 lg:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className="text-sm uppercase font-bold mb-2">
                  POWERED BY OUR WEEKLY NEWSLETTER
                </p>
                <h2 className="text-5xl font-bold mb-6">
                  The IT
                  <br />
                  Professional
                  <br />
                  newsletter with
                  <br />
                  1.8m+ circulation
                </h2>
                <p className="mb-8 max-w-md text-gray-300">
                  The only newsletter dedicated to helping IT teams discover
                  solutions that drive business outcomes. Curating endless
                  vendor content with a results-oriented approach, we make it
                  easy to learn from what's worked in the areas that matter
                  most.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <p className="mb-3 font-medium">
                    Sign up for the IT Professional newsletter
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Business Email"
                      className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black bg-white"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition duration-300 disabled:bg-gray-400"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING..." : "SIGN UP"}
                    </button>
                  </div>
                  {isSubmitted && (
                    <p className="text-green-500 mt-2">
                      Thank you for subscribing!
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
                  )}
                </form>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative max-w-xs">
                  <Image
                    src="/images/IT-909x1536-1.webp"
                    alt="IT Newsletter Preview"
                    width={909} // Original width
                    height={1536} // Original height
                    layout="responsive"
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default It;
