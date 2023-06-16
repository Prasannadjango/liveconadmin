import React from "react";

export default function Addhashtags() {
  return (
    <>
      <div className="Manageuser-container rounded-lg shadow-md border-0 bg-white relative p-4">
        <h2 className="fw-bold pb-4">Add New Hashtag</h2>
        <form className="pt-4">
          <div className="pb-3">
            <label className="text-base fw-bold pb-2">Hashtag name</label>
            <input
              type="text"
              className="form-control py-3 px-3 fs-6 rounded-lg"
            />
          </div>
         
          <input
            type="submit"
            value="Add new Hashtag"
            className=" mt-2 bg-[#067bbd] text-white py-3 px-3 fs-6 rounded-lg"
          />
        </form>
      </div>
    </>
  );
}
