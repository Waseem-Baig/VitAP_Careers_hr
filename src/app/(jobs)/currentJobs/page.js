"use client";

import { useEffect, useState } from "react";
import CurrentJobsDesktop from "./current-jobs-desktop";
import CurrentJobsMobile from "./current-jobs-mobile";

const CurrentJobsWrapper = () => {
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

  return isMobile ? <CurrentJobsMobile /> : <CurrentJobsDesktop />;
};

export default CurrentJobsWrapper;
