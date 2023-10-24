import React from 'react';
import './career.css';
import IMAGE from '../Career/img/happy-man-holding-light-bulb-symbol-removebg-preview.png';
import ICON1 from '../Career/img/illustration.png'
import ICON2 from '../Career/img/web-development.png'
import ICON3 from '../Career/img/social-media.png'
import ICON4 from '../Career/img/montage.png'
import ICON5 from '../Career/img/ux-design.png'
import ICON6 from '../Career/img/branding.png'
import PHOTO from '../Career/img/black-man-working-with-computer.jpg'

const career = () => {
  return (
   <section>
     <div className="career-bg">

     </div>

     <div className="container">
     <div class="row justify-content-center mt-5 pb-5">
            <div class="col-md-6 align-self-center"  >
                <div className=" ">
                    <div className="">
                        <h2 style={{fontSize:"", fontWeight:"800"}}>TURN YOUR IDEAS</h2>
                        <h1 style={{fontSize:"", fontWeight:""}}>TO LIVE EXPERIENCES</h1>
                    </div>
                    <div className="pt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vitae. Esse maiores labore dignissimos similique, deserunt aliquam veritatis harum quibusdam sit doloremque illum, cumque voluptatibus expedita excepturi magnam quam eveniet.</p>
                    </div>
                </div>
               
        
            </div>
            <div class="col-md-6">
                <img src={IMAGE} alt="" className='img-fluid'/>
            </div>
        </div>
     </div>

     <div className="pb-5" style={{backgroundColor:"#F9F8F3"}}>
            <div className="pt-4 text-center" >
                <h1><span style={{color:"black", fontWeight:"800"}}>SERVICES </span> WE ARE OFFERING</h1>
                <p>We develop an individual integrated solution for your business and select a unique set of services for <br /> it, combining them with a single strategy and goal</p>
            </div>
            <div className="container">
            <div class="row align-items-center pt-md-5">
                <div class="col-md-4">
                    <div class="card h-100 " >
                        <img src={ICON1} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Graphic</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-4">
                    <div class="card h-100 " >
                    <img src={ICON2} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Web development</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 " >
                                <img src={ICON3} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Digital Marketing</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div class="row align-items-center mt-4">
                <div class="col-md-4">
                    <div class="card h-100 " >
                                <img src={ICON4} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Video editing</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-4">
                    <div class="card h-100" >
                                <img src={ICON5} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Ui/Ux</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 " >
                                <img src={ICON6} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Branding</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
     <div className="">
        <div class="row justify-content-center pt-5">
            <div class="col-md-4 gx-5">
            <img src={PHOTO} alt="" srcset="" className='img-fluid'/>
            </div>
            <div class="col-md-5 align-self-center p-3">
             <h1 style={{color:"#34548c"}}>CAREER</h1>
           
             <p className='text-justify ' style={{lineHeight:"2"}}>We have a passion for our clients, results and the solutions we provide. Our team possess a pragmatic drive for action that runs through the week, each working day, and doesn’t let up. We rally clients with our infectious energy, to make change stick.
                And we never do it alone. We support and are supported to develop our own personal result(s) stories. We train, and get trained to further equip ourselves, so as to be abreast of imminent IT challenges.
                We work hard, but we don’t take ourselves too seriously. We enjoy what we do and we laugh a lot… most often at ourselves.</p>
            </div>
        </div>
     </div>
   </section>
  )
}

export default career