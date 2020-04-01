import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <div className='featuresBucket container'>
        <h3>HOW WE WORK</h3>
        <div className='card-deck'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Material Collection</h5>
              <i class='fa fa-car' aria-hidden='true'></i>

              <p className='card-text'>
                Appeal to citizens.
                <br /> Leverage existing resources/infrastructure.
                <br /> Enable/promote hygienic procurement.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Donate at your Doorstep</h5>
              <i class='fa fa-home' aria-hidden='true'></i>

              <p className='card-text'>
                Location based smartphone application. <br />
                Broadcast vital pickup/drop-off information.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Dropzone near you</h5>
              <i class='fa fa-shopping-bag' aria-hidden='true'></i>

              <p className='card-text'>
                Utilize first responders to enable safe distribution.
                <br />
                Need based location prioritizing/distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
