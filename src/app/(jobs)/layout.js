"use client";

import Navbar from "../../components/desktopComponents/navbar";
import Sidebar from "../../components/desktopComponents/sidebar";
import MobileHeader from "../../components/mobileComponents/sign-in-header";
import MobileNavbar from "../../components/mobileComponents/sign-in-navbar";
import MobileSidebar from "../../components/mobileComponents/mobile-sidebar";
import Footer from "../../components/mobileComponents/mobile-footer";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

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

  return isMobile ? (
    <div className="relative flex flex-col min-h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      )}

      {/* Header */}
      <MobileHeader onMenuClick={toggleSidebar} />
      <div
        className={`flex-grow flex flex-col gap-4 transition-all duration-300 ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        <MobileNavbar />
        {children}
      </div>
      <Footer />
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
