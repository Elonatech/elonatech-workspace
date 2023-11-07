import React from 'react';
import './livestreaming.css';
import img from './img/Supreme-Image-1030x579.jpg'

const livestreaming = () => {
  return (
   <section>
         <div className="live-background">
            <div className="container pt-5">
                <h2 className='text-center pt-md-5 text-white fw--bold'>Live streaming</h2>
                {/* <h5 class="lead fw-bold text-white text-center"> To ensure that customers can effectively use products or services without facing technical hurdles.</h5> */}
                <p class="  text-white text-center">As we adjust to the new normal, everyone is moving their social life online. Happy hours, concerts, events, seminars, <br /> late night talk shows, etc.—all digital right now.</p>
            
            </div>
         </div>

         <div className="container">
            <div class="row justify-content-center my-5">
                <div class="col-md-6">
                    <div className="float-center">
                    <h4 className=' fw-bold' style={{color:"#34548c"}}>Videoconferencing</h4>
                        <p className='text-justify'>Video conferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. This technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. <br /> </p>
                        <p className='text-justify'>Videoconferencing uses includes holding routine meetings, organizing seminars/conferences, negotiating business deals, and interviewing job candidates. <br /></p>
                        <p className='text-justify'>The main purpose of video conferencing is to help people connect, regardless of where they’re located.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={img} alt="" className='img-fluid'/>
                </div>
            </div>
         </div>

   </section>
  )
}

export default livestreaming