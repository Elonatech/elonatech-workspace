import React from 'react'
import './videoconferencing.css'
import img from "../VideoConferencing/img/Screenshot 2023-11-06 111826.png"
import img2 from "../VideoConferencing/img/Screenshot 2023-11-06 111949.png"
import img3 from '../VideoConferencing/img/african-american-vlogger-using-camera-record-video_482257-26747.jpg'

const videoconferencing = () => {
  return (
 <section>
    <div className="vid-background">
        <div className="container pt-5">
            <h2 className='text-center pt-md-5 text-white fw--bold'>Video Conferencing</h2>
            {/* <h5 class="lead fw-bold text-white text-center"> To ensure that customers can effectively use products or services without facing technical hurdles.</h5> */}
            <p class="  text-white text-center">As we adjust to the new normal, everyone is moving their social life online. Happy hours, concerts, events, seminars, <br /> late night talk shows, etc.—all digital right now.</p>
        
        </div>
    </div>

    <div className="container position-relative">
        <div class="row justify-content-center mt-4 mb-4">
          <div class="col-md-7 position-relative"  style={{ position: 'relative' }}>

              <div className="d-none d-md-flex">
                <div  style={{ position: 'absolute', top: '50%', left: '50%' }}> <img src={img2} alt=""  className='img-fluid' style={{width:"300px", height:"150px"}}/> </div>
                <div  style={{ position: 'absolute', bottom: '50%', right: '50%' }}> <img src={img} alt=""  className='img-fluid' style={{width:"300px", height:"150px"}}/> </div>
              </div>
             
             <div className="d-md-none d-flex">
              <img src={img} alt="" className='img-fluid'/>
             </div>
           
          </div>
          <div class="col-md-5 pt-3 ">
            <div className="float-center">
              <h4 className='text-black fw-bold'>Videoconferencing</h4>
              <p className='text-justify'>Video conferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. This technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. <br /> </p>
              <p className='text-justify'>Videoconferencing uses includes holding routine meetings, organizing seminars/conferences, negotiating business deals, and interviewing job candidates. <br /></p>
              <p className='text-justify'>The main purpose of video conferencing is to help people connect, regardless of where they’re located.</p>
            </div>
           </div>
        </div>
        </div>

      <div className="" style={{backgroundColor:"#34548c", marginTop:"5rem"}}>
        <div className="container">
        <div class="row justify-content-center py-5">
          <div class="col-md-6">
            <h2 className='text-black fw-bold'>What Kind of Video Conferencing Equipment is Needed?</h2>
            <ul className='text-black '>
              <li>Displays: laptop, desktop monitor, television screen</li>
              <li>Microphones and cameras: built-in microphones and webcams, USB microphones and webcams</li>
              <li>Speakers: built-in computer speaker, external speaker, VoIP (voice over IP) conferencing phone</li>
              <li>Internet Connection: WiFi, Ethernet</li>
              <li>Video Conferencing Software: video conferencing tools and apps</li>
            </ul>
          </div>
          <div class="col-md-6">
             <img src={img3} alt="" className='img-fluid pt-2 pt-md-0'/>
          </div>
        </div>
        </div>
      </div>
           
 </section>
  )
}

export default videoconferencing