import React from 'react'
import BackgroundImage from './img/5048207.jpg';
import Photo from './img/pexels-ron-lach-8102677.jpg';

const Video = () => {
  return (

    <>
    {/* HEADER */}
        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
            <div className="container pt-5 ">
                <h1 className='text-center pt-5 text-danger fw-bolder'>VIDEO EDITING</h1>
            <p className='text-center fs-5'>We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.</p>
            </div>
        </div>
        
        <div className="container">
             <p className='mt-5 fs-5'> <span className='fs-5 fw-bold'>VIDEO EDITING</span> is the process of putting together, cleaning up and finalizing a video for presentation or output. It is mostly used to describe post-production work, which is the work done after all of the shots and footage have been taken and all that still needs to be done is to put them together in order to come up with the final output. The goal of editing is to manipulate these events to bring the communication closer to the original goal or target. It is a visual art.
             <p className='mt-2 fs-5'>Aside the video coverage, there is a major aspect of the video production, which we handle perfectly at Elonatech, and its known as <span className='fs-5 fw-bold'>VIDEO EDITING.</span> Editing is usually considered to be one part of the post production process. Other post-production tasks include titling, color correction, sound mixing, etc.</p>
             </p>

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
    
    </>
  )
}

export default Video