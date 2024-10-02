import React from 'react'
import './pages.css'

const Registration = () => {
  return (
    <>
      <div className="registration-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="head">
                <p>Registration</p>
              </div>
              <div className="form-box">
                <form action="" className='flex'>
                  <div className="input-box">
                    <div className="label">First Name <span>*</span></div>
                    <input type="text" placeholder='Enter First Name' />
                  </div>

                  <div className="input-box">
                    <div className="label">Last Name <span>*</span></div>
                    <input type="text" placeholder='Enter Last Name' />
                  </div>

                  <div className="input-box">
                    <div className="label">Email Address <span>*</span></div>
                    <input type="text" placeholder='Enter Email Address' />
                  </div>

                  <div className="input-box">
                    <div className="label">Phone Number <span>*</span></div>
                    <input type="text" placeholder='Enter Phone Number' />
                  </div>

                  <div className="input-box">
                    <div className="label">Country <span>*</span></div>

                    <select name="" id="">
                      <option>Select Country</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">State <span>*</span></div>

                    <select name="" id="">
                      <option>Select State</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">City <span>*</span></div>

                    <select name="" id="">
                      <option>Select City</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">Select Hospital <span>*</span></div>

                    <select name="" id="">
                      <option>Select Hospital*</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">Password <span>*</span></div>
                    <input type="text" placeholder='Enter Password' />
                  </div>

                  <div className="input-box">
                    <div className="label">Confirm Password <span>*</span></div>
                    <input type="text" placeholder='Enter Confirm Password' />
                  </div>

                  


                </form>
              </div>
              <div className="img-box">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration