import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const [increment, setIncrement] = useState("hhh");
  const Inc = () => {
    setIncrement("Karthi");
    setIncrement("Veda");
  };
  useEffect(() => {
    Inc();
  }, []);
  // console.log(setIncrement);
//   console.log(increment);
  return (
    <div>
      <h1>Home {increment} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a
        incidunt earum impedit soluta inventore, tenetur vero atque molestias,
        sed asperiores ad blanditiis ullam nesciunt voluptatem consectetur,
        beatae reprehenderit repellendus.
      </p>

      <Outlet />
    </div>
  );
};
