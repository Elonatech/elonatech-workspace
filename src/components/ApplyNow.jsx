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
          <div className="">
            <div class="row mt-2">
              <div class="col">
              <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
              </div>
              <div class="col">
              <label for="validationCustom01" class="form-label">Last name</label>
                <input type="text"  class="form-control" placeholder="Last name" aria-label="Last name"/>
              </div>
              <div className="row mt-2">
              <div class=" col">
              <label for="validationCustom01" class="form-label">Email</label>
                <input type="text"  class="form-control" placeholder="Email" aria-label="Last name"/>
              </div>
              <div class=" col">
              <label for="validationCustom01" class="form-label">Phone Number</label>
                <input type="text"  class="form-control" placeholder="080 xxxx xxxx" aria-label="Last name"/>
              </div>
              </div>
            
              <div class=" mt-2">
              <label for="validationCustom01" class="form-label">Gender</label>
                <input type="text"  class="form-control" placeholder="male" aria-label="Last name"/>
              </div>
              <div class=" mt-2">
              <label for="validationCustom01" class="form-label">Residence</label>
                <input type="text"  class="form-control" placeholder="Current residence" aria-label="Last name"/>
              </div>
              <div className="mt-2">
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