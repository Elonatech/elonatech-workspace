import React from 'react';
import './livestreaming.css';
import img from './img/Supreme-Image-1030x579.jpg';
import img2 from './img/video-live-streaming-service-1B.jpg';

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
            <div class="row justify-content-center my-5 gx-4">
                <div class="col-md-6">
                    <div className="float-center">
                    <h4 className=' fw-bold' style={{color:"#34548c"}}>Livestreaming</h4>
                        <p className='text-justify'>Live streaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc.  </p>
                        <p className='text-justify'>Unlike pre-recorded videos that can be cut and edited, live streaming is just that – live and uncensored. <br /></p>
                        <p className='text-justify'>Some live streams can be private. For example, video conferencing, like Skype or Zoom, uses live streaming technology to allow you to talk to people you have invited.</p>
                        <p>Some live streams are public and might be watched by hundreds or even thousands of people.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={img} alt="" className='img-fluid'/>
                </div>
            </div>
         </div>

         <div className="container">
         <div class="row justify-content-center mt-3">
                <div class="col-md-6">
                <img src={img2} alt="" className='img-fluid' style={{width:"600px", height:"350px"}}/>
                </div>
                <div class="col-md-6">
                One of two columns
                </div>
            </div>
         </div>

   </section>
  )
}

export default livestreaming