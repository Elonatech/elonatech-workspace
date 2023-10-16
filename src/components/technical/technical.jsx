import React from 'react';
import './technical.css'
import { AiFillStar } from "react-icons/ai";
import Tech1 from '../technical/img/network-engineer-using-laptop-server-room_236854-41049_480.jpg'
import Tech2 from '../technical/img/concentrated-black-workman-hardhat-orange-vest-crouching-by-server-using-flashlight-while-fixing-server-problem_274679-20191_720.jpg'

const technical = () => {
  return (
    <section>
        <div className='technical-background'>
            <div class="py-5 ">
                <h2 class=" mt-5 text-white text-center">Tech Support</h2>
                <h5 class=" mt-4 text-white text-center">We provide assistance to customers and clients who are experiencing technical issues with products, services, or equipment. <br /> offering guidance on the use of software or hardware, and resolving any issues that arise.</h5>
                <p class="lead text-white text-center"> To ensure that customers can effectively use products or services without facing technical hurdles.</p>
            </div>
        </div>

        <div className="container ">
            <div className="">
            <div class="row justify-content-center pt-5 pb-5">
                <div class="col-md-6">
                <img src={Tech1} alt="" className='img-fluid'/>
                </div>
                <div class="col-md-6">
                    <div className="tech-text">
                        <h2 className='fw-bold'>Our Technical Support Team</h2>
                        <p className='text-justify p-text' >is composed of individuals that are familiar with the ins and outs of the device they are assigned to.
                            They offer user-friendly assistance for individuals having technical problems with computer/electronic devices. With this knowledge, they are able to troubleshoot most problems that a user experiences. Technical support may be provided over the phone, through email, a live-chat interface or with a remote support solution.
                            The Technical Support personnel help maintain, manage and repair IT systems. The role also involves diagnosing software or hardware faults and solving the issues over the phone or in person. </p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="container pl-5 pr-5 pb-5">
            <div className="">
            <div class="row justify-content-center flex-column-reverse flex-lg-row ">
                <div class="col-md-6">
                <div className="tech-text">
                        <h2 className='fw-bold'>Tech Support Services Include:</h2>
                        <ul className='p-text'>
                            <li className='pt-3'>Troubleshooting problems</li>
                            <li className='pt-3'>providing guidance on product usage</li>
                            <li className='pt-3'>addressing software and hardware issues</li>
                            <li className='pt-3'>offering solutions to technical challenges.</li>
                            <li className='pt-3'>Technical support services can be provided through various channels, such as phone, email, live chat, or in-person support</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                <img src={Tech2} alt="" className='img-fluid'/>
                </div>
            </div>
            </div>
        </div>

        <div className="container">
            <h2 className='fw-bold fs-4 text-center'>What Are The Main Responsibilities?</h2>
            <p className='text-center' style={{fontSize:"18px"}}>We will be right at the heart of matters as we need to deal directly with employees and customers who have <br /> technical problems such as trouble with their email accounts, forgotten passwords or viruses.</p> 
            </div>
        <div className="container p-1" style={{backgroundColor:"#34548c"}}>
            <div className="text-light">
                <h3 className='fw-bold fs-5 pl-md-5 pt-3'>Typical Technical Support responsibilities include:</h3>
            <div class="row justify-content-center  pt-4">
                <div class="col-md-6">
                <ul style={{ listStyle:"none"}}>
                    <li className='pl-1'>
                    <div className="d-flex ">
                    <AiFillStar style={{width:"20px"}}/>
                            <p className=''>Installation & configuration of a company’s computer hardware operating systems and applications.</p>
                        </div>
                        </li>
                    <li>
                    <div className="d-flex ">
                    <AiFillStar style={{width:"20px"}}/>
                            <p className=''>Maintenance and monitoring of computer networks and systems.</p>
                        </div>
                        </li>
                    <li>
                    <div className="d-flex ">
                    <AiFillStar style={{width:"20px"}}/>
                            <p className=''>Logging the queries of customers and employees.</p>
                        </div>
                        </li>
                    <li>
                    <div className="d-flex ">
                    <AiFillStar sstyle={{width:"20px"}}/>
                            <p className=''> Analysis of call logs in order to discover any underlying issues or trends.</p>
                        </div>
                       </li>
                       
                    <li>
                    <div className="d-flex ">
                    <AiFillStar sstyle={{width:"20px"}}/>
                            <p className=''> Analysis of call logs in order to discover any underlying issues or trends.</p>
                        </div>
                       </li>
                       
                    <li>
                    <div className="d-flex ">
                    <AiFillStar sstyle={{width:"20px"}}/>
                            <p className=''> Analysis of call logs in order to discover any underlying issues or trends.</p>
                        </div>
                       </li>
                       
                       <li>
                    <div className="d-flex ">
                    <AiFillStar style={{width:"20px"}}/>
                            <p className='ml-2'>Following instructions, either written or in diagram form, in order to set up a system or fix a fault.</p>
                        </div>
                    </li>
                   
                </ul>
                </div>
                <div class="col-md-6">
                <ul >
                    <li>
                        <div className="d-flex ">
                        <AiFillStar/>
                            <p className=''>Testing and evaluating new technology.</p>
                        </div>
                    </li>
                    <li className=''>
                    <div className="d-flex ">
                    <AiFillStar/>
                            <p className=''>Performing electrical safety checks on the company’s computer equipment.</p>
                        </div>
                        </li>
                    <li className=''>
                    <div className="d-flex ">
                    <AiFillStar/>
                            <p className=''>Responding to call-outs in a timely fashion.</p>
                        </div>
                        </li>
                        <li>
                    <div className="d-flex ">
                    <AiFillStar/>
                            <p className=''> Diagnosing and solving hardware or software faults.</p>
                        </div>
                       </li>
                    <li className=''>
                    <div className="d-flex ">
                        <AiFillStar/>
                            <p className=''>Provide after-sales support for software or equipment supplied..</p>
                        </div>
                        </li>
                </ul>
                </div>
            </div>
            </div>

            

        </div>
    </section>
    
  )
}

export default technical