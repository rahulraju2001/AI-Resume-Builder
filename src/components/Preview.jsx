import React from 'react'
import { Divider } from '@mui/material'
import Button from '@mui/material'

function Preview() {
  return (
    <div className='w-100'>
      <h2>Fullname</h2>
      <p className='fs-6 lh-1'>Phone:</p>
      <p className='fs-6 lh-1'>Email:</p>
      <p className='fs-6 lh-1'>LinkedIN:</p>
      <p className='fs-6 lh-1'>GitHub:</p>
      <p className='fs-6 lh-1'>Location:</p>
      <Divider className='bg-dark my-3'/>
      <h4>Professional Summary</h4>
      <p>Summary</p>
      <Divider className='bg-dark my-3'/>
      <h4>Technical Skills</h4>
      {/* duplicate according to skill number */}
      <span><Button variant="text" className='text-dark'>Skill</Button></span>
      <Divider className='bg-dark my-3'/>
      <h4>Education</h4>
      <p className='fs-6 lh-1'>Bachelors degree in</p>
      <p className='fs-6 lh-1'>College Name</p>
      <p className='fs-6 lh-1'>Year of Graduation</p>
    </div>
  )
}

export default Preview