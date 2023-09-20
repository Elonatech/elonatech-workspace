import React from 'react';
import './Animation.css';
import ReactPlayer from 'react-player';


function Animation() {
  return (
    <section>
        <div className="branding-background">
        <div class="container " >
          <div class="row justify-content-md-center pt-5">
            <div class="col-md-6 col-sm-3 pt-5 ">
              <h2 className='pb-4 fw-bold text-danger fw-bold'>2D/3D ANIMATION</h2>
              <p className='text-justify fw-normal fs-6 p2' >
                Creating engaging and immersive 2D/3D animations is a dynamic and captivating way to bring your ideas to life. Whether you're crafting a multimedia presentation, a web experience, or a game, animations have the power to convey complex concepts, evoke emotions, and leave a lasting impression on your audience.</p>
            </div>


            <div class="col-md-6 col-sm-3 pt-5 mb-5 rounded">
              <div class="ratio ratio-16x9 ">
                  <iframe  src="https://www.youtube.com/embed/nbMtGm-b9Kg" title="5 Reasons why your Business needs Animated Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            
          </div>
        </div>
        </div>
           
           {/* VIDEO CARD */}
        <div className=" container pt-5 pb-5 mb-5">
          <div className="header">
            <h1 className='text-center  mb-4 fw-bold'>2D AND 3D ANIMATION VIDEO TEMPLATE</h1>
          </div>

          <div class="container ml-5 ">
            <div class="row ">
              <div class="col mt-4">
               <div class="card" style={{width:"18rem"}}>
                    <div class="ratio ratio-4x3">
                      {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe> */}
                      <iframe  src="https://www.youtube.com/embed/slmJOd2pXVc" title="3D Explainer Video Toolkit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <p class="card-text fw-bolder">3D Explainer Video Toolkit</p>
                    </div>
                </div>
              </div>

              <div class="col mt-4">
               <div class="card" style={{width:"18rem"}}>
                    <div class="ratio ratio-4x3">
                    <iframe width="360" height="270" src="https://www.youtube.com/embed/v-XT2EWLQgA" title="White board Animations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <p class="card-text fw-bolder">Whiteboard Animation Toolkit</p>
                    </div>
                </div>
              </div>

              <div class="col mt-4">
               <div class="card" style={{width:"18rem"}}>
                    <div class="ratio ratio-4x3">
                    <iframe src="https://www.youtube.com/embed/PQUKvazhunY" title="Trendy Explainer Video Toolkit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <p class="card-text fw-bolder">Trendy Explainer Toolkit.</p>
                    </div>
                </div>
              </div>


              </div>
            </div>
        </div>
               
               {/* CUSTOMERS SAY */}
        <div class="p-3 mb-2  text-white" style={{background:"#2b5592"}}>
            <div className="container mt-4 mb-4">
              <h2 className='text-center mb-4 fw-bold'> OUR CUSTOMERS SAY</h2>
            <div class="row">
              <div class="col-sm-6 mb-4 p-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center">Alan D.</h5>
                    <p class="card-text text-center">The animation was delivered on time and within budget, which is always a plus in the creative industry. Our clients were thrilled with the end product, and it has had a significant impact on our marketing efforts.</p>
                 
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-4 p-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center">Hasan H.</h5>
                    <p class="card-text text-center">I highly recommend elonatech for any 3D animation project. Their talent, dedication, and commitment to excellence are truly remarkable. I look forward to working with them again in the future and bringing more of our creative ideas to life.</p>
               
                  </div>
                </div>
              </div>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Animation