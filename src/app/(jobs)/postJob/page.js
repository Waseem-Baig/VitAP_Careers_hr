"use client";

import { useEffect, useState } from "react";
import PostJobMobile from "./postjob-mobile";
import PostJobDesktop from "./postjob-desktop";

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

  return isMobile ? <PostJobMobile /> : <PostJobDesktop />;
};

export default CurrentJobsWrapper;
