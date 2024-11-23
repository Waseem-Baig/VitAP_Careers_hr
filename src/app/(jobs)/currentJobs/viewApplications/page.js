"use client";

import { useEffect, useState } from "react";
import ViewApplicationDesktop from "./view-application-desktop";
import ViewApplicationMobile from "./view-application-mobile";

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

  return isMobile ? <ViewApplicationMobile /> : <ViewApplicationDesktop />;
};

export default CurrentJobsWrapper;
