import React from 'react'
import { FaFileDownload } from 'react-icons/fa';
import { IoDocumentTextSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

function Resume() {
  return (
    <div style={{minHeight:'80vh'}} className='my-5'>
      <h1 className='text-center'>Create an ATS Friendly Resume in Minutes with AI</h1>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
          <IoDocumentTextSharp className='fs-1 text-primary mb-3'/>
          <h4>Add your Details</h4>
          <p>Our AI will generate skills and summary</p>
          <h5>Step 1</h5>
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
          <FaFileDownload className='fs-1 text-danger mb-3'/>
          <h4>Download your Resume</h4>
          <p>Download CV as PDF and start applying</p>
          <h5>Step 2</h5>
          </div>
          <div className='col-md-1'></div>
        </div>
        <div className='my-5 text-center'>
          <Link to={'/resume-details'} style={{backgroundColor:"brown"}} className='btn text-light'>Lets Start</Link>
        </div>
      </div>
    </div>
  )
}

export default Resume