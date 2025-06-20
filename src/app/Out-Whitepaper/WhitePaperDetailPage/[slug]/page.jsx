"use client";

import { useParams, useRouter } from "next/navigation";
// Corrected path: WhitepaperData is a folder with a page.jsx
import { whitepapers } from "@/app/Out-Whitepaper/WhitepaperData/page"; 
// Corrected path: WhitepaperDetail is in components/WhitepaperDetail/page.jsx
import WhitepaperDetail from "@/components/WhitepaperDetail/page";
const WhitePaperDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  // Convert slug back to title format
  const decodedTitle = decodeURIComponent(slug).replace(/-/g, " ");
  const paper = whitepapers.find(
    (p) => p.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!paper) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">404 - Not Found</h1>
        <p className="text-gray-600">The whitepaper you're looking for doesn't exist.</p>
        <button
          className="mt-6 px-6 py-2 bg-[#000e54] text-white rounded-md"
          onClick={() => router.push("/WhitePaper")}
        >
          Back to Whitepapers
        </button>
      </div>
    );
  }

  return (
    <WhitepaperDetail paper={paper} />
  );
};

export default WhitePaperDetailPage;