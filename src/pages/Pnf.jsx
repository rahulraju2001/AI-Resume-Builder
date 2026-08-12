import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://support.heberjahiz.com/hc/article_attachments/21013076295570" alt="" />
      <h6 className='mt-5'>WE ARE SORRY, LOOKS LIKE YOU ARE LOST</h6>
      <P>Page you are looking for is not available</P>
      <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
    </div>
  )
}

export default Pnf