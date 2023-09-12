import React from 'react';
import './branding.css';
import ELONA from './Brand-Img/elona jersey.jpg';
import CUP from './Brand-Img/cup.png'

const branding = () => {
  return (
   <section>
        <div className="branding-background">
          <div className="branding-text-container">
            <h1 className='branding-text'>“A BRAND IS NO LONGER WHAT WE TELL THE <br /> CONSUMER IT IS — IT IS WHAT CONSUMERS TELL EACH <br /> OTHER IT IS.” – <span>SCOTT COOK</span></h1>
          </div>
        </div>

      
        <div class="container overflow-hidden">
            <div class="row gy-5 mt-5">
                <div class="col-md-6">
                    <div class=" pl-6">
                        <div className="">
                            <img src={ELONA} alt="elona-jersey" srcset="" className='cup-img' /> 
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class=" ml-2">
                    Elonatech Nigeria Limited, in a bid to serve you better, has included <br /> Corporate branding in their services; Which includes: logo design, <br /> complimentary card, and ID card design, E-invoice & letterhead design, <br /> uniform social media handles, web design and development, unique domain <br /> names and hosting, and a wide array of services to keep you ahead of the <br /> competition. <br />

                    It’s much more than a logo, Elonatech brand identity development service is <br /> actually at the intersection of strategy and design. Our development process <br /> includes defining your business goals and objectives, conducting and <br /> analyzing primary research, and launching a full visual exploration of how <br /> you see yourselves and your place in the market. <br />

                    Elonatech brand professionals can manage the end-to-end process from <br /> corporate naming through marketing your brand internally and externally to <br /> multiple audiences including vendors, shareholders, consumers and <br /> employees. <br />
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
        </div>

        <div className="">

            <div className="">
                <h1 className='FAQ'>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="line"></div>
            </div>
        {/* FREQUENTLY ASKED QUESTION */}
        {/* <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div> */}

<section id="faq" class="faq mb-5 mt-3">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3><strong> Frequently AskedQuestions</strong></h3>
              <h5 className="">
              Wireless Outdoor Camera
              </h5>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    Where should I place my Outdoor Camera?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                   The recommended mounting height is 6-8 ft from the ground and angled 30 degrees down. Face the camera towards entry/exit points on your property such as your driveway, front walkway or back garden. You can also use outdoor cameras to monitor entry/exit points into your home such as facing your front door and garage doors. Be sure to use a stable ladder and ask for assistance from a helper if needed.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    How far away can the Outdoor Camera detect motion?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Up to 30 feet - depending on mounting height.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span class="num">3.</span>
                    How does Night Vision work?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                 The Outdoor Security Camera has 2 night vision modes which can be selected in the Camera Settings menu:
                Standard - With infrared (default) night vision, your camera can always see in black and white up to 30 feet away at night.
                Spotlight - With spotlight mode, your camera spotlight will turn on in live view and when motion is detected at night. Color night vision allows you to see objects up to 10 feet away. Note that the spotlight feature will shorten the battery life.
                </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span class="num">4.</span>
                    How do I set up Activity Zones for my Cameras?
                  </button>
                </h3>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                 Custom Activity Zones can be added within the Camera Settings menu in the SimpliSafe app to focus on your property. Tap the zones that you don’t want to receive alerts from such as high-traffic roads or paths.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span class="num">5.</span>
                    How long can the camera record for?
                  </button>
                </h3>
                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Upon motion, the Outdoor Camera will record for 10 seconds by default, and it will continue recording if there is sustained motion in front of it. Recordings are available with select monitoring plans.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                    <span class="num">6.</span>
                    Can I adjust my camera’s settings so I don’t have to charge the battery as often??
                  </button>
                </h3>
                <div id="faq-content-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                     Yes. While the battery life varies based on camera placement, usage and settings, there are several ways to help extend your battery life between charges. Visit the Camera Settings in your SimpliSafe app and adjust the following settings:
                        Motion Type - set to People Only.
                        Night Vision Mode - set to Standard. This is the default setting.
                        Setup Activity Zones - Remove high traffic areas such as roads, paths and sidewalks etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
        </div>

        
   </section>
  )
}

export default branding