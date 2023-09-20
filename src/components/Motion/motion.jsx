import React from 'react'
import Motion from './img/7953423.jpg'

const motion = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundImage: `url(${Motion})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
        <div className="container pt-5 mb-4">
          <h1 className='text-center fw-bold pt-2 text-danger' > Motion Graphics</h1>
          <p className='text-center pt-2 fs-5  pb-5'>Motion graphics is a style of animation that combines graphic design, visual effects, and animation to create engaging and dynamic visuals. Motion graphics are often used in various media, including film, television, video games, web content, advertising, and presentations, to convey information, tell stories, or enhance the overall viewing experience.</p>
        </div>
      </div>

      <div className="container mt-5">
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
        </div>
    </div>
  )
}

export default motion