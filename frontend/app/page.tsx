"use client";
import { fetchAPI, getStrapiURL } from "../lib/api";
import Image from "next/image";
import bhIcon from "../public/images/bh-icon-transparent.png";
import { useEffect } from "react";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/landing-page");
    if (!res.ok) {
      console.error(res.status);
    }
    const data = await res.json();
    console.log({ data });
    return data;
  } catch (e) {
    console.log(e);
  }
}

// swr stale while rendering

export default function Page() {
  useEffect(() => {
    const hello = async () => {
      return await getData();
    };

    const data = hello();
    console.log({ data });
  });

  return (
    <div className="relative flex flex-col items-center">
      <div className="h-96 w-96 relative flex flex-col justify-center">
        <Image src={bhIcon} alt="bh-icon" layout="fill" />
      </div>
      {/* <h1>hello</h1>
      <span className="self-center">
        <h1>{title}</h1>
        {description && <h4>{description}</h4>}
      </span>
      <div className="self-center">
        <Image priority width={500} height={850} src={imageUrl} alt="arizona" />
      </div> */}
    </div>
  );
}
