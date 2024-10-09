import "../component/Bill.css";
export default function Bill() {
  return (
    <>
      <div className="bill-section">
        <div className="row">
          <div className="main">
            <div className="bill">
              <div className="head">
                <img src="/img/logo.png" width="300px" />
                <div className="invoice">
                  <h3>Invoice</h3>
                </div>
              </div>
              <div class="patient-info flex">
                <div>
                  <h2>Dr. Bharat Patel</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin mattis <br /> turpis nulla, finibus sodales erat porta
                    eu.
                  </p>
                </div>
                <div class="invoice-info">
                  <table>
                    <tr>
                      <td>Bill No</td>
                      <td>: 1234</td>
                    </tr>
                    <tr>
                      <td>Bill Date</td>
                      <td>: 20 June 2022</td>
                    </tr>
                    <tr>
                      <td>Due Date</td>
                      <td>: 20 July 2022</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="patient-details">
                <table>
                  <div
                    className="flex patient-details"
                    style={{ justifyContent: "space-between", width: "100%" }}
                  >
                    <div>
                      <tr>
                        <td>Name</td>
                        <td>: Miracle Kenter</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>: Male</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>: 36 Years</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          : B-105 Virat Bungalows Punagam Motavaracha Jamnagar.
                        </td>
                      </tr>
                    </div>
                    <div>
                      <tr>
                        <td>Disease Name</td>
                        <td>: Stomach Ach</td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>: 9957 96557</td>
                      </tr>
                      <tr>
                        <td>Payment Type</td>
                        <td>: Online</td>
                      </tr>
                    </div>
                  </div>
                </table>
              </div>
              <table className="data">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Qty.</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neuromuscular blockers</td>
                    <td>₹ 12000.00</td>
                    <td>2</td>
                    <td>₹ 24000.00</td>
                  </tr>
                  <tr>
                    <td>Neuromuscular blockers</td>
                    <td>₹ 800.00</td>
                    <td>2</td>
                    <td>₹ 1600.00</td>
                  </tr>
                  <tr>
                    <td>Leucovorin with high dose methotrexate (HDMTX)</td>
                    <td>₹ 1000.00</td>
                    <td>2</td>
                    <td>₹ 2000.00</td>
                  </tr>
                  <tr>
                    <td>Hydroxyurea for sickle cell disease</td>
                    <td>₹ 20.00</td>
                    <td>2</td>
                    <td>₹ 40.00</td>
                  </tr>
                </tbody>
              </table>
              <div class="total">
                <p>Amount: ₹ 25,840.00</p>
                <p>Discount 5% : ₹ 1,292.00</p>
                <p>Tax: ₹ 120.00</p>
                <p>Total Amount: ₹ 24,668.00</p>
              </div>
              <div className="end">
                <p>Call : +90854 22354</p>
                <p>Email : Hello@Gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
