import React from "react";
import image from "./asset/img.png";
import { Counter } from "./components/Counter";

const App = () => {
  return (
    <>
      <div className="main">
        <h1>Hello</h1>
        <Counter />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          dolores consequuntur totam! Eius, sequi qui excepturi, modi dolore
          suscipit accusamus eum nobis dolorum necessitatibus id at? Dicta
          perferendis sint sequi.
        </p>
      </div>
      <div className="">
        <h3>Buy Menu</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export { App };
