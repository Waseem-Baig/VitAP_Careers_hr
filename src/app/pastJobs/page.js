"use client";

import { useEffect, useState } from "react";
import PastJobsDesktop from "./past-jobs-desktop";
import PastJobsMobile from "./past-jobs-mobile";

const PastJobsWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // You can adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return isMobile ? <PastJobsMobile /> : <PastJobsDesktop />;
};

export default PastJobsWrapper;
