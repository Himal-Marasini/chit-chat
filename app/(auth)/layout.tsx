import Navbar from "@/components/navbar/Navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="row flex items-center justify-center h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
