import React from 'react'
import './remote.css';
import image from '../Remote/img/african-woman-sitting-computer-science-class-lady-with-glasses-female-student-sitting-computer_1157-42317.jpg'
import image1 from '../Remote/img/cost-reduction-business-concept-finance_220873-30348.jpg'
import image2 from '../Remote/img/sand-running-through-bulbs_488220-37412.jpg'
import image3 from '../Remote/img/human-resources-concept-with-man.jpg'
import image4 from '../Remote/img/top-view-tools-clockwork-spare-parts_696657-21926.jpg'
import photo1 from '../Remote/img/teleworking.png'
import photo2 from '../Remote/img/sharing.png'
import photo3 from '../Remote/img/remote-access.png'
import photo4 from '../Remote/img/image-asset-removebg-preview.png'


const remote = () => {
  return (
   <section>
    <div className="remote-background">
            <div class="py-5 "  data-aos="fade-up" data-aos-duration="1000">
                <h2 class=" mt-5 text-white text-center"> Remote Support</h2>
                <p className='text-center fs-5' >Access to Experts offering Round-the-Clock maintenance aimed at Increasing productivity</p>
                <h5 class="  text-white text-center">Remotely accessing and controlling computers or mobile devices anytime, anywhere using reliable and secure remote connections</h5>
            </div>
    </div>

    <div className="container">
        

        <div class="row justify-content-center mt-5">
            <div class="col-md-6" data-aos="fade-right" data-aos-duration="1000" >
            <p className='text-justify pt-md-5 ' >Remote Support is the ability to remotely access and control a computer or mobile device anytime, anywhere using a reliable and secure remote support software. remote support software so enables IT technicians to access another computer or device remotely to provide support. <br /> The remote connection allows the technician to see the screen of the remote device on their own screen in real-time,  and in most cases be able to take control of the remote device to troubleshoot issues and perform other tasks.</p>
            </div>
            <div class="col-md-6 pr-md-2" data-aos="fade-left" data-aos-duration="1000" >
           <img src={photo4} alt=""  className='img-fluid'/>
            </div>
        </div>

        <div className="pt-5">
            <div class="row justify-content-center flex-column-reverse flex-lg-row" >
                <div class="col-md-6 gx-2" data-aos="fade-right" data-aos-duration="1000" >
                <img src={image} alt="" className='img-fluid' />
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                    <h2 className='fw-bold fs-3'>Why Remote Support?</h2>
                    <p className='text-justify' style={{lineHeight:"1.7"}}>The advent of remote support software has enabled computer users to get help from experts around the world. Now, customers don't have to wait for a technician to arrive at their home or office to check their faulty machine. Cloud based, secure and powerful remote support software that enables you to view, access and connect to your customer's device instantly over internet and control any device remotely, from anywhere easily can be used. The advent of this remote support software has helped offer support to computers remotely around the world. Connect to your customer's device instantly over internet.In most cases, the issue is software-related rather than a hardware malfunction, so there's no need for in-person assistance. With remote support software, an IT technician can examine the customer's machine through virtual access established through a cloud gateway. If the technician fails to fix the problem in the first session, then the issue can be categorized as a hardware malfunction, only then requiring a physical inspection of the computer. Remote Support has broken new ground when it comes to faster issue resolution.</p>
                </div>
            </div>

            {/* BENEFITS OF USING SUPPORT */}
            <div className="container mt-3">
                <h2 className='text-center fw-bold fs-3'  data-aos="zoom-in" data-aos-duration="1000">Benefits of Using Remote Support</h2>
            <div class="row  justify-content-center remote-row">
                <div class="col-md-3 mt-4" data-aos="zoom-out-right" data-aos-duration="1000">
                    <div class="card h-100 " style={{width:"18rem"}}>
                        <img src={image1} alt="" classname="img-fluid" />
                        <div class="card-body">
                            <h5 class="card-title">Reduced Costs</h5>
                            <p class="card-text ">Empowering MSPs and IT technicians with remote access to computers in an organization would alleviate overhead costs of on-site visits.</p>
                                                 </div>
                        </div>
                </div>
                <div class="col-md-3 mt-4"  data-aos="zoom-out-right" data-aos-duration="1000">
                    <div class="card h-100 " style={{width:"18rem"}}>
                        <img src={image2} alt="" classname="img-fluid" />
                        <div class="card-body">
                            <h5 class="card-title">Increased Productivity</h5>
                            <p class="card-text ">IT issues can decrease productivity, as they distract computer users from their core job. With remote IT support software you can resolve issues faster and increase productivity.</p>
                                                  
                        </div>
                        </div>
                </div>
                <div class="col-md-3 mt-4" data-aos="zoom-out-left" data-aos-duration="1000">
                    <div class="card h-100 " style={{width:"18rem"}}>
                       <img src={image3} alt=""  classname="img-fluid"/>
                        <div class="card-body">
                            <h5 class="card-title">Access to Experts</h5>
                            <p class="card-text ">Handling certain issues on a computer might demand technicians with specialized expertise. With remote support software you can have technicians from anywhere in the world working on your computer.</p>
                                              
                        </div>
                        </div>
                </div>
                <div class="col-md-3 mt-4" data-aos="zoom-out-left" data-aos-duration="1000">
                    <div class="card h-100 " style={{width:"18rem"}}>
                       <img src={image4} alt=""  classname="img-fluid"/>
                        <div class="card-body">
                            <h5 class="card-title">Round-the-Clock Maintenance</h5>
                            <p class="card-text ">With a remote support software, you can configure a computer for unattended remote access. Configured computers can be accessed by MSPs at any time for installing updates or troubleshooting.</p>
                                              
                        </div>
                        </div>
                </div>
            </div>
            </div>


          
            
           
        </div>
    </div>

      {/* TYPE OF REMOTE SUPPORT */}
      <div className="mt-5" style={{backgroundColor:"#34548c"}}>
          <div className="container pt-5">
            <h2 className='text-center fw-bold fs-3 text-white'>Type Of Remote Support</h2>
          <div class="row">
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <div class="card remote-card h-100" style={{width:"23rem"}}>
              <img src={photo1} alt="" className='photo-icon'/>
              <div class="card-body">
                <h5 className='fw-bold' >On-demand Remote Support</h5 >
                <p class="card-text p-1 text">On-demand remote support for IT is the assistance technicians offer to remote customers when someone is present at the customer's end to attend the session. Technicians can either initiate a session instantly or schedule a time that's more convenient.</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="2000">
              <div class="card remote-card h-100" style={{width:"23rem"}} >
              <img src={photo2} alt="" className='photo-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Screen sharing</h5>
                <p class="card-text p-1 text">Assist enables quick and secure screen sharing so technicians can share their computer screen with remote end users. Technicians can use this feature to provide a demonstration when required.</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
              <div class="col mt-4" data-aos="zoom-in" data-aos-duration="3000">
              <div class="card remote-card h-100" style={{width:"23rem"}}>
              <img src={photo3} alt="" className='photo-icon'/>
              <div class="card-body">
                <h5 className='fw-bold'>Unattended Remote Access</h5>
                <p class="card-text  p-1 text">Unattended remote access is access to a remote computer without an a person at the remote end. With unattended access, issue resolution, patch, software updates, and a whole lot of other activities can be achieved in a customer's idle time without asking them to take time out of their workday for the session.</p>
                <input type="checkbox" class="text-btn p-2" />
              </div>
            </div>
              </div>
            </div>
          </div>
            </div>
  
    {/* <div className="container ">
    <div class="row justify-content-center">
            <div class="col-md-3">
                <div class="card" style={{width:"18rem"}}>
                        <img src={image1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col-md-3">
            <div class="card" style={{width:"18rem"}}>
                        <img src={image1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col-md-3">
            <div class="card" style={{width:"18rem"}}>
                        <img src={image1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col-md-3">
            <div class="card" style={{width:"18rem"}}>
                        <img src={image1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
    </div> */}

   </section>
  )
}

export default remote