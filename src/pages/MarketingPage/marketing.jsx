import React from 'react'
// import ApplyNow from '../../components/applynow'

const marketing = () => {
  return (
    <section>
      <div className="container">
      <h1 className='my-4' style={{fontSize:"", fontWeight:"800",color:"#34548c" }}>Marketer/Sales Representatives</h1>
        <div className="GraphicImage"></div>
        <div class="row justify-content-center mt-4">
          <div class="col-md-6">
          <h5 style={{fontSize:"", fontWeight:"700",color:"#34548c" }}>Role Description:</h5>
          <p className='text-justify'>This is a full-time Hybrid role for a Marketer/Sales Representatives. The Marketer/Sales Rep will be responsible for marketing our brand to a variety of industries and prospective clients. The Marketer/Sales Rep will work closely with the Digital Marketing team as well as with the Admin Manager to ensure prospective clients are intimated properly.</p>
            <p> <span style={{color:"#34548c",fontWeight:"700" }}>Location:</span>  Egbeda, Lagos (Mainland)</p>
            <p> <span style={{color:"#34548c",fontWeight:"700" }}>Employment Type:</span>  Hybrid</p>
            <p> <span style={{color:"#34548c",fontWeight:"700" }}>Salary:</span> Basic allowance plus commission</p>
            <p><span style={{color:"#34548c",fontWeight:"700" }}>Qualifications:</span> SSCE, NCE, ND in Marketing, Business Administration, Mass Communication, Public Relations or other related discipline.</p>
            <p style={{color:"#34548c",fontWeight:"700" }}>Responsibilities:</p>
              <ul>
                  <li> Present, promote and sell services using solid arguments to existing and prospective customers</li>
                  <li> Perform cost-benefit and needs analysis of existing/potential customers to meet their needs</li>
                  <li> Establish, develop and maintain positive business and customer relationships</li>
                  <li> Reach out to customer leads through calls and meetings</li>
                  <li> Advance the resolve of customer problems and complaints to maximize satisfaction</li>
                  <li> Coordinate sales effort with team members and other departments</li>
                  <li> Analyze the territory/market’s potential, track sales and status reports</li>
                  <li> Supply management with reports on customer needs, problems, interests, competitive activities, and potential for new products and services.</li>
                  <li> Keep abreast of best practices and promotional trends</li>
                  <li> Continuously improve through feedback</li>
              </ul>
          </div>
          <div class="col-md-6">
            <div className="">
                <p style={{color:"#34548c",fontWeight:"700" }}>Requirements and skills</p>
                <ul>
                  <li> Previous work experience as a Marketer / Sales Representative</li>
                  <li> Basic Computer knowledge (MS Office/excel)</li>
                  <li> Ability to build industrious business relationships</li>
                  <li> Highly motivated and target driven (track record in sales)</li>
                  <li> Excellent communication, brokering skills</li>
                  <li> Ability to manage time and organizational skills</li>
                  <li> Ability to generate and deliver presentations tailored to the audience needs</li>
                  <li> Relay feedback between management and prospective client</li>
                  <li> Thorough understanding of Information Technology services</li>
                </ul>
            </div>

            <div className="">
            <p style={{color:"#34548c",fontWeight:"700" }}>Personal Attributes</p>
                <ul>
                <li> Excellent Communication skills</li>
                <li> Ability to interact professionally with co-workers, supervisors and customers.</li>
                <li> Highly organized, focused and attentive to detail</li>
                </ul>

                <p> <span style={{color:"#34548c",fontWeight:"700" }}> Note:</span>  All applications will be treated in confidence and only shortlisted candidates will be contacted.</p>
                <p className='mt-md-4'> <span style={{color:"#34548c",fontWeight:"700" }}> Method of Application:</span> Interested and qualified candidates should click the link below to apply</p>
                {/* < ApplyNow /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default marketing