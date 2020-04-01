import React from "react";
import Features from "./Features";
import Items from "./Items";
import Sponsors from "./Sponsors";
import DonateBar from "./DonateBar";
export default function Home() {
  return (
    <div className='homeBucket'>
      <DonateBar />
      <Features />
      <Items />
      <Sponsors />
    </div>
  );
}
