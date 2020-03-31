import React from "react";
import Banner from "../../Assets/banner.jpg";

export default function Masthead() {
  return (
    <div className='bannerBucket'>
      <img src={Banner} alt='Covid-19' className='img-responsive' />
    </div>
  );
}
