"use client"

import React from "react";
import { Inter, Poppins } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })


const GoogleAppleButton = (props) => {
  const handleNavigationToAndroidStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.edukoya.app&pli=1",
      "_self"
    );
  };

  const handleNavigationToAppleStore = () => {
    window.open("https://apps.apple.com/ng/app/edukoya/id6450018847", "_self");
  };

  const [size] = useState(props.size);

  const buttonStyle = {
    borderRadius: '8px',
    backgroundColor: '#000',
    cursor: 'pointer',
  }

  const buttonText = {}
  const buttonHeader = {}

  if (props.size === 'lg') {
    buttonStyle.width = "250px";
    buttonText.fontSize = "28px";
    buttonHeader.fontSize = "15px";
   
  } else if (props.size === 'md') {
    buttonStyle.width = "190px";
    buttonText.fontSize = "20px";
    buttonHeader.fontSize = "12px";
    
  } else if(props.size === 'sm'){
    buttonStyle.width = "139px";
    buttonText.fontSize = "16px";
    buttonHeader.fontSize = "10px";
    buttonStyle.padding = "5px";
  } else if(props.size === 'mob'){
    buttonStyle.width = "83px"
    buttonText.fontSize = "8px";
    buttonHeader.fontSize = "6px";
    buttonStyle.padding = "4px";
  }

  return (
    <>

      <div className="flex justify-around gap-2 rounded-lg">
        <div className="flex items-center gap-2  text-white p-3 pl-5" style={buttonStyle} onClick={handleNavigationToAndroidStore}>
          <div>
            {props.size === 'lg' ? <img src="images/google-play.svg" alt="google-play-icon" />:""}
            {props.size === 'md' ? <img src="images/google-play-md.svg" alt="google-play-icon" />:""}
            {props.size === 'sm' ? <img src="images/google-play-sm.svg" alt="google-play-icon" />:""}
            {props.size === 'mob' ? <img src="images/google-play-mob.svg" alt="google-play-icon" />:""}
          </div>
          <div>
            <p className="font-medium" style={buttonHeader}>GET IT ON</p>
            <div className={poppins.className}>
              <h4 className="font-medium" style={buttonText}>Google Play</h4>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center text-white p-3 pl-5"  style={buttonStyle} onClick={handleNavigationToAppleStore}>
          <div>
            { props.size === 'lg' ? <img src="images/apple.svg" alt="apple-play-icon" />: ""}
            { props.size === 'md' ? <img src="images/apple-md.svg" alt="apple-play-icon" />: ""}
            { props.size === 'sm' ? <img src="images/apple-sm.svg" alt="apple-play-icon" />: ""}
            { props.size === 'mob' ? <img src="images/apple-mob.svg" alt="apple-play-icon" />: ""}
          </div>
          <div>
            <p className="font-medium" style={buttonHeader}>Download on the </p>
            <div className={poppins.className}>
              <h4 className="font-medium" style={buttonText}>App Store</h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GoogleAppleButton;