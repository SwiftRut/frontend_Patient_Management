import "../billPayment/monitorBilling.css";
import useScript from "../../hooks/useScript";

export default function MonitorBilling() {
  useScript('https://checkout.razorpay.com/v1/checkout.js');

  const onSuccess = (response) => {
    console.log(response);
  }
  const amount = 80;
  const handlePayment = async () => {
    const options = {

      key: 'rzp_test_bLAqvl1z0C0XkX',
      amount: amount * 100,
      currency: "INR",
      name: "Your Hospital Name",
      description: "Appointment Booking",
      handler: function(response) {
        onSuccess(response);
      },
      prefill: {
        name: "Patient Name",
        email: "patient@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Pay ₹{amount} and Book Appointment
    </button>
  );
}