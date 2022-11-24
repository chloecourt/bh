const getHomeScreen = async () => {
  const url = "http://localhost:1337/api/homescreen";
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(response.statusText);
      throw new Error("An error occured please try again");
    }
    const data = await response.blob();
    const landingPageImageUrl = URL.createObjectURL(data);
    return landingPageImageUrl;
  } catch (e) {
    console.error("this is the error", e);
  }
};

// export function getStrapiMedia(media: any) {
//   const { url } = media.data.attributes;
//   // const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
//   return imageUrl;
// }

const Page = async () => {
  const data = await getHomeScreen();
  console.log("does this show?", data);

  return (
    <div>
      <span>
        <h1>hello there!</h1>
      </span>
      <img
        className=""
        src={
          "http://localhost:1337/uploads/arizona_mountainscape_152a1bfac6.jpg"
        }
        alt="arizona"
      />
    </div>
  );
};

export default Page;
