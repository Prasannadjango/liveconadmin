import React,{useState} from "react";
import { Table, Pagination } from "react-bootstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
export default function Account() {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <>
      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <h2 className="fw-bold pb-4">Manage Account</h2>
        <div className="d-flex justify-content-between align-items-center pb-4">
          <input
            type="text"
            className="input-icon block rounded-md border-1 border-secondary py-2.5  pl-12 pr-20 text-gray-900 "
            placeholder="Search for Entry...."
          />
          <div className='flex'>
          <DatePicker
          showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className='Datepicker-input me-4 rounded-md border-1 border-secondary py-2.5  text-gray-900'
      />
      <DatePicker
        showIcon
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className='Datepicker-input rounded-md border-1 border-secondary py-2.5   text-gray-900'
      />
          </div>
        </div>

        <div class=" rounded-lg  shadow-md tb-container">
          <Table hover>
            <thead className="bg-[#067bbd] text-white text-lg">
              <tr>
                <th className="px-6 py-4  text-center ">user - name</th>
                <th className="px-6 py-4 text-center "> date</th>
                <th className="px-6 py-4 text-center "> Amount</th>
                <th className="px-6 py-4 text-center "> Total Coins</th>
                <th className="px-6 py-4 text-center  ">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center align-items-center text-gray-900">
                  max
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
                <td className=" px-6 py-4 font-normal text-center text-green-400 ">
                 
                 $100
                </td>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center align-items-center text-gray-900">
                  50
                </td>
              
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  <div class="flex justify-content-center gap-4">
                 
                    <a x-data="{ tooltip: 'Delete' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 text-red-600"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
}
