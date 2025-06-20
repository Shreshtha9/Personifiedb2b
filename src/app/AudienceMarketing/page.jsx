'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
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
const Marketing = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const apiKey = "613d3f89-d888-4927-a609-99541b5d46ba";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          email: email,
          subject: "New Marketing Professional Newsletter Subscription",
          message: `New subscription request from: ${email}`,
          from_name: "Marketing Newsletter Subscription",
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

  // Categories data for marketing
  const categories = [
    {
      name: "Digital Marketing Specialists",
      count: "520k",
      width: "95%",
      src: "/images/mark1.webp",
      alt: "Digital Marketing Professional",
    },
    {
      name: "Content & Social Media Marketers",
      count: "480k",
      width: "85%",
      src: "/images/mark2.webp",
      alt: "Content Marketer",
    },
    {
      name: "Marketing Managers & Directors",
      count: "380k",
      width: "75%",
      src: "/images/mark3.webp",
      alt: "Marketing Manager",
    },
    {
      name: "Brand Strategists",
      count: "210k",
      width: "60%",
      src: "/images/mark4.webp",
      alt: "Brand Strategist",
    },
    {
      name: "Marketing Analysts",
      count: "180k",
      width: "50%",
      src: "/images/mark5.webp",
      alt: "Marketing Analyst",
    },
    {
      name: "Product Marketers",
      count: "150k",
      width: "45%",
      src: "/images/mark6.webp",
      alt: "Product Marketer",
    },
    {
      name: "CRM & Email Marketers",
      count: "120k",
      width: "40%",
      src: "/images/mark7.webp",
      alt: "CRM Specialist",
    },
  ];

  // Vendor data for marketing
  const vendors = [
    { name: "hubspot", logo: "/images/hubspot.webp", top: "10%", left: "15%", size: "medium" },
    { name: "orm", logo: "/images/orm.webp", top: "20%", left: "35%", size: "small" },
    { name: "onclusive", logo: "/images/onclusive.webp", top: "5%", left: "60%", size: "large" },
    { name: "bluecore", logo: "/images/bluecore.webp", top: "30%", left: "75%", size: "medium" },
    { name: "adobe", logo: "/images/adobe.webp", top: "50%", left: "15%", size: "large" },
    { name: "hightouch", logo: "/images/hightouch.webp", top: "65%", left: "30%", size: "medium" },
    { name: "mavrck", logo: "/images/mavrck.webp", top: "40%", left: "50%", size: "medium" },
    { name: "klayvio", logo: "/images/klayvio.webp", top: "60%", left: "65%", size: "small" },
    { name: "optimove", logo: "/images/optimove.webp", top: "80%", left: "75%", size: "medium" },
    { name: "linkedin", logo: "/images/linkedin.webp", top: "80%", left: "40%", size: "small" },
  ];

  // Content cards for marketing
  const contentCards = [
    {
      image: "/images/asset1.webp",
      title: "Audience Segmentation Strategies",
    },
    {
      image: "/images/asset2.webp",
      title: "Content Marketing Playbook",
    },
    {
      image: "/images/asset3.webp",
      title: "Social Media Trends Report",
    },
    {
      image: "/images/asset4.webp",
      title: "Marketing Automation Guide",
    },
    {
      image: "/images/asset5.webp",
      title: "ROI Measurement Framework",
    },
  ];

  // Topics for marketing
 const topics = [
    {
      name: "Customer Acquisition",
      opacity: 1,
      size: "text-xs",
      weight: "font-semibold",
    },
    {
      name: "Content Performance",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Brand Awareness",
      opacity: 1,
      size: "text-sm",
      weight: "font-bold",
    },
    {
      name: "Conversion Optimization",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Lead Generation",
      opacity: 1,
      size: "text-sm",
      weight: "font-semibold",
    },
    {
      name: "Market Automation",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
    {
      name: "Customer Journey",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    { name: "Automation", opacity: 1, size: "text-sm", weight: "font-bold" },
    {
      name: "Attribution Modelling",
      opacity: 0.9,
      size: "text-sm",
      weight: "font-semibold",
    },
    {
      name: "Personalization",
      opacity: 0.8,
      size: "text-xs",
      weight: "font-medium",
    },
    { name: "Innovation", opacity: 1, size: "text-sm", weight: "font-bold" },
    {
      name: "Campaign Performance",
      opacity: 0.9,
      size: "text-xs",
      weight: "font-medium",
    },
  ];
 const [radii, setRadii] = useState({
       base: "clamp(7rem, 15vw, 12rem)", // Default for small screens
       offset: "clamp(8.5rem, 18vw, 14.5rem)", // Default for small screens
       containerSize: { width: "18rem", height: "18rem" }, // Default container size
     });
   
     useEffect(() => {
       const handleResize = () => {
         let newBaseRadius = "clamp(7rem, 15vw, 12rem)";
         let newOffsetRadius = "clamp(8.5rem, 18vw, 14.5rem)";
         let newContainerWidth = "18rem";
         let newContainerHeight = "18rem";
   
         const width = window.innerWidth;
   
         // iPad Mini/Air (portrait: 768px, landscape: 1024px)
         // Nest Hub (1024x600), Nest Hub Max (1280x800)
         // iPad Pro (1024x1366, 1194x834, 1366x1024)
         // Asus ZenBook Fold (unfolded ~1920x1080)
         
   
         if (width >= 1920) {
           // Large desktops / Asus ZenBook Fold / entry-level TV screens
           newBaseRadius = "clamp(18rem, 12vw, 28rem)"; // More space for topics
           newOffsetRadius = "clamp(20rem, 15vw, 32rem)";
           newContainerWidth = "56rem"; // Larger container
           newContainerHeight = "56rem";
         } else if (width >= 1536) {
           // 2xl breakpoint, for larger monitors / some iPad Pro landscape
           newBaseRadius = "clamp(15rem, 12vw, 25rem)";
           newOffsetRadius = "clamp(17rem, 15vw, 29rem)";
           newContainerWidth = "48rem";
           newContainerHeight = "48rem";
         } else if (width >= 1280) {
           // xl breakpoint, iPad Pro landscape, Nest Hub Max
           newBaseRadius = "clamp(12rem, 13vw, 20rem)";
           newOffsetRadius = "clamp(14rem, 16vw, 24rem)";
           newContainerWidth = "42rem";
           newContainerHeight = "42rem";
         } else if (width >= 1024) {
           // lg breakpoint, iPad Mini/Air landscape, Nest Hub
           newBaseRadius = "clamp(10rem, 12vw, 18rem)";
           newOffsetRadius = "clamp(12rem, 15vw, 22rem)";
           newContainerWidth = "36rem";
           newContainerHeight = "36rem";
         } else if (width >= 768) {
           // md breakpoint, iPad Mini/Air portrait
           newBaseRadius = "clamp(8rem, 10vw, 15rem)";
           newOffsetRadius = "clamp(9.5rem, 13vw, 17.5rem)";
           newContainerWidth = "32rem";
           newContainerHeight = "32rem";
         } else if (width >= 640) {
           // sm breakpoint
           newBaseRadius = "clamp(7rem, 15vw, 12rem)";
           newOffsetRadius = "clamp(8.5rem, 18vw, 14.5rem)";
           newContainerWidth = "28rem";
           newContainerHeight = "28rem";
         }
         // For anything smaller, the initial clamp values (baseRadius and offsetRadius) will apply.
   
         setRadii({
           base: newBaseRadius,
           offset: newOffsetRadius,
           containerSize: { width: newContainerWidth, height: newContainerHeight },
         });
       };
   
       // Debounce function to limit how often handleResize is called
       let timeoutId = null;
       const debouncedHandleResize = () => {
         clearTimeout(timeoutId);
         timeoutId = setTimeout(handleResize, 100); // Adjust debounce time as needed
       };
   
       // Set initial radii on mount
       handleResize();
   
       // Add event listener for window resize
       window.addEventListener("resize", debouncedHandleResize);
   
       // Clean up event listener on component unmount
       return () => {
         window.removeEventListener("resize", debouncedHandleResize);
         clearTimeout(timeoutId);
       };
     }, []); 
  
  const icons = [
    Brain, Rocket, Users, Globe, Database, Settings, 
    BarChart, Eye, Heart, Briefcase, CheckCircle, Star
  ];

  return (
    <>
      <Head>
        <title>Marketing Audience Insights | Reach 38 Million Decision Makers</title>
        <meta 
          name="description" 
          content="Connect with marketing professionals across industries. Our precision targeting helps you reach decision makers based on their role, challenges, and interests."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-lg font-semibold text-[#333] mb-2">
                MARKETING AUDIENCE INSIGHTS
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-4">
                Reach 38 million marketing decision makers
              </h1>
              <p className="text-[#333] mb-6 text-lg leading-relaxed">
                We help marketing leaders discover innovative solutions to drive growth.
                Ensure your brand is part of their consideration set.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                TALK TO SALES
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
              <Image
                src="/images/Audimarkethero.webp"
                alt="Marketing Audience Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
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
                      className="h-6 w-6 text-black"
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
                  <span className="text-3xl font-bold">580,000</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Marketing Professionals
                  <br />
                  Engaged
                </h2>
                <p className="mb-8">
                  We connect with a vast network of marketing professionals across industries.
                  Our precision targeting helps you reach the right decision makers based on
                  their role, challenges, and interests.
                </p>
                <button className="flex items-center text-white font-bold hover:underline transition duration-300">
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
                </button>
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
                          alt={category.alt}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span>{category.name}</span>
                          <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-full text-sm font-bold">
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
                      className="h-6 w-6 text-black"
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
                  <span className="text-3xl font-bold">1,850</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  Marketing Tech Vendors
                  <br />
                  Researched
                </h2>
                <p className="mb-8">
                  Marketing teams evaluate solutions across advertising tech, marketing automation,
                  analytics, content creation, and customer engagement platforms. Our insights into
                  vendor engagement help you stand out in competitive categories.
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
                      let sizeClass = "w-16 h-16";
                      if (vendor.size === "medium") sizeClass = "w-20 h-20";
                      else if (vendor.size === "large") sizeClass = "w-24 h-24";

                      const sizePixels = vendor.size === "small" ? 64 : vendor.size === "medium" ? 80 : 96;

                      return (
                        <motion.div
                          key={index}
                          className={`absolute ${sizeClass} bg-[#0E1F1C] rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400`}
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
                            width={sizePixels}
                            height={sizePixels}
                            className="w-full h-full object-cover"
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
                    className="h-6 w-6 text-black"
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
                <span className="text-3xl font-bold">6,200</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Marketing Assets Consumed</h2>
              <p className="mb-8 max-w-4xl">
                Modern marketers consume vast amounts of content before engaging with vendors.
                Gain intelligence on the resources marketing leaders trust to inform their decisions,
                and ensure your content is part of their research journey.
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
                  <div className="h-48 bg-[#0E1F1C] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
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
              <button className="flex items-center mx-auto text-white font-bold hover:underline transition duration-300">
                GET YOUR CONTENT IN FRONT OF MARKETERS
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
              </button>
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
                {/* Responsive Central Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 
                bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 
                rounded-full shadow-2xl z-20 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 animate-pulse opacity-30"></div>
                </motion.div>

                {/* Orbiting Topic Cards - Responsive with Dynamic Spacing */}
                <div className="relative w-full overflow-visible">
                  <div className="relative mx-auto w-full overflow-visible flex justify-center items-center py-8 sm:py-12">
                    {/* Dynamically set container size based on state */}
                    <div
                      className="relative"
                      style={{
                        width: radii.containerSize.width,
                        height: radii.containerSize.height,
                      }}
                    >
                      {topics.map((topic, index) => {
                        const Icon = icons[index % icons.length];

                        // Use the dynamically calculated radii from state
                        const baseRadius = radii.base;
                        const offsetRadius = radii.offset;
                        const radius =
                          index % 2 === 0 ? baseRadius : offsetRadius;

                        const angle = (index * 360) / topics.length;
                        const x = `calc(cos(${angle}deg) * ${radius})`;
                        const y = `calc(sin(${angle}deg) * ${radius})`;

                        return (
                          <motion.div
                            key={index}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{
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
                            animate={{ scale: [1, 1.08, 1] }}
                            whileHover={{
                              scale: 1.15,
                              zIndex: 30,
                              boxShadow:
                                "0 20px 40px rgba(255, 255, 255, 0.15)",
                            }}
                          >
                            <div className="relative group cursor-pointer">
                              {/* Responsive Connection Line */}
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

                              {/* Responsive Topic Card with Dynamic Text Sizing */}
                              <motion.div
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl 
                                    p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 
                                    shadow-xl group-hover:bg-white/20 group-hover:border-yellow-400/50 
                                    transition-all duration-300 min-w-fit"
                                animate={{
                                  boxShadow: [
                                    "0 0 0 0 rgba(251, 191, 36, 0)",
                                    "0 0 0 6px rgba(251, 191, 36, 0.08)",
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
                                <div className="flex items-center justify-center space-x-1 xs:space-x-1.5 sm:space-x-2">
                                  {/* Responsive Icon */}
                                  <motion.div
                                    className="text-yellow-300 group-hover:text-yellow-200 transition-colors flex-shrink-0"
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
                                    <Icon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5" />
                                  </motion.div>

                                  {/* Responsive Text with Dynamic Sizing and Truncation */}
                                  <div className="flex-1 min-w-0 text-center">
                                    <div
                                      className={`text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 
                                            ${topic.weight} text-white group-hover:text-yellow-100 
                                            transition-colors leading-tight whitespace-nowrap 
                                            overflow-hidden text-ellipsis 
                                            max-w-[4rem] xs:max-w-[5rem] sm:max-w-[6rem] 
                                            md:max-w-[7rem] lg:max-w-[8rem] xl:max-w-[9rem] 
                                            2xl:max-w-[10rem]`}
                                      title={topic.name} // Tooltip for full text on hover
                                    >
                                      {topic.name}
                                    </div>
                                  </div>
                                </div>

                                {/* Continuous Glow Effect */}
                                <motion.div
                                  className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/15 to-yellow-400/0"
                                  animate={{ opacity: [0, 0.25, 0] }}
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

                      {/* Responsive Pulse Rings with Better Scaling */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-yellow-400/20 rounded-full"
                          style={{
                            // Dynamically scale pulse rings based on the overall container size
                            width: `calc(${radii.containerSize.width} * ${
                              0.4 + i * 0.2
                            })`, // Adjust factors as needed
                            height: `calc(${radii.containerSize.height} * ${
                              0.4 + i * 0.2
                            })`, // Adjust factors as needed
                          }}
                          animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.25, 0.08, 0.25],
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
                            42,300+
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
                             Marketing Topics
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
                               engagement patterns
                            </strong>{" "}
                           to identify emerging trends,
                  persistent challenges, and the most critical needs of marketing teams.
                          </p>
        
                          <p className="text-lg text-white/70 leading-relaxed">
                             These insights help you create{" "}
                            <strong className="text-white">better campaigns</strong>{" "}
                           campaigns that truly resonate.
                          </p>
        
                          {/* Feature Points */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                              { icon: Target, text: "Omnichannel Stratedy" },
                              { icon: TrendingUp, text: "Attribution Modelling" },
                              { icon: Zap, text: "Campaign Performance" },
                              { icon: Shield, text: "Personalization" },
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
                  The Marketing<br />
                  Professional<br />
                  newsletter with<br />
                  2.1m+ circulation
                </h2>
                <p className="mb-8 max-w-md text-gray-300">
                  The essential newsletter for marketing leaders seeking innovative solutions.
                  We curate the most valuable vendor content with a focus on measurable results,
                  making it easy to learn from proven strategies in key marketing disciplines.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <p className="mb-3 font-medium">
                    Sign up for the Marketing Professional newsletter
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Business Email"
                      className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-white text-black focus:ring-yellow-400"
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
                  {errorMessage && (
                    <motion.div
                      className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                  {isSubmitted && (
                    <motion.div
                      className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Thank you for subscribing to our newsletter!
                    </motion.div>
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
                    src="/images/marketphone.png"
                    alt="Marketing Newsletter Preview"
                    width={300}
                    height={600} className="w-full h-auto rounded-xl shadow-xl"
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

export default Marketing;