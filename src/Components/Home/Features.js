import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <div className='featuresBucket container'>
        <h3>HOW WE WORK</h3>
        <div className='card-deck'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Schedule a Pickup</h5>
              <i class='fa fa-car' aria-hidden='true'></i>

              <p className='card-text'>
                Enter the pickup location, and schedule a pickup.
                *convenience fee applicable. You can also choose to go
                for the drop off option in case you want to drop the
                donations yourself.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Donate at your Doorstep</h5>
              <i class='fa fa-home' aria-hidden='true'></i>

              <p className='card-text'>
                We will come to your doorstep to pick up the donations
                in the chosen slot and deliver them to the NGO where
                they can be given a new life.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Dropzone near you</h5>
              <i class='fa fa-shopping-bag' aria-hidden='true'></i>

              <p className='card-text'>
                This is a wider card with supporting text below as a
                natural lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
