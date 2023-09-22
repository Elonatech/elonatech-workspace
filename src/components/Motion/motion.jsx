import React from 'react'
import Motion from './img/wallpaper.gif'
import MOTION1 from './img/motion 1.png';
import MOTION2 from './img/motion2.png';
import MOTION3 from './img/motion.gif'
import './motion.css';

const motion = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundImage:  `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Motion})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
        <div className="container pt-5 mb-4">
          <h1 className='text-center fw-bold pt-2'  style={{color:"rgb(52,84,140)"}}> Motion Graphics</h1>
          <p className='text-center pt-2 fs-5  pb-5'>Motion graphics is a style of animation that combines graphic design, visual effects, and animation to create engaging and dynamic visuals. Motion graphics are often used in various media, including film, television, video games, web content, advertising, and presentations, to convey information, tell stories, or enhance the overall viewing experience.</p>
        </div>
      </div>

      <div className="container">
   
      <div class="clearfix mt-5">
           <img src={MOTION1} alt="" class="col-md-6 float-md-end mb-3 ms-md-3" />

           <h3 className='fw-bold'>Our Motion Graphics Services</h3>
          <p className='fs-5'>At Elonatech, we specialize in creating stunning motion graphics tailored to your unique needs. Our team of skilled artists and animators collaborates closely with you to bring your vision to life. Our services include:</p>
          <ul>
            <li className='fs-5'> <b>Explainer Videos: </b>  Simplify complex ideas and engage your audience.</li>
            <li className='fs-5'> <b>Brand Promotion: </b>  Elevate your brand with visually appealing content.</li>
            <li className='fs-5'> <b>Product Showcase: </b>  Highlight your products with dynamic animations.</li>
            <li className='fs-5'> <b>Data Visualization: </b>  Make data more accessible and compelling.</li>
            <li className='fs-5'> <b>Interactive Experiences: </b>  Engage your audience with interactive motion graphics.</li>
          </ul>
        </div>


        <div class="clearfix mt-5">

        <img src={MOTION2} alt=""  class="col-md-6 float-md-start mb-3 ms-md-3 mr-4"/>

        <h3 className='fw-bold'>Why Choose Us</h3>
          <p className='fs-5 b-4'>Choosing the right partner for your motion graphics project is crucial. At Elonatech, we offer:</p>
          <ul>
            <li className='fs-5'> <b>Creative Excellence: </b> Our team of talented artists and animators ensures your content is visually stunning and impactful.</li>
            <li className='fs-5'> <b>Custom Solutions: </b>  Every project is unique, and we tailor our services to match your specific goals</li>
            <li className='fs-5'> <b>Timely Delivery: </b>  We understand the importance of deadlines and strive to deliver on time, every time.</li>
            <li className='fs-5'> <b>Collaborative Approach: </b>   We work closely with you throughout the process to ensure your vision is realized.</li>
            <li className='fs-5'> <b>Competitive Pricing: </b>  High-quality motion graphics don't have to break the bank. We offer cost-effective solutions.</li>
          </ul>

       <div className=" pt-5">
            <h4 className='text-center fw-bold'>Get Started</h4>
            <h1 className='text-center mb-4' style={{color:"rgb(52,84,140)"}}>Let's Create Something Extraordinary Together</h1>
            <p className='text-center fs-5 pb-5'>Motion graphics have the power to turn your content into a visual masterpiece that resonates with your audience. Whether you're looking to educate, entertain, or inspire, motion graphics can help you achieve your goals. Contact us today to start your journey toward visual excellence.</p>
       </div>
        </div>
      </div>

      <div class="p-5 mb-2 text-white" style={{background:"rgb(52,84,140)"}}>
      <div class="row justify-content-evenly">
        <div class="col-md-6 align-self-center ">
          <p className='fs-5 text-justify'> <span className='text-dark fw-bolder fs-3'>Motion graphics</span> have the power to turn your content into a visual masterpiece that resonates with your audience. Whether you're looking to educate, entertain, or inspire, motion graphics can help you achieve your goals. Contact us today to start your journey toward visual excellence.
          Feel free to customize this content to fit your specific motion graphics services and company information. The goal is to convey the value and versatility of motion graphics while highlighting what makes your services unique.
          </p>
        </div>

        <div class="col-md-4">
        <img src={MOTION3} alt="" className='motion-img ' />
          </div>
        </div>
      </div>

      {/* <div class="p-3 mb-2 bg-primary text-white">
           
        </div> */}

      {/* <div className="container mt-5">
        <h3 className='text-center fw-bold fs-2' style={{color:'#2b5592'}}> SOME OF OUR MOTION GRAPHICS </h3>

        <div class="container align-middle mt-5 mb-5">
          <div class="row  pb-5">
            <div class="col-md-3 col-sm-4 pb-4">
              <div class="ratio ratio-16x9">
              <iframe width="1600" height="900" src="https://www.youtube.com/embed/hecFq98Uoq4" title="Corporate Website - Elonatech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
            <div class="col-md-3 col-sm-4 pb-4">
              <div class="ratio ratio-16x9">
              <iframe width="1600" height="900" src="https://www.youtube.com/embed/7p6FQeZEPNQ" title="Computer repairs   Elonatech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>

            <div class="col-md-3 col-sm-4 pb-4">
              <div class="ratio ratio-16x9">
              <iframe width="1600" height="900" src="https://www.youtube.com/embed/jE_-CUX0QOI" title="ORGANIC DIGITAL MARKETING - Elonatech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
            <div class="col-md-3 col-sm-4 pb-4">
              <div class="ratio ratio-16x9">
              <iframe width="1600" height="900" src="https://www.youtube.com/embed/C9DB7QOkTL4" title="Branding Service - Elonatech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
          </div>
         </div>
      </div>

      <div class="p-3 mb-2  text-white " style={{backgroundColor:'#2b5592'}}>
          <div className="container pt-5 pb-4">
              <p className='text-center pb-2 fs-5'>
            When you’re trying to visualize a complex idea or illustrate intricate mechanical functions, Motion Graphics can be a great way. Motion graphics can illustrate complex ideas visually.
            </p>
            <p className='text-center pb-2 fs-5'>Our clients use animation in a wide variety of ways. Sometimes it’s a simple text treatment on video titles. Other times it’s making the abstract come to life, taking something that you can only imagine and making it a reality.</p>
            <p className='text-center pb-2 fs-5'>Organizations trying to reach out to their target audience has gone beyond the traditional mode of attraction. A little touch has been added that involves the use of motion graphics (i.e. the combination of shapes/objects, typography, sound effects, visual effects and so on into animation) to convey your brand’s message to your target audience in order to generate sales. At <b>Elonatech </b>, getting the right visuals to convey the brand’s messages to a targeted audience is our speciality.</p>
            <p className='text-center pb-2 fs-5'>No matter what industry you’re in, the motion graphics look can make your message more engaging and entertaining.</p>
        
          </div>
        </div> */}
    </div>
  )
}

export default motion