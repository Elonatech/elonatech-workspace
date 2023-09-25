import React from 'react';
import './branding.css';
import ELONA from './Brand-Img/elona jersey.jpg';
import CUP from './Brand-Img/cup.png';
import { Accordion } from 'react-bootstrap';
import BACKGROUND from './Brand-Img/image_720.png';
import IMAGE1 from '../img/project-14-850x540-(1).jpg';
import IMAGE2 from '../img/project-14-850x540-(3.jpg';
import IMAGE3 from '../img/project-14-850x540-4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import ELONATECH1 from './Brand-Img/elona kit.jpg'
import ELONATECH2 from './Brand-Img/elona sationaries brand.jpg'


const branding = () => {
  return (
   <section>
        <div className="branding-background">
          <div className="branding-text-container">
            <h3 className='branding-text'>“A BRAND IS NO LONGER WHAT WE TELL THE <br /> CONSUMER IT IS — IT IS WHAT CONSUMERS TELL EACH <br /> OTHER IT IS.” – <span>SCOTT COOK</span></h3>
          </div>
        </div>

      
        {/* <div class="container overflow-hidden">
            <div class="row gy-5 mt-5">
                <div class="col-md-6">
                    <div class=" pl-6">
                        <div className="">
                            <img src={ELONA} alt="elona-jersey" srcset="" className='cup-img' /> 
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div >
                   <p className=' '> Elonatech Nigeria Limited, in a bid to serve you better, has included <br /> Corporate branding in their services; Which includes: logo design, <br /> complimentary card, and ID card design, E-invoice & letterhead design, <br /> uniform social media handles, web design and development, unique domain <br /> names and hosting, and a wide array of services to keep you ahead of the <br /> competition. <br />

                  It’s much more than a logo, Elonatech brand identity development service is <br /> actually at the intersection of strategy and design. Our development process <br /> includes defining your business goals and objectives, conducting and <br /> analyzing primary research, and launching a full visual exploration of how <br /> you see yourselves and your place in the market. <br />

                  Elonatech brand professionals can manage the end-to-end process from <br /> corporate naming through marketing your brand internally and externally to <br /> multiple audiences including vendors, shareholders, consumers and <br /> employees. <br /></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class=" pt-4 ml-2">
                    Brand identity is not limited to a specific mark or name. Branding can <br /> incorporate multiple touch points. These touch points include; logo, <br /> customer service, treatment and training of employees, packaging, <br /> advertising, stationery, and quality of products and services. Any means by <br /> which the general public comes into contact with a specific brand <br /> constitutes a touch point that can affect perceptions of the corporate brand.
                    </div>
                </div>
                <div class="col-md-6">
                 <div class=" ml-2">
                    <div className="">
                     <img src={CUP} alt="elona-jersey" srcset="" className='cup-img' /> 
                    </div>
                 </div>
                </div>
            </div>
        </div> */}


        {/* BRAND IDENTITY */}
        <div className="container ">
          <div className="" style={{margin:"2rem 0"}}>
            <h1 class="d-flex justify-content-center" style={{fontWeight:"bolder", color:"red"}}>BRAND IDENTITY</h1>
            <p>  

           
            </p>


         
          <div class="row">
            <div className="row  mt-3">
            <div class="col-md-6 col-sm-3 fs-5 text-justify">
            Brand identity is not limited to a specific mark or name. Branding can  incorporate multiple touch points. These touch points include; logo, customer service, treatment and training of employees, packaging, advertising, stationery, and quality of products and services. Any means by which the general public comes into contact with a specific brand  constitutes a touch point that can affect perceptions of the corporate brand.
            Elonatech Nigeria Limited, in a bid to serve you better, has included  Corporate branding in their services; Which includes: logo design, complimentary card, and ID card design, E-invoice & letterhead design, uniform social media handles, web design and development, unique domain  names and hosting, and a wide array of services to keep you ahead of the  competition.
            </div>
            <div class="col-md-6 col-sm-3 pl-5"> <img src={ELONATECH1} class="elo-img" alt="" /></div>

            </div>

          <div className="row flex-column-reverse flex-lg-row mb-5  mt-5">
          <div class="col-md-6 col-sm-3 "><img src={ELONATECH2} class="elo-img  elona" alt="" /></div>
            <div class="col-md-6 col-sm-3 fs-5 text-justify"> It’s much more than a logo, Elonatech brand identity development service is  actually at the intersection of strategy and design. Our development process includes defining your business goals and objectives, conducting and analyzing primary research, and launching a full visual exploration of how  you see yourselves and your place in the market. 
            Elonatech brand professionals can manage the end-to-end process from  corporate naming through marketing your brand internally and externally to multiple audiences including vendors, shareholders, consumers and employees.</div>
          </div>

        
          </div>

        

          </div>
        </div>


          {/* SLIDER */}
        {/* <div id="carouselExampleDark" class="carousel container d-flex align-item-center carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
           <img src={IMAGE1} class="d-block" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
          <img src={IMAGE2} class="d-block" alt=""  style={{width:"50rem", height:"50vh"}}/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
          <img src={IMAGE3} class="d-block" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}



      <Carousel className='container align-item-center'>
            <Carousel.Item className='slider'>
             <img 
             className='d-block w-100 slider' 
             src={IMAGE1}
            
             alt=""  
             />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider'>
            <img 
             className='d-block w-100 slider' 
             src={IMAGE2}
             
             alt=""  
             />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider'>
            <img 
             className='d-block w-100 slider' 
             src={IMAGE3}
          
             alt=""  
             />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



          <div className="container " style={{ margin:"2rem"}}>
              <img  src={BACKGROUND} className='img-bg mt-4' alt="" srcset="" style={{border:"2px solid blue"}}/>
          </div>

          {/* FREQUENTLY ASKED QUESTION */}  
        <div class="container ">

        <div class="row">
          <div class="col-md-4 mt-5">
          <div className=" text-center">
                <h1 className='FAQ' style={{color:"#2b5592", fontWeight:"800"}}>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="line" style={{margin:"auto", color:"red"}}></div>
            </div>
          </div>
          <div class="col-md-8">
          <div class="container frequent-container mt-5">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mb-2 border">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{fontWeight:"700", color:"red"}}>
                    1. WHAT IS A BRAND?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"> <p>A brand is essentially the personality and identity of your business. It is what forms the first impression of your business for potential customers and encompasses how it looks and sounds. It is how the market identifies your business compared to your competitors and will hopefully make you stand out. Components of a brand can include:</p> 
                    <ul>
                        <li>Name</li>
                        <li>Logo</li>
                        <li>Tagline</li>
                        <li>Tone of voice</li>
                        <li>Fonts & typography</li>
                        <li>Symbols</li>
                        <li>Features</li>
                        <li>Colors</li>
                        <li>Graphics element</li>
                        <li>Niche</li>
                        <li>Experience</li>
                        <li>Or anything that identifies individual businesses’ product or service as unique or distinct </li>
                    </ul></div>
                    </div>
                </div>
                <div class="accordion-item mb-2 border">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" style={{fontWeight:"700", color:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    2. WHY IS BRANDING IMPORTANT?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Branding is the process of creating a brand. It is important as it involves clearly positioning your company or product in the market, devising a brand strategy, possibly creating your name, defining your company’s tone of voice and designing corporate and/or product identity.
                      Using water as an example, how do several companies around the world sell the same product and convince the market to purchase their water over their competitors? The simple answer: a great brand!</div>
                    </div>
                </div>
                <div class="accordion-item mb-2 border">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" style={{fontWeight:"700", color:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    3. I’VE GOT A LOGO, ISN’T THAT MY BRAND?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We need to get one thing straight, a brand is much more than a logo! Whilst we understand cost can be a determining factor and we certainly appreciate the desire to get a visual representation for your business quickly, we just don’t believe logos alone tell enough of a story about your business. A poorly designed logo can end up targeting the wrong market altogether. <br />
                    <br />
                    We believe a brand speaks volumes about a business, including:
                    <ul>
                      <li>The experience customers can expect when consuming a product or service</li>
                      <li>How a business highlights their unique selling points or market position</li>
                      <li>How a business understands their target markets by engaging with their interests and needs</li>
                      <li>How a business stays relevant and keeps up with the trends in the market</li>
                    </ul> <br />
                    <br />
                    Your brand describes who you are and what you do, therefore it is important your visual identity – your logo, which is utilised for virtually all of your marketing communications, clearly communicates this.
                    </div>
                    </div>
                </div>

                <div class="accordion-item mb-2 border">
                    <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" style={{fontWeight:"700", color:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                    4. CAN’T I JUST GET MY BRANDING DONE FOR #5000 ON FIVERR?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Ummm….no! Remember, a brand is much more than just a logo. It is the story, look and voice of a brand. <br />

                    A high quality branding process involves market research including target markets and competitors, and understanding your industry, checking if trade names and domains are available, creating a mood board, testing color schemes in different environments, creating a unique logo that is memorable and finding fonts & typography that is effective…the list goes on! Our branding workshops are also a fabulous way for businesses to really clarify who and what you are and who your target market is. <br />

                    Branding can be a lengthy process which may involve several creative people working on the project and it requires input and collaboration with the client. It is also important that the brand is unique in the market to avoid any trademark or copyright legal problems. <br />

                    So, if you put all this in perspective, you can see how getting a logo for #5000 on Fiverr, won’t really provide the full brand story for your business.</div>
                    </div>
                </div>

                <div class="accordion-item mb-5 border">
                    <h2 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" style={{fontWeight:"700", color:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                    5. WHAT MAKES A SUCCESSFUL BRAND?
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">A successful brand pays attention to their market, will come up with new ways to keep the interest of their target market and are not afraid to innovate. <br /> <br />

                      Apple does this really well through their innovative technology products and fulfilling customers’ needs over time. This can also be evident in the evolution of their brand – the Apple came from their initial logo with Isaac Newton and an Apple above his head. It evolved into an apple with a bite (or byte as Steve Jobs would say), followed by the different variations of the apple relevant to that specific time <br /> <br />

                      Before iPhones and iPads, Nokia was once a major player in the telecoms and technologies industries however did not hold their position as market leaders as they failed to keep their brand and business offerings relevant to market needs. Nokia had the best team of hardware engineers however overlooked the shift from hardware to software and did not make any changes to their brand or marketing. Hence, companies such as Apple & Samsung were able to take Nokia’s place as market leaders in a short timespan. <br /> <br />

                      Now you know a little more about branding and how it is the foundation to your business, how does your business rate? Does it appeal to your target market, does it position you where you want to be in your marketplace, or does your branding need some attention? <br /> <br />

                      If your brand is calling for some love, Elonatech can help! We can help evolve or rebrand your existing brand or if you have a new business, we can create a new brand that makes your business a stand out (for all the right reasons)! <br /> <br />

                      </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>

            
         {/* ACCORDIAN */}
            
           
         

            
           
        </div>

        
   </section>
  )
}

export default branding