import "../pages.css";

const AdminMobile = () => {
  return (
    <>
      <div className="admin-mobile-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="admin-mobile-content">
                <div className="head">
                  <p>Forgot Password</p>
                </div>

                <div className="note">
                  <p>Enter your email and we’ll send you a otp to reset your password.</p>
                </div>

                <div className="admin-mobile-form-box">
                  <form className="flex">

                    <div className="input-box">
                      <div className="label">
                        Email or Phone <span>*</span>
                      </div>
                      <input type="text"
                        placeholder="Enter Email or Phone"
                      />
                    </div>

                    <div className="condition">

                      <div className="otp">
                        <button type="submit">Get OTP</button>
                      </div>

                      <div className="login-btn">
                        <p><span>Back To Login</span></p>
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

export default AdminMobile;
