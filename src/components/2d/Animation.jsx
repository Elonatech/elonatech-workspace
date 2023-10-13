import React from 'react';
import './Animation.css';
import ReactPlayer from 'react-player';
import Animation1 from '../2d/img/animation.jpg'
import BackgroundImage2 from './img/banner3.png';
import BackgroundImage3 from './img/animation_111_720.png';


function Animation() {
  return (
    <>
        <div className="branding-background">
        <div class="container " >
        <div class="py-5 ">
                <h2 class=" mt-5 text-white text-center">2D/3D ANIMATION</h2>
                {/* <h5 class=" mt-4 text-white text-center">Elevate Your Digital Experience: Unleash the Power of UI/UX</h5> */}
                <p class="lead text-white text-center">  Creating engaging and immersive 2D/3D animations is a dynamic and captivating way to bring your ideas to life. Whether you're crafting a multimedia presentation, a web experience, or a game, animations have the power to convey complex concepts, evoke emotions, and leave a lasting impression on your audience.</p>
            </div>
        </div>
        </div>
          
           {/* VIDEO CARD */}
        <div className=" container pt-5 pb-5 mb-5 ">
          <div className="header">
            <h1 className='text-center  mb-4 fw-bold'>2D AND 3D ANIMATION VIDEO TEMPLATE</h1>
          </div>

          <div class="container ml-4">
            <div class="row ">
              <div class="col mt-4">
               <div class="card h-100" style={{width:"20rem"}}>
                    <div class="ratio ratio-4x3">
                      {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe> */}
                      <iframe  src="https://www.youtube.com/embed/nbMtGm-b9Kg" title="5 Reasons why your Business needs Animated Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <h4 class="card-text  fw-bold">3D Animation Video </h4>
                      <p className='text-justify'>3D animations is essential for providing context and engaging your audience also give viewers an idea of what to expect with a story</p>
                    </div>
                </div>
              </div>

              <div class="col mt-4">
               <div class="card h-100" style={{width:"20rem"}}>
                    <div class="ratio ratio-4x3">
                    <iframe width="360" height="270" src="https://www.youtube.com/embed/v-XT2EWLQgA" title="White board Animations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <h4 class="card-text fw-bold">Whiteboard Animation </h4>
                      <p className='text-justify'>"White animation" typically refers to animations with a predominant use of white or light-colored backgrounds and elements.</p>
                    </div>
                </div>
              </div>

              <div class="col mt-4">
               <div class="card h-100" style={{width:"20rem"}}>
                    <div class="ratio ratio-4x3">
                    <iframe src="https://www.youtube.com/embed/PQUKvazhunY" title="Trendy Explainer Video Toolkit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                      <h4 class="card-text fw-bolder"> Explainer Animation.</h4>
                      <p className='text-justify'>A "Trendy Explainer Toolkit" is a versatile resource used for creating modern and stylish explainer videos.</p>
                    </div>
                </div>
              </div>


              </div>
            </div>
        </div>

     
        {/* WE HAVE ALL YOUR NEEDS */}

        <div className="container-fluid animation-context" style={{backgroundColor:"#34548c"}}>

        <div class="row">
          <div class="col-md-6">
          <img src={BackgroundImage3}  alt="" style={{marginBottom:'100px'}}  className='mb-2 img-fluid'/>
          </div>
          <div class="col-md-6">
          <div class="card rounded-0 border-0" style={{marginTop:"5rem", padding:'3rem'}} >
            <div class="card-body">
              <h5 class="card-title fs-1">We Have All You Need  For <br /> Your Animation.....</h5>
              <p class="card-text">When you’re ready to take your animations to the next level, discover all that you can do with Character animations. Animation is the art of bringing life to an otherwise inanimate objects, or illustrated / 3D generated characters. It is created by projecting sequenced images quickly, one after another, to create the illusion of life.</p>
            
            </div>
        </div>
          </div>
        </div>
        
          {/* <div className=" mx-auto float-end">
          <div class="card rounded-0 border-0" style={{marginTop:"5rem", padding:'5rem'}} >
            <div class="card-body">
              <h5 class="card-title fs-1">We Have All You Need  For <br /> Your Animation.....</h5>
              <p class="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, facilis asperiores sit quibusdam <br /> fuga eum veniam corrupti placeat iste. Corporis. </p>
            
            </div>
        </div>
      </div> */}
        </div>   
               {/* CUSTOMERS SAY */}
        <div class="p-3 mb-2  text-white" style={{background:"#F5FFFA"}}>
            

            <div className="container mt-4 mb-4">
              <h2 className='text-center text-black mb-4 fw-bold'> OUR CUSTOMERS SAY</h2>
            <div class="row">
              <div class="col-sm-4 mb-4 p-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title text-center">Alan D.</h5>
                    <p class="card-text text-center">The animation was delivered on time and within budget, which is always a plus in the creative industry. Our clients were thrilled with the end product, and it has had a significant impact on our marketing efforts.</p>
                 
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-4 p-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title text-center">Hasan H.</h5>
                    <p class="card-text text-center">I highly recommend elonatech for any 3D animation project. Their talent, dedication, and commitment to excellence are truly remarkable. I look forward to working with them again in the future and bringing more of our creative ideas to life.</p>
               
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-4 p-2">
                <div class="card h-100">
                  <div class="card-body">
                  <h5 class="card-title text-center">John D</h5>
                    <p class="card-text text-center">"Working with Elonatech on our recent animation project was an absolute pleasure. They took our vision and brought it to life with incredible creativity and attention to detail. The animation exceeded our expectations, and our audience loved it. We're thrilled with the results!"</p>
               
                  </div>
                </div>
              </div>
            </div>
            </div>

        </div>

        <div className="row g-0">
            <div className="col-md-6">
              <div className="card border-0" >
              <img src={Animation1} alt="img-fluid rounded" style={{height:"35rem"}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className=" text-black align-items-center faq" >
              <h2 class="font-weight-bold heading p-2 pt-3  pl-2">FAQs</h2>
              <p class="text-black fs-6 pr-4 " style={{textAlign:"justify"}}>
                <ul>
                  <li className='pb-2'> <span className='fw-bold fs-5' style={{color:'black'}}>What types of animation services do you offer?</span>: We offer a wide range of animation services, including 2D animation, 3D animation, motion graphics, character animation, and more. We cater to various industries and project requirements.</li>
                  <li className='pb-2'> <span className='fw-bold fs-5' style={{color:'black'}}>How much does animation production cost?:</span> The cost of animation varies depending on the complexity of the project, the duration, and specific client requirements. Please contact us for a customized quote.</li>
                  <li className='pb-2'> <span className='fw-bold fs-5' style={{color:'black'}}>What is the typical timeline for an animation project?:</span> Project timelines can vary significantly. Small animations may take a few weeks, while more complex projects may require several months. We'll provide you with a detailed timeline during the project planning phase.</li>
                  <li className='pb-2'> <span className='fw-bold fs-5' style={{color:'black'}}>Do you work with international clients?:</span> Absolutely! We work with clients from all over the world. Our team can communicate effectively in English and other languages, ensuring a smooth collaboration.</li>
                  <li className='pb-2'> <span className='fw-bold fs-5' style={{color:'black'}}>What is the process for creating an animation with your studio?:</span> Our animation production process includes concept development, scriptwriting, storyboarding, design, animation, sound design, and final revisions. We collaborate closely with clients throughout each step.</li>
                </ul>
              </p>
              </div>
            </div>
          </div>

          <div className=""  style={{ backgroundImage: `url(${BackgroundImage2})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
            <div className="text-start pl-4">
            <p class=" fw-bold fs-1 pl-4 pt-5 text-black" >Engage in a conversation with a specialist <br /> regarding your upcoming animation <br /> editing video</p>
            <button type="button" class="btn btn-primary  fs-5 fw-bold  ml-4">GET IN TOUCH</button>
            </div>
         </div> 

      
        
    </>
  )
}

export default Animation