"use client";

import { useEffect, useState } from "react";
import PostJobPdfMobile from "./postjob-pdf-mobile";
import PostJobPdfDesktop from "./postjob-pdf-mobile";

const PostJobPdfWrapper = () => {
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

  return isMobile ? <PostJobPdfMobile /> : <PostJobPdfDesktop />;
};

export default PostJobPdfWrapper;
