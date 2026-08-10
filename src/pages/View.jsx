import React from "react";
import { Link } from "react-router-dom";
import Preview from "../components/Preview";
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { MdTextSnippet } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { AiFillBackward } from "react-icons/ai";

function View() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-align-content-center align-items-center">
            {/* download */}
            <button className="btn fs-3 me-2"><FaFileDownload/></button>
            {/* edit */}
            <Edit/>
            {/* all resumes */}
            <Link to={'/all-resumes'} className="btn mx-2"><MdTextSnippet className="fs-3"/>All Resumes</Link>
            {/* download history */}
            <Link to={'/downloads'} className="btn mx-2"><MdTextSnippet className="fs-3"/>Download History</Link>
            {/* back */}
            <Link to={'/resume-details'} className="btn mx-2"><MdTextSnippet className="fs-3"/>Home</Link>
          </div>
          {/* preview component */}
          <div className="p-5">
            <Preview />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default View;
