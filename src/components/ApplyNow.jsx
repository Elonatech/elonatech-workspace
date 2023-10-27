import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ApplyNow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='px-5'>
       Apply Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" px-3">
            <div class="row mt-2">
              <div class="col">
              <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
              </div>
              <div class="col">
              <label for="validationCustom01" class="form-label">Last name</label>
                <input type="text"  class="form-control" placeholder="Last name" aria-label="Last name"/>
              </div>
            </div>
            <div className="row mt-2">
              <div class=" col">
              <label for="validationCustom01" class="form-label">Email</label>
                <input type="text"  class="form-control" placeholder="Email" aria-label="Last name"/>
              </div>
              <div class=" col">
              <label for="validationCustom01" class="form-label w-100">Phone Number</label>
                <input type="text"  class="form-control" placeholder="080 xxxx xxxx" aria-label="Last name"/>
              </div>
              </div>

              <div class="row mt-2">
                <div class="col">
                  <label for="validationCustom01" class="form-label">Gender</label>
                  <input type="text"  class="form-control" placeholder="male" aria-label="Last name"/>
                </div>
                <div class="col">
                  <label for="validationCustom01" class="form-label">Residence</label>
                  <input type="text"  class="form-control" placeholder="Current residence" aria-label="Last name"/>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <label for="validationCustom01" class="form-label">Date of Birth</label>
                  <input type="date"  class="form-control" placeholder="mm/dd/yy" aria-label="Last name"/>
                </div>
                <div class="col">
                <div class="mb-2">
                  <label for="formGroupExampleInput" class="form-label">Skills/Specialty</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="seperate each skill with a ',' " />
                </div>
                </div>
              </div>

              <div class="row mt-2">
                <div class="col">
                <label for="inputState" class="form-label">Job Category</label>
                  <select id="inputState" class="form-select">
                    <option selected>Graphics Designer/Digital Marketer</option>
                    <option selected>Full Stack Web developer</option>
                    <option selected>Digital Marketing</option>
                    <option selected>Animations/Motion Graphics & UI/UX Graphics Designer</option>
                    <option selected>Systems/Network Engineer</option>
                    <option selected>Marketing & Sales Rep</option>
                  </select>
                </div>
                <div class="col">
                <div class="mb-2">
                <label for="inputState" class="form-label">Current Employment Status*</label>
                  <select id="inputState" class="form-select">
                    <option selected>Unemployed</option>
                    <option selected>Employed</option>
                    <option selected>Freelance</option>
                  </select>
                </div>
                </div>
              </div>

              <div class="form-floating mt-2">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
              <label for="floatingTextarea2">Cover Letter</label>
            </div>

            <div class=" mt-3">
            <label for="inputState" class="form-label">Upload your CV (PDF)</label>
              <input type="file" class="form-control pt-1" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
            
            </div>
             
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplyNow;