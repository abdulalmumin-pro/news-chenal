import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-4">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
          {/* Left - Empty space on desktop */}
          <div className="hidden md:block"></div>

          {/* Center - Logo + Title */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/logo.webp"
              alt="Bangla News 24 Logo"
              width={50}
              height={50}
              className="h-12 w-12 shrink-0 rounded-xl"
              priority
            />

            <div className="text-center">
              <h1 className="whitespace-nowrap text-xl font-bold text-red-700 sm:text-2xl">
                Bangla News 24
              </h1>

              <p className="mt-1 whitespace-nowrap text-sm text-gray-700">
                {date}
              </p>
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center justify-center gap-2 md:justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
            >
              সাইন ইন
            </button>

            <button
              type="button"
              className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800"
            >
              সাইন আপ
            </button>
          </div>
        </div>
      </div>

    <NavLinks></NavLinks>


    </header>
  );
};

export default Header;