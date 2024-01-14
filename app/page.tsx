"use client";

import { Poppins } from "next/font/google";
import Head from "next/head";
import Content from "./content";
import React, { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Script from "next/script";
import { useRouter } from "next/navigation";

const cookieCutter = require("cookie-cutter");

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const CookieConsent = () => {
  const router = useRouter();
  const [showConsent, setShowConsent] = useState(true);

  const navigateToCookies = () => {
    document.body.style.overflow = "visible";
    router.push("/cookie-policy");
  };

  useEffect(() => {
    const result = cookieCutter.get("GDPRConsent");
    if (result == undefined) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      setShowConsent(hasCookie("GDPRConsent"));
      return;
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    document.body.style.overflow = "visible";
    setCookie("GDPRConsent", "true", {});
  };

  const rejectCookie = () => {
    setShowConsent(true);
    document.body.style.overflow = "visible";
    setCookie("GDPRConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <section className="fixed z-10 w-full">
      <div className="inset-0 bg-black bg-opacity-60">
        <div className="flex items-center justify-center h-screen mx-auto z-40">
          <div className="w-11/12 md:w-4/12 h-[340px] bg-white p-12 rounded-2xl space-y-8">
            <h1 className="text-4xl font-medium">We value your privacy</h1>
            <p className="text-dark font-medium leading-loose text-2xl">
              We use cookies to enhance your browsing experience, serve
              personalized Ads or contents, and analyze your traffic, by
              clicking "Accept All", you consent to use our site cookies.{" "}
              <p
                onClick={navigateToCookies}
                className="cursor-pointer underline text-blue-500 font-medium"
              >
                Cookie Policy
              </p>
            </p>
            <div className="space-x-5 flex justify-end items-end">
              <button
                className="font-semibold py-4 border border-blue-700 px-8 text-lg text-blue-800 rounded-lg"
                onClick={() => acceptCookie()}
              >
                Reject All
              </button>
              <button
                className="bg-blue-500 font-semibold py-4 px-8 text-lg rounded-lg text-white"
                onClick={() => acceptCookie()}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4F5VLYFERE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4F5VLYFERE');
    `}
      </Script>
      <main className={poppins.className}>
        <CookieConsent />
        <Content />
      </main>
    </>
  );
}
