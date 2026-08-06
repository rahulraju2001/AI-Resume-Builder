import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from 'react-icons/fa6';

function Footer() {
  return (
    <div style={{height:'350px',backgroundColor:'blue'}} className='container-fluid p-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>
            lorem lorem lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nihil ut, voluptas eum porro nemo eligendi numquam sapiente, pariatur illo reprehenderit quas atque? Autem explicabo nihil eos eligendi aliquam maiores.
          </p>
        </div>
        <div className='col-lg-4'>
          <h4 className='mb-3'>Contact Us</h4>
          <p><MdEmail /> resumebuilder@gmail.com </p>
          <p><FaPhoneAlt /> +917034556679 </p>
          <h5 className='my-3'>Connect with us</h5>
          <div className='fs-5'>
            <FaInstagram/>
            <FaSquareFacebook className='mx-2'/>
            <FaWhatsapp/>
          </div>
        </div>
      </div>
      <h6 className="text-center my-2">Designed & Built with ❤️ using React</h6>
    </div>
  )
}

export default Footer