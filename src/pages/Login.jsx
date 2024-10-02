import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="content">
              <div className="head">
                <p>Login</p>
              </div>
              <div className="form-box">
                <form action="" className="flex">
                  <div className="input-box">
                    <div className="label">
                      Email or Phone <span>*</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Email or Phone Number"
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Password <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Password" />
                    <div className="eye">
                      <img src="../eye-slash.png" alt="" />
                      {/* <img src="../Vector.png" alt="" /> */}
                    </div>
                  </div>

                  <div className="condition">
                    <div className="remember-forgot flex">
                      <div className="remember flex">
                        <input type="radio" />
                        <p>Remember me</p>
                      </div>
                      <div className="forgot">
                        <span>Forgot password ?</span>
                      </div>
                    </div>

                    <div className="login-btn">
                      <button>Login</button>
                    </div>
                    <div className="registration-btn">
                      <p>Don’t have an account ? Registration</p>
                    </div>
                  </div>
                </form>
              </div>
              </div>
            </div>
            <div className="img-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
