"use client";
import React from "react";
import Head from "next/head";
import WhitepaperCard from "@/components/WhitepaperCard/page";
import { whitepapers } from "@/app/Out-Whitepaper/WhitepaperData/page";
import Upnav from "@/components/Upnav";
import Lownav from "@/components/Lownav";
import Footer from "@/components/Footer";

const WhitepaperPage = () => {
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Whitepapers",
    "description": "Download comprehensive guides on software comparison, vendor selection, and technology implementation to make informed business decisions.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": whitepapers?.length || 0,
      "itemListElement": whitepapers?.map((paper, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": paper.title,
        "description": paper.description
      })) || []
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Our Whitepapers | Download Comprehensive Business Technology Guides</title>
        <meta 
          name="description" 
          content="Download comprehensive guides on software comparison, vendor selection, and technology implementation to make informed business decisions." 
        />
        <meta name="keywords" content="whitepapers, software comparison, vendor selection, technology implementation, business guides" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Whitepapers | Download Comprehensive Business Technology Guides" />
        <meta property="og:description" content="Download comprehensive guides on software comparison, vendor selection, and technology implementation to make informed business decisions." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Whitepapers | Download Comprehensive Business Technology Guides" />
        <meta name="twitter:description" content="Download comprehensive guides on software comparison, vendor selection, and technology implementation to make informed business decisions." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Upnav/>
      <Lownav/>
      <div className="min-h-screen p-6 mt-36 bg-[#1E2E2B]">
        <h1 className="text-4xl font-semibold text-center mb-4 text-white">
          Our Whitepapers
        </h1>
        <p className="text-center text-white mb-8 max-w-2xl mx-auto">
          Download comprehensive guides on software comparison, vendor selection, 
          and technology implementation to make informed business decisions.
        </p>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          aria-label="Whitepaper collection"
        >
          {whitepapers.map((paper) => (
            <WhitepaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default WhitepaperPage;