import React from 'react';
import ICON1 from '../img/ci-1.png';
import ICON2 from '../img/ci-2.png';
import ICON3 from '../img/ci-3.png';
import ICON4 from '../img/ci-4.png';
import IMAGE1 from '../img/image.jpg.jpg';
import IMAGE2 from '../img/project-14-850x540-(1).jpg';
import IMAGE3 from '../img/project-14-850x540-(3.jpg';
import IMAGE4 from '../img/project-14-850x540-4.jpg';
import IMAGE5 from '../img/project-14-850x540-5.jpg';
import IMAGE6 from '../img/project-14-850x540-6.jpg';

import './graphics.css'


const Graphic = () => {
    const divStyle = {
        width:'20rem' };

    return (
        <section>
        <div className="background">
          <div className="text-container">
            <h1 className='text'>We Have The Best <br /> Graphic Services In The <br /> Market.</h1>
            <button type="button" class="btn btn-primary">Know More</button>
          </div>
        </div>
    
        
    
        <div className="container">
        <div class="row row-1">
           <div class="col-sm-4 mt-4"><div >
             <h5>OUR SERVICES</h5>
             <h2 className='text-1'>WHAT WE DO?</h2>
      
             <p className="">
              if you hire a Designer of our team you will <br /> get a video  professional to make a custom video <br /> for your business and, once the project is over.
             </p>
            </div></div>
           <div class="col-sm-8"><div >
             <div className="row">
              <div className="col-md-6 mt-4"><div >
               <div class="services__item__icon">
                 <img src={ICON1} alt="" className='icon'/>
                </div>
                <h3>Logo Variations</h3>
                <p>A primary logo, which is identifying mark of your brand, and another logo variation that can be used as a substitute.</p>
                </div></div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON2} alt=""/>
                </div>
                <h3>Brand Manual</h3>
                <p>A detailed pdf material containing information about the new brand identity development, usage guidelines, and reasons behind everything.</p>
                </div></div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON3} alt=""/>
                </div>
                <h3>Brand collaterals</h3>
                <p>All the collection of brand material needed for your brand promotion as well as sales & marketing support materials.</p>
                </div></div>
              <div className="col-md-6 mt-4"><div >
              <div class="services__item__icon">
                 <img src={ICON4} alt="" className='icon'/>
                </div>
              <h3>Video hosting</h3>
                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
                
                </div></div>
             </div>
            
            </div></div>
       </div>
        </div>
    
        <div className="our-latest-project" >
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
        </div>
      </section>
    );
}

export default Graphic;
