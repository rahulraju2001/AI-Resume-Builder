import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Preview from "../components/Preview";
import { FaFileDownload } from "react-icons/fa";
import Edit from "../components/Edit";
import { MdTextSnippet } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { AiFillBackward } from "react-icons/ai";
import { viewResumeAPI } from "../services/apiService";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function View() {

  const previewRef = useRef()
  const [resume, setResume] = useState({});
  const { id } = useParams();
  console.log(resume);

  const getResumeDetails = async () => {
    const response = await viewResumeAPI(id);
    if (response.status == 200) {
      setResume(response.data);
    }
  };

  const downloadCV = async ()=>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(canvas,"PNG",0,0,imageWidth,imageHeight)
    //generate image url from canvas
    URL.createObjectURL(canvas)
    //when download cv api becomes success
    pdf.save("resume.pdf")
  }

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
            <button onClick={downloadCV} className="btn fs-3 me-2">
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
          <div ref={previewRef} className="p-5">
            <Preview ResumeDetails={resume}/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default View;
