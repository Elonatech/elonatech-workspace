import React from 'react'
import BackgroundImage from './img/5048200.png';
import BackgroundImage2 from './img/banner3.png';
import Photo from './img/pexels-ron-lach-8102677.jpg';
import photo2 from './img/417-4173625_video-editing-editing-png-hd-camera_480.png';
import './video.css';
import ICON1 from './img/png-transparent-board-clapper-cut-director-making-movie-take-the-movies-icon.png';
import ICON2 from './img/download (1).png';
import ICON3 from './img/974485.png';
import ICON4 from './img/7602189.png';
import ICON5 from './img/convert-video-icon-design-isolated-260nw-2179748723.jpg';
import ICON6 from './img/png-transparent-volume-icon-volume-computer-icons-sound-icon-volume-miscellaneous-text-hand-thumbnail.png';
import CAMERA from './img/for_emeka_720.png'


const Video = () => {
  return (

    <>
    {/* HEADER */}
        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
            <div className="container pt-5 ">
                <h1 className='text-center pt-5 text-white fw-bolder'>VIDEO EDITING</h1>
            <p className='text-center fs-5'>We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.</p>
            </div>
        </div>
        
          <div className="container">

          <div class="container px-4 align-items-center">
            <div class="row gx-5 mt-5">
              <div class="col">
              <div class="p-3 "> <img src={photo2} alt=""  className="video-img" /></div>
              </div>
              <div class="col">
                <div class="p-3 "><p className=' fs-5 text-justify'>  We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.
                      Aside the video coverage, there is a major aspect of the video production, which we handle perfectly at Elonatech, and its known as <span className='fs-5 fw-bold '>VIDEO EDITING</span>.
                      Editing is usually considered to be one part of the post production process. Other post-production tasks include titling, color correction, sound mixing, etc.
                      Video editing is the process of putting together, cleaning up and finalizing a video for presentation or output. It is mostly used to describe post-production work, which is the work done after all of the shots and footage have been taken and all that still needs to be done is to put them together in order to come up with the final output.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix align-items-center">
          <div class=" "> <img src={ CAMERA} alt=""class="col-md-6 float-md-end mb-3 ms-md-3 video-img " /></div>

            <p className='mt-2 fs-5 text-justify'>    The goal of editing is to manipulate these events to bring the communication closer to the original goal or target. It is a visual art. Aside the video coverage, there is a major aspect of the video production, which we handle perfectly at Elonatech, and its known as <span className='fs-5 fw-bold'>VIDEO EDITING.</span> Editing is usually considered to be one part of the post production process. Other post-production tasks include titling, color correction, sound mixing, etc.</p>

           
          </div>
        

          <div class="clearfix mt-5">
                <img src={Photo} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

                <h3 className='fw-bold text-danger'>The Major Tasks associated with video editing includes:</h3>
                <ul>
                    <li className='pt-2 fs-5 fw-normal'>Rearranging, adding and/or removing sections of video clips and/or audio clips</li>
                    <li  className='pt-2 fs-5 fw-normal'>Creating the flow of the narrative by arranging and rearranging scenes</li>
                    <li  className='pt-2 fs-5 fw-normal'>Adding effects, filters and additional elements such as CGI</li>
                    <li  className='pt-2 fs-5 fw-normal'>Applying colour correction, filters and other enhancements</li>
                    <li  className='pt-2 fs-5 fw-normal'>Creating transitions between clips.</li>
                </ul>
         </div>
        </div>
          {/* CARD */}
        <div className="container mt-5">

          <div className="text-center">
            <h5 className='pt-4'>OUR SERVICE</h5>
            <h2 className=' fw-bold'>Video Production to the <br /> Next Level</h2>
          </div>

         <div class="container ">
            <div class="row">
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON1} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold' >Movie Production</h5 >
                <p class="card-text p-2">Movie Production is simply everything that goes into the ideation, planning and execution of a video. Historically video production involves three phases: Pre-production, Production and Post-production.</p>
               
              </div>
            </div>
              </div>
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}} >
              <img src={ICON2} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Movie Directing</h5>
                <p class="card-text p-2">Movie Directing The directing of cinematography includes both the camera shots, Camera angles, Lighting, Shot lengths, Edits, Color palettes and Music, to obtain both a particular type of effect and mood. The director also has control over the editing to create the pace, rhythm, coherence, story, and character development needed.</p>
                
              </div>
            </div>
              </div>
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON3} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>High Quality Work</h5>
                <p class="card-text p-2">High Quality Work Delivering high-quality work in a fast-paced environment is a key skill for any professional who wants to achieve outstanding results to impress. Well-crafted work is done with care and precision. Craftsmanship requires attention to accuracy, detail, and beauty</p>
              
              </div>
            </div>
              </div>
            </div>
        </div>

        <div class="container mt-4 mb-5">
            <div class="row">
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON6} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Sound Effects</h5>
                <p class="card-text p-2">A sound effect (or audio effect) is an artificially created or enhanced sound, or sound process used to emphasize artistic or other content of films, television shows, live performance, animation, video games, music, or other media. Bring professional depth to your audio projects.</p>
              
              </div>
            </div>
              </div>
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON4} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Live Streaming</h5>
                <p class="card-text p-2">Livestreaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc.</p>
              
              </div>
            </div>
              </div>
              <div class="col mt-4">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON5} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Video Converting</h5>
                <p class="card-text p-2">Livestreaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc.</p>
             
              </div>
            </div>
              </div>
            </div>
        </div>


        
         </div>

         {/* <div class="p-3 mb-2 bg-primary text-white">
         <div className="container">
         <div class="row pt-5 pb-5">
            <div class="col-md-8 ">
              <h2 className='fw-bolder fs-1'>Engage in a conversation with a specialist regarding your upcoming video editing endeavor.</h2>
            </div>
            <div class="col-md-4">
            <button type="button" class="btn btn-danger mt-5 fs-4 fw-bold">GET IN TOUCH</button>
            </div>
          </div>
         </div>
         </div> */}
         <div className=""  style={{ backgroundImage: `url(${BackgroundImage2})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
            <div className="text-start pl-4">
            <p class=" fw-bolder fs-2 pl-4 pt-5" style={{color:"black"}}>Engage in a conversation with a specialist <br /> regarding your upcoming video <br /> editing endeavor..</p>
            <button type="button" class="btn btn-primary  fs-5 fw-bold  ml-4">GET IN TOUCH</button>
            </div>
         </div>
    
    </>
  )
}

export default Video