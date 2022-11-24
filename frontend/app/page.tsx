// const getHomeScreen = async () => {
//   const url =
//     "http://localhost:1337/uploads/arizona_mountainscape_152a1bfac6.jpg";
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const response = await fetch(url, options);
//   if (!response.ok) {
//     console.error(response.statusText);
//     throw new Error("An error occured please try again");
//   }
//   const data = await response.json();
//   return data;
// };

export default async () => {
  // const data = await getHomeScreen();
  const data = "meow";
  console.log("this is homescreen fetch", data);
  return <div>Hi there!</div>;
};
