import React from 'react';
import ICON1 from '../graphic/img/icon1.png';
import ICON2 from '../graphic/img/icon2.png'
import ICON3 from '../graphic/img/icon3.png';
import ICON4 from '../graphic/img/packageicon.png';
import IMAGE1 from '../img/image.jpg.jpg';
import IMAGE2 from '../img/project-14-850x540-(1).jpg';
import IMAGE3 from '../img/project-14-850x540-(3.jpg';
import IMAGE4 from '../img/project-14-850x540-4.jpg';
import IMAGE5 from '../img/project-14-850x540-5.jpg';
import IMAGE6 from '../img/project-14-850x540-6.jpg';
import ELONATECH from '../graphic/img/elonatech-graphics3.jpg'
import ELONADESIGN1 from '../graphic/img/business-card3.png'
import ELONADESIGN2 from '../graphic/img/flyer2.png'
import ELONADESIGN3 from '../graphic/img/stationery1.png'

import './graphics.css'


const Graphic = () => {
    const divStyle = {
        width:'20rem' };

    return (
        <section>
        <div className="background">
        <div class="py-5 ">
          <h2 class=" mt-5 text-white text-center">Graphics Design</h2>
          <h5 class=" mt-4 text-white text-center">Offering Industry-Standard Premium Design Service</h5>
          <p class="lead text-white text-center">A form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals.</p>
        </div>
        </div>
    
        
    
        <div className="container">
        <div class="row row-1">
           <div class="col-sm-4 mt-4"><div >
             <h2 className='text-1'>Our Offering</h2>
      
             <p className="text-justify pr-3">
             Graphic Design is the key to capturing attention, conveying messages, and leaving lasting impressions. At Elonatech, we're committed to harnessing the limitless potential of creative design to help you stand out, connect with your audience, and achieve your goals.
             </p>
            </div></div>
           <div class="col-sm-8"><div >
             <div className="row">
              <div className="col-md-6 mt-4"><div >
               <div class="services__item__icon">
                 <img src={ICON1} style={{width:"50px"}} alt="" className='icon logo-icon1' />
                </div>
                <h3> Corporate design</h3>
                <p>Logo design, Business cards, Stationery, Business newsletters</p>
                </div></div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON2} style={{width:"40px"}} alt="" className='logo-icon2'/>
                </div>
                <h3>Advertising design</h3>
                <p></p>
                </div>Brochure design, Newspaper and magazine advertisements, Social media graphics, Digital advertisements, Email marketing templates,Infographic design</div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON3} style={{width:"40px"}} alt="" className='logo-icon3'/>
                </div>
                <h3> Publication design</h3>
                <p>Books, Magazines, Newsletters, Catalogs, Newspapers, eBooks</p>
                </div></div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON4}  style={{width:"40px"}} alt="" className='icon'/>
                </div>
              <h3>Packaging design</h3>
                <p>Cereal boxes, Makeup package, containers, Other food and item boxes, packages, etc.</p>
                
                </div></div>
             </div>
            
            </div></div>
       </div>
        </div>
       <div className="" style={{background:"#F9F6EE"}} >
        <div className="text pt-5"> <h1 className='text-center'>PRINT DESIGN</h1></div>
        <div className="container-card">
          <div className="content-section">
            <div class="card-body">
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN1} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Business cards</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN2} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Flyer/Brochures</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
                <div class="p-3 mb-2  text-white"> <img src={ELONADESIGN3} style={{width:"100px"}} alt=""/></div>
                  <h5 class="card-title">Stationery</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
       
       </div>
      

        <div className="  pt-5 pb-5 projects-img">
          <h2 className='text-center fs-1'>Latest Projects</h2>
        <div className=" container img-card pt-3 ">
        <img src={IMAGE1} class="elona-img" alt="..."/>
        <img src={IMAGE2} class="elona-img" alt="..."/>
        <img src={IMAGE3} class="elona-img" alt="..."/>
        <img src={IMAGE4} class="elona-img" alt="..."/>
        <img src={IMAGE5} class="elona-img" alt="..."/>
        <img src={IMAGE6} class="elona-img" alt="..."/>
        </div>
        </div>
        
        <div className="container mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card border-0" >
              <img src={ELONATECH} alt="img-fluid rounded" style={{height:"24.68rem"}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card pb-2 border-2 rounded-0" style={{borderColor:"#016193"}}>
              <h2 class="font-weight-bold heading p-2 pt-3  pl-2">Why Choose Us?</h2>
              <p class="text-black pr-4 " style={{textAlign:"justify"}}>
                <ul>
                  <li className='pb-2'> <span className='fw-bold'>Creative Excellence:</span>  Our team of talented and experienced graphic designers is passionate about creativity and driven by excellence.</li>
                  <li className='pb-2'> <span className='fw-bold'>Custom Solutions:</span>  We don't believe in one-size-fits-all. Every design project is unique, and we tailor our solutions to your specific needs and objectives.</li>
                  <li className='pb-2'> <span className='fw-bold'>Timely Delivery:</span>  We understand the importance of deadlines and work diligently to ensure your projects are delivered on time.</li>
                  <li className='pb-2'> <span className='fw-bold'>Collaboration:</span>  Your input matters. We work closely with you throughout the design process, ensuring your vision is at the heart of every project.</li>
                  <li className='pb-2'> <span className='fw-bold'>Affordability:</span>  High-quality graphic design doesn't have to break the bank. We offer competitive pricing to make outstanding design accessible.</li>
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
