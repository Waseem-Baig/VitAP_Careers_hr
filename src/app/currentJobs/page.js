"use client";

import Sidebar from "@/components/mainPageDesktop/sidebar";
import Navbar from "@/components/mainPageDesktop/navbar";
import CurrentMainBar from "./current-jobs-mainbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <CurrentMainBar />
        </div>
      </div>
    </div>
  );
};

export default page;
