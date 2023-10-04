import React from 'react'
import './product.css'
import ProductImg from '../Product/img/safebrooks-uiux-carousel-design_720.jpg';
import ProductImg2 from '../Product/img/remaben-app-ui-ux_720.jpg';
import UI1 from '../Product/img/ui-1.png'
import UI2 from '../Product/img/ui-2.png'
import UI3 from '../Product/img/ui-3.png'
import UI4 from '../Product/img/ui-4.png'
import UI5 from '../Product/img/ui-5.png'
import UI6 from '../Product/img/ui-6.png'

const product = () => {
  return (
<section>
        <div className="product-background">
            <div class="py-5 ">
                <h2 class=" mt-5 text-white text-center">UI/UX</h2>
                <h5 class=" mt-4 text-white text-center">Elevate Your Digital Experience: Unleash the Power of UI/UX</h5>
                <p class="lead text-white text-center"> We believe in the transformative power of User Interface (UI) and User Experience (UX) design. Our UI/UX services are crafted to elevate your digital presence, <br /> captivate your audience, and drive exceptional user engagement.</p>
            </div>
        </div>

        <div className="container">
        <div class="row g-5 mt-5 mb-5">
            <div class="col-sm-4 align-self-center">
                <h2 className='fw-bold' style={{color:"rgb(52,84,140)"}}> UI/UX</h2>
                <p className='text-justify fs-4'>In today's digital landscape, your online presence is often the first impression you make on your audience. It's not just about aesthetics; it's about creating a seamless, intuitive, and enjoyable experience that keeps users coming back. That's where our UI/UX design services come in.</p>
            </div>
            <div class="col-sm-8 ">
                <img src={ProductImg} alt=""  className='product-img rounded'/>
            </div>
        </div>

            {/* UI/UX SERVICES */}
        <div className="container  justify-content-around mb-5">
            <h3 className='text-center fs-2 fw-bolder pb-3' style={{color:"red"}}>UI/UX Services</h3>
        <div class="row  ">
            <div class="col-md-4  mt-3"><div className="">
            <div class="p-3 mb-2  text-center"> <img src={UI1} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>User Research and Analysis</h4>
                <p className='text-center fs-5'> We dig deep to understand your audience, their needs, and their behaviors. Our user research forms the foundation of our design decisions.</p>
                </div>
                </div>
            <div class="col-md-4  mt-3"><div className="">
                
                  <div class="p-3 mb-2  text-center"> <img src={UI2} style={{width:"100px"}} alt=""/></div>
                
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Information Architecture</h4>
                <p className='text-center fs-5'> Crafting intuitive navigation and content hierarchy to ensure users find what they need effortlessly.</p>
            </div></div>
            <div class="col-md-4  mt-3"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI3} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Wireframing and Prototyping</h4>
                <p className='text-center fs-5'> Building interactive wireframes and prototypes to visualize the user journey and design functionalities.</p>
            </div></div>
            <div class="col-md-4  mt-3"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI4} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>User-Centered Design</h4>
                <p className='text-center fs-5'>From responsive web design to app interfaces, our designs prioritize the user's experience at every touchpoint.</p>
            </div></div>
            <div class="col-md-4  mt-3"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI5} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Usability Testing</h4>
                <p className='text-center fs-5'> Rigorous testing and feedback collection to ensure your digital products are user-friendly and intuitive.</p>
            </div></div>
            <div class="col-md-4  mt-3"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI6} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Visual Design</h4>
                <p className='text-center fs-5'>The aesthetics are equally important. Our visual design experts ensure that your brand identity shines through every pixel.</p>
            </div></div>
        </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="container mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card  border-2 rounded-0"  style={{borderColor:"#016193"}}>
              <img src={ProductImg2} alt="img-fluid rounded" style={{height:"25.9rem",  }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card pb-2 border-2 rounded-0" style={{borderColor:"#016193"}}>
              <h2 class="font-weight-bold heading p-2 pt-3  pl-2">Why Choose Us?</h2>
              <p class="text-black pr-4 " style={{textAlign:"justify"}}>
                <ul>
                  <li className='pb-2'> <span className='fw-bold'>Experience:</span>  Our seasoned team of UI/UX experts brings years of experience and a rich portfolio of successful projects.</li>
                  <li className='pb-2'> <span className='fw-bold'>User-Centric Approach:</span>   Our designs put the user first. We create digital experiences that resonate with your audience and drive results.</li>
                  <li className='pb-2'> <span className='fw-bold'>Collaborative Process:</span>   We believe in working closely with our clients to ensure their vision is reflected in every aspect of our design work.</li>
                  <li className='pb-2'> <span className='fw-bold'>Innovation:</span> The digital world is ever-evolving. We stay at the forefront of design trends and emerging technologies to keep your products competitive.</li>
                  <li className='pb-2'> <span className='fw-bold'>Client Success Stories:</span>  Explore how our UI/UX design services have transformed businesses and user experiences. Read our case studies and hear what our clients have to say.</li>
                </ul>
              </p>
              </div>
            </div>
          </div>
        </div>

        </div>
</section>
  )
}

export default product