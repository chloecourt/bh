"use client";

import Image from "next/image";
import fbIcon from "../public/images/fbIcon.svg";
import instaIcon from "../public/images/instaIcon.svg";
import tikTokIcon from "../public/images/tikTokIcon.svg";

export const Footer = () => {
  return (
    <footer className="flex justify-center gap-20 w-full bg-blue-700">
      <div>
        <span></span>
        <hr className="w-10"></hr>
      </div>
      <div className="flex justify-center gap-20 p-5">
        <div className="w-">
          <h5 className="bold text-gray-800">Useful Links</h5>
          <ul>
            <li>Careers</li>
            <li>Work with Us</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2>Subscribe</h2>
          <form>
            <input className="border" type="input"></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
      <div>
        <Image src={fbIcon} height={32} width={32} alt="facebook-icon" />
        <Image src={instaIcon} alt="instagram-icon" height={32} width={32} />
        <Image src={tikTokIcon} alt="tiktok-icon" height={32} />
      </div>
    </footer>
  );
};
