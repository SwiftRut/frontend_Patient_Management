export const HospitalBillFields = [  
    { label: "Patient Name", name: "patientName", type: "text" },
    { label: "Phone Number", name: "phoneNumber", type: "text" },
    { label: "Gender", name: "gender", type: "select", options: ["Select Gender", "Male", "Female", "Other"] },
    { label: "Age", name: "age", type: "text" },
    { label: "Doctor Name", name: "doctorName", type: "text" },
    { label: "Disease Name", name: "diseaseName", type: "text" },
    { label: "Description", name: "description", type: "text" },
    { label: "Payment Type", name: "paymentType", type: "select", options: ["Select Payment Type", "Cash", "Insurance", "Credit Card"] },
    { label: "Bill Date", name: "billDate", type: "date" },
    { label: "Bill Time", name: "billTime", type: "text" },
    { label: "Bill Number", name: "billNumber", type: "text" },
    { label: "Discount (%)", name: "discount", type: "text" },
    { label: "Tax", name: "tax", type: "text" },
    { label: "Amount", name: "amount", type: "text" },
    { label: "Total Amount", name: "totalAmount", type: "text" },
    { label: "Address", name: "address", type: "text" },
  ]

  export const PatientBillFields = [
    { label: "Insurance Company", name: "insuranceCompany", type: "text" },
    { label: "Insurance Plan", name: "insurancePlan", type: "text" },
    { label: "Claim Amount", name: "claimAmount", type: "text" },
    { label: "Claimed Amount", name: "claimedAmount", type: "text" },
  ]

  export const formDataObject = {
    patientName: "",
    phoneNumber: "",
    gender: "",
    age: "",
    doctorName: "",
    diseaseName: "",
    description: "",
    paymentType: "",
    billDate: new Date().toISOString().slice(0, 10),
    billTime: "",
    billNumber: "",
    discount: "",
    tax: "",
    amount: "",
    totalAmount: "",
    address: "",
    insuranceCompany: "",
    insurancePlan: "",
    claimAmount: "",
    claimedAmount: "",
  }