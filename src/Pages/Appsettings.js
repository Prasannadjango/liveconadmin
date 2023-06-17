import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
export default function Appsettings() {
  return (
    <>
      <h2 className="fw-bold pb-4">App settings</h2>
      <div className="Manageuser-container rounded-lg mb-4 shadow-md border-0 bg-white relative p-4">
        <h4 className="fw-bold pb-4">Login Bonus coins</h4>
        <form>
          <label>Total coins</label>
          <input type="text" className="form-control" />
          <input
            type="submit"
            value="save changes"
            className="py-2 px-3 mt-4 rounded-lg bg-[#067bbd] text-white text-lg"
          />
        </form>
      </div>

      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <h4 className="fw-bold pb-4">Manage Payment gateway</h4>
        <form>
     <div className='mb-4'>
     <label>Secret key</label>
          <input type="text" className="form-control" />
     </div>

          <label>Publishible key</label>
          <input type="text" className="form-control" />

          <input
            type="submit"
            value="save changes"
            className="py-2 px-3 mt-4 rounded-lg bg-[#067bbd] text-white text-lg"
          />
        </form>
      </div>
    </>
  );
}
