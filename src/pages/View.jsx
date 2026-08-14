import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Preview from "../components/Preview";
import { FaFileDownload } from "react-icons/fa";
import Edit from "../components/Edit";
import { MdTextSnippet } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { AiFillBackward } from "react-icons/ai";
import { viewResumeAPI } from "../services/apiService";

function View() {
  const [resume, setResume] = useState({});
  const { id } = useParams();
  console.log(resume);

  const getResumeDetails = async () => {
    const response = await viewResumeAPI(id);
    if (response.status == 200) {
      setResume(response.data);
    }
  };

  useEffect(() => {
    getResumeDetails();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-align-content-center align-items-center">
            {/* download */}
            <button className="btn fs-3 me-2">
              <FaFileDownload />
            </button>
            {/* edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume}/>
            {/* all resumes */}
            <Link to={"/all-resumes"} className="btn mx-2">
              <MdTextSnippet className="fs-3" />
              All Resumes
            </Link>
            {/* download history */}
            <Link to={"/downloads"} className="btn mx-2">
              <MdTextSnippet className="fs-3" />
              Download History
            </Link>
            {/* back */}
            <Link to={"/resume-details"} className="btn mx-2">
              <MdTextSnippet className="fs-3" />
              Home
            </Link>
          </div>
          {/* preview component */}
          <div className="p-5">
            <Preview ResumeDetails={resume}/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default View;
