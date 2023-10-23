import React from 'react';
import './career.css';
import IMAGE from '../Career/img/happy-man-holding-light-bulb-symbol-removebg-preview.png'

const career = () => {
  return (
   <section>
     <div className="career-bg">

     </div>

     <div className="container">
     <div class="row justify-content-center mt-5 pb-5">
            <div class="col-md-6 align-self-center" style={{width:"40%"}} >
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

     <div className="" style={{backgroundColor:"#F9F8F3"}}>
            <div className="pt-4 text-center" >
                <h1><span style={{color:"black", fontWeight:"800"}}>SERVICES </span> WE ARE OFFERING</h1>
                <p>We develop an individual integrated solution for your business and select a unique set of services for <br /> it, combining them with a single strategy and goal</p>
            </div>
            <div className="container">
            <div class="row align-items-center pt-5">
                <div class="col-md-4">
                    <div class="card h-100" >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Graphic</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          
                        </div>
                    </div>
                 </div>
                <div class="col-md-4">
                    <div class="card h-100" >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Web development</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100" >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Digital Marketing</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div class="row align-items-center pt-5">
                <div class="col-md-4">
                    <div class="card " >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Video editing</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                 </div>
                <div class="col-md-4">
                    <div class="card " >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Ui/Ux</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card " >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title fs-3 fw-bold">Branding</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
   </section>
  )
}

export default career