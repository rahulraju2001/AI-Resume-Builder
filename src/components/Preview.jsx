import React from 'react'
import { Divider } from '@mui/material'
import Button from '@mui/material'

function Preview({resumeDetails}) {
  return (
    <div className='w-100'>
      <h2>{resumeDetails?.fullName}</h2>
      <p className='fs-6 lh-1'>{resumeDetails?.phone}</p>
      <p className='fs-6 lh-1'>{resumeDetails?.email}</p>
      <p className='fs-6 lh-1'>{resumeDetails?.linkedin}</p>
      <p className='fs-6 lh-1'>{resumeDetails?.github}</p>
      <p className='fs-6 lh-1'>{resumeDetails?.location}</p>
      <Divider className='bg-dark my-3'/>
      <h4>Professional Summary</h4>
      <p>{resumeDetails?.summary}</p>
      <Divider className='bg-dark my-3'/>
      <h4>Technical Skills</h4>
      {/* duplicate according to skill number */}
      {resumeDetails?.skills.map(item=>(
        <span key={item}><Button variant="text" className='text-dark'>{item}</Button></span>
      ))}
      
      <Divider className='bg-dark my-3'/>
      <h4>Education</h4>
      <p className='fs-6 lh-1'>Bachelors degree in {resumeDetails?.degree}</p>
      <p className='fs-6 lh-1'>College Name: {resumeDetails?.college}</p>
      <p className='fs-6 lh-1'>Year of Graduation: {resumeDetails?.year}</p>
    </div>
  )
}

export default Preview