import React from 'react';
import ICON1 from '../graphic/img/icon1.png';
import ICON2 from '../graphic/img/icon2.png'
import ICON3 from '../graphic/img/icon3.png';
import ICON4 from '../graphic/img/packageicon.png';
import IMAGE1 from '../graphic/img/elonatech-flash-sale-2_720.jpg';
import IMAGE2 from '../graphic/img/safebrooks-everyday-post6_720.jpg';
import IMAGE3 from '../graphic/img/water_softeners_2-01_720.png';
import IMAGE4 from '../graphic/img/elonatech-monday-post_720.jpg';
import IMAGE5 from '../graphic/img/monday-special-new-2_720.jpg';
import IMAGE6 from '../graphic/img/mission-impossible-promo_720.png';
import IMAGE7 from '../graphic/img/expendibles-now-showing-original_720.jpg';
import IMAGE8 from '../graphic/img/elonatech-website-design_720.jpg';
import ELONATECH from '../graphic/img/elonatech-graphics3.jpg'
import ELONATECH1 from '../graphic/img/screenshot_2023-10-11_110556_480.png'
import ELONATECH2 from '../graphic/img/Graphics_1-removebg-preview (1).png'
import ELONADESIGN1 from '../graphic/img/business-card3.png'
import ELONADESIGN2 from '../graphic/img/flyer2.png'
import ELONADESIGN3 from '../graphic/img/stationery1.png'
import Graphic1 from '../graphic/img/graphic_design_header-removebg-preview.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './graphics.css'


const Graphic = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const sliderStyle = {
    padding: "10px", // Adjust this value to control the margin
  };



    const divStyle = {
        width:'20rem' };

    return (
        <section>
    
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Graphic1})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'400px', color:'white'}}>
            <div className="container pt-5 "  data-aos="fade-down" data-aos-duration="3000">
                <h1 className='text-center pt-5 text-white fw-bold'>Graphic Design</h1>
                <h5 className='text-center fs-5'>Offering Industry-Standard Premium Design Service.</h5>
                <p class="lead text-white text-center">A form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals.</p> 
            {/* <p className='text-center fs-6'>We provide comprehensive video and photography solutions for events of every size, anywhere in Nigeria. Whether it’s a conference, training, presentation, exhibitions etc.</p> */}
            </div>
        </div>



        <div className="container">
          <div class=" offering row  flex-lg-row">
            <div class="col-md-5 container">
            <h2 className='text-1 text-start fw-bold'>Our Offering</h2>
            <p className=" fs-6 fw-normal text-justify text-p">
             Graphic Design is the key to capturing attention, conveying messages, and leaving lasting impressions. At Elonatech, we're committed to harnessing the limitless potential of creative design to help you stand out, connect with your audience, and achieve goals.
             </p>
             <img src={ELONATECH1} alt="img-fluid rounded"  className='img-fluid '/>
            </div>
            <div class="col-md-7">
            <div class="row">
              <div class="col-md-6 col-sm-3">
                <div class="services__item__icon ">
                 <img src={ICON1} style={{width:"50px"}} alt="" className='icon logo-icon1 ' />
                </div>
                <h3> Corporate design</h3>
                <p>Logo design, Business cards, Stationery, Business newsletters</p>
                </div>
              <div class="col-md-6 col-sm-3">
               <div class="services__item__icon">
                 <img src={ICON2} style={{width:"40px"}} alt="" className='logo-icon2'/>
                </div>
                <h3>Advertising design</h3>
                <p>Brochures, newspapers and magazines, social media, email marketing, & Infographics designs and digital advertisements</p>
              </div>
              <div class="col-md-6 col-sm-3">
              <div class="services__item__icon">
                 <img src={ICON3} style={{width:"40px"}} alt="" className='logo-icon3'/>
                </div>
                <h3> Publication design</h3>
                <p>Books, Magazines, Newsletters, Catalogs, Newspapers, eBooks</p>
              </div>
              <div class="col-md-6 col-sm-3">
                   <div class="services__item__icon">
                 <img src={ICON4}  style={{width:"40px"}} alt="" className='icon'/>
                </div>
              <h3>Packaging design</h3>
                <p>Cereal boxes, Makeup package, containers, Other food and item boxes, packages, etc.</p>
              </div>
            </div>
            {/* <img src={ELONATECH2} alt="img-fluid rounded" className='elona-img-2'/> */}
            {/* style={{height:"20rem", width:"620px"}} */}
            </div>
          </div>

      
        </div>



       <div className="" style={{background:"#F9F6EE"}} >
        <div className="pt-4"> <h1 className='text-center'>PRINT DESIGN</h1></div>
        <div className="container-card ">
          <div className="content-section p-md-5">
            <div class="card-body" style={{width:"22rem"}}>
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN1} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Business cards</h5>
                  <p class="card-text text-justify">This shows off all your branding essentials: The name of your business, your logo, and your tagline. It encourages people to contact you, visit your business (online or in real life) and learn more about you.</p>
            </div>
            <div class="card-body " style={{width:"22rem"}}>
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN2} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Flyer/Brochures</h5>
                  <p class="card-text text-justify">usually used for large volume hand-outs, brochures are designed to be read and to help readers absorb important information.
                      These are advertisement that is presented by a business for promoting their products or services</p>
            </div>
            <div class="card-body " style={{width:"22rem"}}>
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN3} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Stationery</h5>
                  <p class="card-text text-justify ">This refers to commercially manufactured writing materials, including cut paper, envelopes, writing implements, continuous form paper, and other office supplies.</p>
            </div>
          </div>
        </div>

       </div>


        <div className="  pt-5 pb-5 projects-img">
          <h2 className='text-center fs-1 pb-5'>Latest Projects</h2>
        {/* <div className=" container img-card pt-3 ">
        <img src={IMAGE1} class="elona-img" alt="..."/>
        <img src={IMAGE2} class="elona-img" alt="..."/>
        <img src={IMAGE3} class="elona-img" alt="..."/>
        <img src={IMAGE4} class="elona-img" alt="..."/>
        <img src={IMAGE5} class="elona-img" alt="..."/>
        <img src={IMAGE6} class="elona-img" alt="..."/>
        <img src={IMAGE7} class="elona-img" alt="..."/>
        <img src={IMAGE8} class="elona-img" alt="..."/>
        </div> */}

        {/* slider */}
        <Slider {...settings} style={sliderStyle}>
                  <div>
                    <h3><img src={IMAGE1} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE2} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE3} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE4} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE5} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE6} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE7} alt=""  className='elona-img'/></h3>
                  </div>
                  <div>
                    <h3><img src={IMAGE8} alt=""  className='elona-img'/></h3>
                  </div>
                </Slider>
        </div>

        <div className="container mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card border-0" >
              <img src={ELONATECH} alt="img-fluid rounded" style={{height:"24.68rem"}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card pb-2 border-2 rounded-0" style={{borderColor:"#016193", height:"24.68rem"}}>
              <h2 class="font-weight-bold heading p-2 pt-3  pl-2">Why Choose Us?</h2>
              <p class="text-black pr-4 " style={{textAlign:"justify", height:"24.68rem"}}>
                <ul>
                  <li className='pb-mb-2'> <span className='fw-bold'>Creative Excellence:</span>  Our team of talented and experienced graphic designers is passionate about creativity and driven by excellence.</li>
                  <li className='pb-mb-2'> <span className='fw-bold'>Custom Solutions:</span>  We don't believe in one-size-fits-all. Every design project is unique, and we tailor our solutions to your specific needs and objectives.</li>
                  <li className='pb-mb-2'> <span className='fw-bold'>Timely Delivery:</span>  We understand the importance of deadlines and work diligently to ensure your projects are delivered on time.</li>
                  <li className='pb-mb-2'> <span className='fw-bold'>Collaboration:</span>  Your input matters. We work closely with you throughout the design process, ensuring your vision is at the heart of every project.</li>
                  <li className='pb-mb-2'> <span className='fw-bold'>Affordability:</span>  High-quality graphic design doesn't have to break the bank. We offer competitive pricing to make outstanding design accessible.</li>
                </ul>
              </p>
              </div>
            </div>
          </div>
        </div>




         {/* <div className="our-latest-project" >
          <div className="text-content-2"  >
            <h1 className='project' >Our Latest Projects</h1>
            <div className="line"></div>
            <p>Nullam varius porttitor augue id rutrum. Duis vehicula magna at magna tempus rhoncus. Maecenas quis lobortis elit, nec faucibus augue., <br /> Nullam varius porttitor augue id rutrum. Duis vehicula magna at magna tempus</p>
          </div>

          <div className="">
          <div class="container">
            <div class="row row-cols-1 row-cols-lg-3  md-4">
              <div class="col">
                <div class="p-3 ">
                <div class="card" style={divStyle}>
                <img src={IMAGE1} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">REMABEN</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                <div class="card" style={divStyle}>
                <img src={IMAGE2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">SAFEBROOKS</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                    <div class="card" style={divStyle}>
                <img src={IMAGE3} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">REMABEN</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                <div class="card" style={divStyle}>
                <img src={IMAGE4} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">OZONE</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">

                <div class="card" style={divStyle}>
                <img src={IMAGE5} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">KAPPACHEM LABORATORY</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
              <div class="col">
                <div class="p-3">

                <div class="card" style={divStyle}>
                <img src={IMAGE6} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">ELONA TECH</h5>
                  <p class="card-text">Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc dui, scelerisque at purus…</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>  */}
      </section>
    );
}

export default Graphic;
