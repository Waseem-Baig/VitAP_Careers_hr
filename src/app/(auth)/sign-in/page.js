"use client";

import { useEffect, useState } from "react";
import SignInMobile from "./sign-in-mobile-empty";
import SignIn from "./sign-in-desktop";

const SignInWrapper = () => {
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

  return isMobile ? <SignInMobile /> : <SignIn />;
};

export default SignInWrapper;
