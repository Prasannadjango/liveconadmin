import React from "react";
import { Table, Pagination } from "react-bootstrap";
import Coins from "../Assests/Images/Coin.png";
export default function Managecoins() {
  return (
    <>
      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <h2 className="fw-bold pb-4">Manage coins</h2>
        <div className="d-flex justify-content-between align-items-center pb-4">
          <input
            type="text"
            className="input-icon block rounded-md border-1 border-secondary py-2.5  pl-12 pr-20 text-gray-900 "
            placeholder="Search for Users...."
          />
          <div className="flex">
            <div className="flex align-items-center">
              <img
                class="h-full w-full rounded-full object-contain object-center"
                src={Coins}
                alt=""
              />
              1
            <div >
            <input
            type="text"
            className=" Coin-input rounded-md border-1 border-secondary py-2.5  ms-4 text-gray-900 "
            
          />
        
            </div>
            </div>
            <button className='ms-2 bg-[#067bbd] text-white px-3 py-2 fs-6 rounded-lg'>save</button>
          </div>
        </div>

        <div class=" rounded-lg  shadow-md tb-container">
          <Table hover>
            <thead className="bg-[#067bbd] text-white text-lg">
              <tr>
                <th className="px-6 py-4  text-center ">User Name</th>
                <th className="px-6 py-4 text-center ">Reg.Date</th>
                <th className="px-6 py-4 text-center  ">Coins Purchased</th>
                <th className="px-6 py-4 text-center  ">Total Coins</th>
              
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 pb-1 text-gray-700">
                      Steven Jobs
                    </div>
                    <div class="text-gray-400">Germany</div>
                  </div>
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
               
                <td className="bdw-0 px-6 py-4 font-normal text-center  text-gray-900 flex border border-0 align-items-center justify-content-center">
                  <div class="relative h-10 w-10 me-2">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={Coins}
                      alt=""
                    />
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 text-green-500">100+</div>
                  </div>
                </td>
                 <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  500
                </td>
              </tr>

              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 pb-1 text-gray-700">
                      Steven Jobs
                    </div>
                    <div class="text-gray-400">Germany</div>
                  </div>
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
               
                <td className="bdw-0 px-6 py-4 font-normal text-center  text-gray-900 flex border border-0 align-items-center justify-content-center">
                  <div class="relative h-10 w-10 me-2">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={Coins}
                      alt=""
                    />
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 text-green-500">200+</div>
                  </div>
                </td>
                 <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  2000
                </td>
              </tr>

              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 pb-1 text-gray-700">
                      Steven Jobs
                    </div>
                    <div class="text-gray-400">Germany</div>
                  </div>
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
               
                <td className="bdw-0 px-6 py-4 font-normal text-center  text-gray-900 flex border border-0 align-items-center justify-content-center">
                  <div class="relative h-10 w-10 me-2">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src={Coins}
                      alt=""
                    />
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 text-green-500">400+</div>
                  </div>
                </td>
                 <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  100
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
