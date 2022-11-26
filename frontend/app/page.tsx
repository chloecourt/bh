import { fetchAPI, getStrapiURL } from "../lib/api";

const Page = async () => {
  const { title, description, imageUrl } = await fetchAPI("landing-page");

  // TODO: need to make sure every image has an alt description inputted by strapi user

  return (
    <div>
      <span>
        <h1>{title}</h1>
        {description && <h4>{description}</h4>}
      </span>
      <img className="" src={imageUrl} alt="arizona" />
    </div>
  );
};

export default Page;
