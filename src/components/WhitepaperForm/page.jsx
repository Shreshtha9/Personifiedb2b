import { useState, useRef, useEffect } from "react";

const WhitepaperForm = ({ paper, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    workAddress: '',
    zipCode: '',
    subscribe: false
  });
  const [errors, setErrors] = useState({});
  const formContainerRef = useRef(null);

  // List of common free email domains
  const freeEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    'icloud.com',
    'protonmail.com',
    'mail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'live.com',
    'msn.com'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required';
    } else {
      // Check if it's a valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      } else {
        // Check if it's not a free email provider
        const domain = formData.email.split('@')[1].toLowerCase();
        if (freeEmailDomains.includes(domain)) {
          newErrors.email = 'Please use a company email address';
        }
      }
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [marginTop, setMarginTop] = useState('mt-36');
  useEffect(() => {
    const handleResize = () => {
      setMarginTop(getModalMarginTop());
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getModalMarginTop = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      return 'mt-50';
    }
    else if (screenWidth < 400) { // sm-md
      return 'mt-70';
    } else if (screenWidth >= 640 && screenWidth < 768) { // sm-md
      return 'mt-45';
    } else if (screenWidth >= 768 && screenWidth < 1024) { // md
      return 'mt-40';
    }
    else if (screenWidth >= 1024 && screenWidth < 1200) { // md
      return 'mt-40';
    }
    else if (screenWidth >= 1200 && screenWidth < 1300) { // md
      return 'mt-40';
    }
    else if (screenWidth >= 1300 && screenWidth < 1400) { // md
      return 'mt-0';
    }
    else { // lg and up
      return 'mt-20';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Submit to your Next.js API route instead of directly to Web3Forms
      const response = await fetch("/api/submit-whitepaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData, // Send all form data
          whitepaperTitle: paper.title, // Include whitepaper title
          downloadUrl: paper.downloadUrl // Include download URL
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);

        // Trigger download
        const link = document.createElement('a');
        link.href = paper.downloadUrl;
        link.download = `${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Handle API route errors
        console.error("Form submission error via API route:", result.message);
        alert(`Submission failed: ${result.message || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred during submission. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/30 ">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mt-3">Download Started!</h3>
            <p className="text-sm text-gray-500 mt-2">
              Your whitepaper "{paper.title}" is being downloaded.
            </p>
            <div className="mt-4">
              <button
                onClick={onClose}
                className="cursor-pointer px-4 py-2 bg-[#000e54] text-white rounded-md w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-1001 flex items-center justify-center p-4 bg-black/30 overflow-y-auto bg-opacity-50">
      {/* Modal container */}
      <div
        ref={formContainerRef}
        className={`bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto ${getModalMarginTop()} flex flex-col overflow-hidden border border-gray-200`}
      >
        {/* Header section */}
        <div className={`bg-gradient-to-r ${paper.color} flex items-center justify-between px-6 py-2 sticky top-0 z-10`}>
          <div>
            <h3 className="text-lg font-semibold text-white">Download Whitepaper</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Paper info section */}
        <div className="flex items-center gap-4 m-4 p-4 bg-gray-50 rounded-md border border-gray-100">
          <div className="text-3xl">{paper.icon}</div>
          <div>
            <h3 className="font-semibold text-sm lg:text-xl text-gray-800">{paper.title}</h3>
          </div>
        </div>

        {/* Scrollable form content */}
        <div className="px-6 pb-4 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
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
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full pl-12 px-3 py-2  rounded-md text-sm lg:text-base border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John"
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
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
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full pl-12 px-3 py-2  rounded-md text-sm lg:text-base border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Smith"
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 px-3 py-2  rounded-md text-sm lg:text-base border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@companyname.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <p className="mt-1 text-xs text-gray-500">Please use your work email (free email providers not accepted)</p>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
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
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full pl-12 px-3 py-2  rounded-md text-sm lg:text-base border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Company Name"
                />
                {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-12 px-3 py-2  rounded-md text-sm lg:text-base border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>

            {/* Work Address (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Address <span className="text-xs text-gray-500"></span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="workAddress"
                  value={formData.workAddress}
                  onChange={handleChange}
                  className="w-full pl-12 px-3 py-2 border rounded-md text-sm lg:text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent"
                  placeholder="123 Business St, Suite 100"
                />
              </div>
            </div>

            {/* Zip Code (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code <span className="text-xs text-gray-500"></span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#000e54]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full pl-12 px-3 py-2 border rounded-md text-sm lg:text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:border-transparent"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="focus:ring-[#000e54] cursor-pointer h-4 w-4 text-[#000e54] border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="subscribe" className="cursor-pointer text-xs lg:text-sm font-medium text-gray-700">
                  I'd like to receive updates about related products and services.
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Footer section */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sticky bottom-0">
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2  lg:text-base cursor-pointer text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-sm w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-4 py-2  lg:text-base cursor-pointer bg-[#000e54] text-white rounded-md disabled:opacity-50 inline-flex items-center justify-center text-sm w-full sm:w-auto"
            >
              {isLoading ? 'Downloading...' : 'Download'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-xs lg:text-sm text-gray-500 text-center">
            Your <a href="/PrivacyPolicy" className="cursor-pointer text-[#ff8633] hover:underline">privacy</a> is important to us.
            We'll never share your information with third parties.
            View our <a href="/TermsOfUse" className="cursor-pointer text-[#ff8633] hover:underline">Terms of Use</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperForm;