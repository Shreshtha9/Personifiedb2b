"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // For App Router
import React from 'react';

const WhitepaperCard = ({ paper, onClick = () => {} }) => {
  const router = useRouter();

  const generateSlug = (title) => encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/Out-Whitepaper/WhitePaperDetailPage/${generateSlug(paper.title)}`);
    onClick();
  };

  const handleDownloadClick = (e) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/Out-Whitepaper/WhitePaperDetailPage/${generateSlug(paper.title)}`);
    onClick();
  };

  // Animation variants
  const cardVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: {
      y: -8,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3, type: 'spring', stiffness: 300 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 1, y: 0 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { repeat: Infinity, repeatType: 'reverse', duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="group bg-white/10 backdrop-blur-md border border-white/20  rounded-3xl shadow-xl overflow-hidden cursor-pointer"
      onClick={handleClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ ...cardVariants.hover, scale: 1.04, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image section */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.img
          src={paper.image}
          alt={paper.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          variants={imageVariants}
        />
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col justify-between min-h-[250px]">
        {/* Tag and icon */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-2 py-1 bg-white text-black rounded-full">
            {paper.tag || 'Whitepaper'}
          </span>
          <motion.div
            whileHover={{ rotate: 20 }}
            className="text-white bg-white/10 p-2 rounded-full"
            variants={iconVariants}
          >
            {paper.icon}
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-white mb-2"
          animate={{ color: '#ffffff' }}
          transition={{ duration: 0.5 }}
        >
          {paper.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-5 line-clamp-3">
          {paper.description}
        </p>

        {/* Large screen button */}
        <motion.div className="mt-auto hidden lg:block" variants={buttonVariants}>
          <motion.button
            className="w-full py-3 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#F7D270",
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadClick}
          >
            <span>Download Now</span>
            <motion.span variants={arrowVariants}>→</motion.span>
          </motion.button>
        </motion.div>

        {/* Mobile button */}
        <div className="mt-auto lg:hidden">
          <motion.button
            className="w-full py-3 bg-white text-black rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#F7D270",
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadClick}
          >
            Download Now →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WhitepaperCard;