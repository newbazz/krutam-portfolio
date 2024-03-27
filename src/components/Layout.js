import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8  ${className}`}
    >
      {children}
      <GoogleAnalytics gaId="G-0SB8PGC12W" />
    </div>
  );
};

export default Layout;
