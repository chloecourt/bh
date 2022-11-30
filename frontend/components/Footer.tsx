"use client";

import Image from "next/image";
import fbIcon from "../public/images/fbIcon.svg";
import instaIcon from "../public/images/instaIcon.svg";
import youtubeIcon from "../public/images/youtubeIcon.svg";

const onSubmit = (e: any) => {
  // something
  return;
};

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center w-full fixed bottom-0 bg-red-800">
      <div className="flex justify-center">
        <div className="flex justify-center gap-20 p-5">
          <div className="">
            <h5 className="bold">Useful Links</h5>
            <ul>
              <li>Careers</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="bold">Subscribe</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <input className="border" type="input"></input>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-8 w-full justify-center gap-3 mb-5">
        <Image src={fbIcon} height={32} width={32} alt="facebook-icon" />
        <Image src={instaIcon} alt="instagram-icon" height={32} width={32} />
        <Image src={youtubeIcon} alt="youtube-icon" height={32} />
      </div>
    </footer>
  );
};
