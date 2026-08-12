import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


function Download() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume History</h2>
        <Link to={"/resume-details"}>
          {" "}
          <IoMdArrowBack /> Back
        </Link>
      </div>
      <h4>Total Downloaded resume from our site is</h4>
      <div className="row my-5">
        {/* duplicate according to download resume count */}
        <div className="col-lg-4 mb-3">
          <div style={{ height: "400px" }} className="shadow p-3 rounded">
            <h6>Review at: time stamp</h6>
          </div>
          <div className="mt-3 text-center">
            <Link to={'/resumes/id'}> <img
              className="w-100"
              height={"300px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsFnpuRXKDl2QA1e_srHp1sQNoUBXmZ6F8fN5m1rAbcKSsDLPmx18-kU&s=10"
              alt=""
            /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
