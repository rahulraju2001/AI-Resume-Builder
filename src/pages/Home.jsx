import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* landing */}
    <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:"cover",backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:'rgba(0,0,0,0.4)'}} className='w-50 p-5 rounded text-light text-center'>
      <h1>Designed to get hired. Your Skills, Your story, Your next job - All in one.
      </h1>
      <Link to={'/resume'} style={{backgroundColor:'#755846'}} className='btn text-light mt-3'>Make your Resume with AI</Link>
    </div>
    </div>
    {/* about */}
    <div className='container my-5'>
      <h1 className='text-center mb-5'>Whats AI rBuilder</h1>
      <div className='row align-items-center'>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium error molestias aliquam aliquid commodi tenetur mollitia autem, consequuntur quaerat cupiditate soluta omnis veritatis distinctio. Ab iusto enim perspiciatis explicabo natus!</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque omnis ipsum impedit, similique ad eligendi sit corporis eos sequi, sed ea, maiores repudiandae deserunt accusamus accusantium laboriosam dicta itaque. Cupiditate?</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repudiandae beatae, ut illo ipsam consequuntur voluptatibus mollitia accusamus inventore consequatur laborum assumenda labore aliquam quisquam dolore pariatur odit. Laboriosam, aliquam!</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas necessitatibus consectetur molestiae sed iure harum ex perferendis, voluptas corrupti dolorum beatae laboriosam ipsam libero accusantium adipisci, culpa voluptatibus dolor sequi?</p>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <img width={'100%'} height={'600px'} className='img-fluid' src="/public/resumes.png" alt="" />
        </div>
      </div>
    </div>
    {/* banner */}
    <div style={{height:'100vh',backgroundImage:'url("/banner.png")',backgroundSize:"cover",backgroundPosition:'center',backgroundAttachment:'fixed'}} ></div>
    {/* testimony */}
    <div className='container my-5'>
      <h1 className='text-center mb-5'>Testimony</h1>
      <div className='row align-items-center'>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium error molestias aliquam aliquid commodi tenetur mollitia autem, consequuntur quaerat cupiditate soluta omnis veritatis distinctio. Ab iusto enim perspiciatis explicabo natus!</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque omnis ipsum impedit, similique ad eligendi sit corporis eos sequi, sed ea, maiores repudiandae deserunt accusamus accusantium laboriosam dicta itaque. Cupiditate?</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repudiandae beatae, ut illo ipsam consequuntur voluptatibus mollitia accusamus inventore consequatur laborum assumenda labore aliquam quisquam dolore pariatur odit. Laboriosam, aliquam!</p>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas necessitatibus consectetur molestiae sed iure harum ex perferendis, voluptas corrupti dolorum beatae laboriosam ipsam libero accusantium adipisci, culpa voluptatibus dolor sequi?</p>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <div className='row'>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home