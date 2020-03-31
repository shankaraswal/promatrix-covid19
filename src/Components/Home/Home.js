import React from "react";
import Features from "./Features";
import Items from "./Items";
import Sponsors from "./Sponsors";

export default function Home() {
  return (
    <div className='homeBucket'>
      <Features />
      <Items />
      <Sponsors />
    </div>
  );
}
