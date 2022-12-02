import { fetchAPI, getStrapiURL } from "../lib/api";
import Image from "next/image";
import bhIcon from "../public/images/bh-icon-transparent.png";

// swr stale while rendering

const Page = async () => {
  // const { title, description, imageUrl } = await fetchAPI("landing-page");

  // TODO: need to make sure every image has an alt description inputted by strapi user

  return (
    <div className="relative flex flex-col justify-center">
      <Image src={bhIcon} alt="bh-icon" />
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
};

export default Page;
