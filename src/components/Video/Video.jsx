import React from 'react'
import BackgroundImage from '../Video/img/close-up-sound-engineer-studio-with-equipment_1157-47928.jpg';
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
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BackgroundImage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
            <div className="container pt-5 "  data-aos="fade-down" data-aos-duration="3000">
                <h1 className='text-center pt-5 text-white fw-bold'>VIDEO EDITING</h1>
                <h5 className='text-center fs-5'>Putting together, cleaning up and finalizing a video output </h5>
                <p className='text-center fs-6'>Part of the post-production process which includes merging, titling, color correction, sound mixing, etc.</p>
            {/* <p className='text-center fs-6'>We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.</p> */}
            </div>
        </div>
        
          <div className="container">

          <div class="container px-4 align-items-center">
            <div class="row gx-md-5 mt-5">
              <div class="col">
              <div class="p-3 " data-aos="fade-up-right" data-aos-duration="3000"> <img src={photo2} alt=""  className="video-img" /></div>
              </div>
              <div class="col">
                <div class="p-3  " data-aos="fade-up-left" data-aos-duration="3000"><p className=' fs-6 text-justify'>  We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.
                      Aside the video coverage, there is a major aspect of the video production, which we handle perfectly at Elonatech, and its known as <span className='fs-5 fw-bold '>VIDEO EDITING</span>.
                      Editing is usually considered to be one part of the post production process. Other post-production tasks include titling, color correction, sound mixing, etc.
                      Video editing is the process of putting together, cleaning up and finalizing a video for presentation or output. It is mostly used to describe post-production work, which is the work done after all of the shots and footage have been taken and all that still needs to be done is to put them together in order to come up with the final output.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix align-items-center" data-aos="fade-left" data-aos-duration="2000">
           <div class=" "   > <img src={ CAMERA} alt=""class="col-md-6 float-md-end mb-3 ms-md-3 video-img " /></div>

            <p className='pt-md-5 fs-6 text-justify'>   Creating videos often involves recording and then compiling multiple shots to create a unique video. Video editing is the post-production process, which may involve rearranging clips, creating transitions, correcting color, adding audio, and adding titles and subtitles. It is a visual art. <br /> <br /> The goal of video editing is to choose the best clips, create a cohesive flow, and add effects to tell the story you want to tell in a way that engages the viewer.  Likewise, to manipulate these events to bring the communication closer to the original goal or target.</p>

           
          </div>
        

          <div class="clearfix mt-5" data-aos="fade-right" data-aos-duration="2000">
                <img src={Photo} class="col-md-6 float-md-end mb-3 ms-md-3 video-img-1" alt="..." />

                <h3 className='fw-bold text-danger' >The Major Tasks associated with video editing includes:</h3>
                <ul >
                    <li className='pt-2 fs-6 fw-normal'>Rearranging, adding and/or removing sections of video clips and/or audio clips</li>
                    <li  className='pt-2 fs-6 fw-normal'>Creating the flow of the narrative by arranging and rearranging scenes</li>
                    <li  className='pt-2 fs-6 fw-normal'>Adding effects, filters and additional elements such as CGI</li>
                    <li  className='pt-2 fs-6 fw-normal'>Applying colour correction, filters and other enhancements</li>
                    <li  className='pt-2 fs-6 fw-normal'>Creating transitions between clips.</li>
                </ul>
         </div>
        </div>
          {/* CARD */}
        <div className="container mt-5">

          <div className="text-center" >
            <h2 className=' fw-bold'>Video Production to the <br /> Next Level</h2>
          </div>

         <div class="container ">
            <div class="row">
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON1} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold' >Movie Production</h5 >
                <p class="card-text p-1 text">Movie Production is simply everything that goes into the ideation, planning and execution of a video. Historically video production involves three phases: Pre-production, Production and Post-production.</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="2000">
              <div class="card h-100" style={{width:"23rem"}} >
              <img src={ICON2} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Movie Directing</h5>
                <p class="card-text p-1 text">Movie Directing The directing of cinematography includes both the camera shots, Camera angles, Lighting, Shot lengths, Edits, Color palettes and Music, to obtain both a particular type of effect and mood. The director also has control over the editing to create the pace, rhythm, coherence, story, and character development needed.</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="3000">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON3} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>High Quality Work</h5>
                <p class="card-text  p-1 text">High Quality Work Delivering high-quality work in a fast-paced environment is a key skill for any professional who wants to achieve outstanding results to impress. Well-crafted work is done with care and precision. Craftsmanship requires attention to accuracy, detail, and beauty</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
            </div>
        </div>

        <div class="container mt-4 mb-5">
            <div class="row">
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON6} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Sound Effects</h5>
                <p class="card-text  p-1 text">A sound effect (or audio effect) is an artificially created or enhanced sound, or sound process used to emphasize artistic or other content of films, television shows, live performance, animation, video games, music, or other media. Bring professional depth to your audio projects.</p>
                  <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="2000">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON4} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Live Streaming</h5>
                <p class="card-text  p-1 text">Livestreaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc.</p>
                  <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="3000">
              <div class="card h-100" style={{width:"23rem"}}>
              <img src={ICON5} alt="" className='image-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Video Converting</h5>
                <p class="card-text  p-1 text">Changing one video format to another. Video conversion may imply both a change of file format or a change of medium such as from tape to disk or from SD card to DVD, in any case, a video converter is needed. A video converter is a software program that has the ability to change the file from its current state to a different state.</p>
                <input type="checkbox" class="text-btn p-2" />
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