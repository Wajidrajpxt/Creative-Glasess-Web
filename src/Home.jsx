import React, { useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Loader from "./Loader";
import Footer from "./Footer";
import Items from "./Page";

export default function Home() {
  // const [boolean, setboolean] = useState(true);

  // setTimeout(() => {
  //   setboolean(false);
  // }, 3000);


    const [boolean,setboolean] = useState(true)

    setTimeout(()=>{
      setboolean(false)
    },500)

  return (
    <>
      {boolean ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <Banner />
          <Items/>
          <Footer/>
        </div>
      )}
    </>
  );
}
