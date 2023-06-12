import React from "react";
import { Table,Pagination } from "react-bootstrap";
import Coins from "../Assests/Images/Coin.png";
export default function Managecoins() {
  return (
    <>
      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <h2 className="fw-bold pb-4">Manage users</h2>
          <input
            type="text"
            
            className="input-icon block rounded-md border-1 border-secondary py-2.5  pl-12 pr-20 text-gray-900 "
            placeholder="Search for Users...."
          />
        </div>

        <div class=" rounded-lg  shadow-md tb-container">
          <Table hover>
            <thead className="bg-[#067bbd] text-white text-lg">
              <tr>
                <th className="px-6 py-4  text-center ">User Name</th>
                <th className="px-6 py-4 text-center ">Reg.Date</th>
                <th className="px-6 py-4 text-center  ">Streamed hours</th>
                <th className="px-6 py-4 text-center  ">Coins Available</th>
                <th className="px-6 py-4  text-center ">Actions</th>
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
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1686524653~exp=1686525253~hmac=16c1f8b7a885b52516491988c2ee55c4bc5e2787922f7c6bc0a17858e4535624"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 pb-1 text-gray-700">
                      Harry potter
                    </div>
                    <div class="text-gray-400">usa</div>
                  </div>
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
              <tr>
                <td className="flex gap-3 px-6 py-4 font-normal justify-content-center text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1686524653~exp=1686525253~hmac=16c1f8b7a885b52516491988c2ee55c4bc5e2787922f7c6bc0a17858e4535624"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-bold fs-6 pb-1 text-gray-700">
                      Harry potter
                    </div>
                    <div class="text-gray-400">usa</div>
                  </div>
                </td>
                <td className=" px-6 py-4 font-normal text-center text-gray-900">
                  {" "}
                  jan 2 2022
                </td>
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
                <td className=" px-6 py-4 font-normal text-center  text-gray-900">
                  20
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
                    <div class="font-bold fs-6 text-gray-700">100</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-content-center gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 "
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
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
