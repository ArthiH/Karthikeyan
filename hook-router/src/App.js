import { Route, Routes } from "react-router-dom";
import { Nav } from "./page/Nav";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Blog } from "./page/Blog";
import { createContext, useState } from "react";


export const NewCreation=createContext()

export const App = () => {
  const [user, setUser] = useState("karthi");

  return (
    <>
     <NewCreation.Provider value={user} >
     <Nav />
      <Routes>
        <Route path="/" Component={Home}>
          <Route index element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
     </NewCreation.Provider>
    </>
  );
};
