import React from "react";
import Form from 'react-bootstrap/Form';
export default function Notifications() {
  return (
    <>
      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <h2 className="fw-bold pb-4">Send Notification</h2>
        <form className="pt-4">
       <div className='pb-3'>
       <label className="text-base fw-bold pb-2">Notification title</label>
          <input type="text" className="form-control py-3 px-3 fs-6 rounded-lg"/>
       </div>
       <div>
    
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
       </div>
       <input type='submit' value='Send notification' className=" mt-4 bg-[#067bbd] text-white py-3 px-3 fs-6 rounded-lg"/>
              
            
        </form>
        </div>
    </>
  );
}
