 
  //static
export const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
];

export const timeOptions = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];
 
 
 //for Dynamic
 export const DoctorFormData = {
    name: "",
    qualification: "",
    gender: "",
    speciality: "",
    workOnStart: "",
    workingTimeStart: "",
    checkUpTimeStart: "",
    breakTimeStart: "",
    experience: "",
    phone: "",
    countryCode: "+1",
    age: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    doctorAddress: "",
    description: "",
    onlineConsultationRate: "",
    currentHospital: "",
    hospitalName: "",
    hospitalAddress: "",
    worksiteLink: "",
    emergencyContactNo: "",
    signature: null,
    profilePicture: null,
    password: "",
    confirmPassword: "",
    hospital: "",
  }

  export const formFields = [
    { label: 'Doctor Name', name: 'name', type: 'text', placeholder: 'Enter Doctor Name' },
    { label: 'Doctor Qualification', name: 'qualification', type: 'text', placeholder: 'Enter Doctor Qualification' },
    { label: 'Gender', name: 'gender', type: 'select', options: [
      { label: 'Select Gender', value: '' },
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
      { label: 'Other', value: 'Other' }
    ]},
    { label: 'Specialty Type', name: 'speciality', type: 'text', placeholder: 'Enter Specialty Type' },
    { label: 'Working Time', name: 'workingTime', type: 'select', options: [
      { label: 'Start Time', value: '' },
      ...timeOptions.map(time => ({ label: time, value: time }))
    ]},
    { label: 'Work On', name: 'workingOn', type: 'select', options: [
      { label: 'Select Work Type', value: '' },
      { label: 'Part-time', value: 'Part-time' },
      { label: 'Full-time', value: 'Full-time' },
      { label: 'Contract', value: 'Contract' }
    ]},
    { label: 'Check Up Time', name: 'patientCheckupTime', type: 'select', options: [
      { label: 'Start Time', value: '' },
      ...timeOptions.map(time => ({ label: time, value: time }))
    ]},
    { label: 'Break Time', name: 'breakTime', type: 'select', options: [
      { label: 'Start Time', value: '' },
      ...timeOptions.map(time => ({ label: time, value: time }))
    ]},
    { label: 'Experience', name: 'experience', type: 'text', placeholder: 'Enter Experience in Years' },
    { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Enter Phone Number' },
    { label: 'Country Code', name: 'countryCode', type: 'select', options: countryCodes.map(country => ({ label: `${country.code} (${country.country})`, value: country.code })) },
    { label: 'Age', name: 'age', type: 'number', placeholder: 'Enter Age' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email' },
    { label: 'Country', name: 'country', type: 'text', placeholder: 'Enter Country' },
    { label: 'State', name: 'state', type: 'text', placeholder: 'Enter State' },
    { label: 'City', name: 'city', type: 'text', placeholder: 'Enter City' },
    { label: 'Zip Code', name: 'zipCode', type: 'text', placeholder: 'Enter Zip Code' },
    { label: 'Address', name: 'doctorAddress', type: 'text', placeholder: 'Enter Address' },
    { label: 'Description', name: 'description', type: 'text', placeholder: 'Enter Description' },
    { label: 'Online Consultation Rate', name: 'onlineConsultationRate', type: 'number', placeholder: 'Enter Rate' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter Password' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
    { label: 'Current Hospital', name: 'currentHospital', type: 'text', placeholder: 'Enter Current Hospital' },
    { label: 'Hospital Name', name: 'hospitalName', type: 'text', placeholder: 'Enter Hospital Name' },
    { label: 'Hospital', name: 'hospital', type: 'select', options: [
      { label: 'Select Hospital', value: '' },
      // ...allHospitals?.map(hospital => ({ label: hospital.name, value: hospital._id }))
    ]},
    { label: 'Hospital Address', name: 'hospitalAddress', type: 'text', placeholder: 'Enter Hospital Address' },
    { label: 'Hospital Website', name: 'worksiteLink', type: 'url', placeholder: 'Enter Hospital Website' },
    { label: 'Emergency Contact', name: 'emergencyContactNo', type: 'text', placeholder: 'Enter Emergency Contact' },
  ];

export const doctorEditFormFields = [
  { label: "Doctor Name", name: "name", type: "text", placeholder: "Enter Doctor Name" },
  { label: "Doctor Qualification", name: "qualification", type: "text", placeholder: "Enter Doctor Qualification" },
  { label: "Gender", name: "gender", type: "select", options: ["", "male", "female", "other"] },
  { label: "Specialty Type", name: "speciality", type: "text", placeholder: "Enter Specialty Type" },
  { label: "Work On", name: "workingTime", type: "text", placeholder: "Enter Work On" },
  { label: "Check Up Time", name: "patientCheckupTime", type: "text", placeholder: "Enter Check Up Time" },
  { label: "Break Time", name: "breakTime", type: "text", placeholder: "Enter Break Time" },
  { label: "Experience", name: "experience", type: "text", placeholder: "Enter Experience" },
  { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter Phone Number" },
  { label: "Country Code", name: "countryCode", type: "select", options: ["1", "2"] },
  { label: "Age", name: "age", type: "number", placeholder: "Enter Age" },
  { label: "Email", name: "email", type: "email", placeholder: "Enter Email" },
  { label: "Country", name: "country", type: "text", placeholder: "Enter Country" },
  { label: "State", name: "state", type: "text", placeholder: "Enter State" },
  { label: "City", name: "city", type: "text", placeholder: "Enter City" },
  { label: "Zip Code", name: "zipCode", type: "text", placeholder: "Enter Zip Code" },
  { label: "Address", name: "doctorAddress", type: "text", placeholder: "Enter Address" },
  { label: "Description", name: "description", type: "text", placeholder: "Enter Description" },
  { label: "Online Consultation Rate", name: "onlineConsultationRate", type: "text", placeholder: "Enter Consultation Rate" }
];


export const doctorEditFormHospitalFields = [
  { label: "Current Hospital", name: "currentHospital", type: "text", placeholder: "Enter Doctor Current Hospital" },
  { label: "Hospital Name", name: "hospitalName", type: "text", placeholder: "Enter Hospital Name" },
  { label: "Hospital Address", name: "hospitalAddress", type: "text", placeholder: "Enter Hospital Address" },
  { label: "Hospital Website", name: "worksiteLink", type: "text", placeholder: "Enter Hospital Website" },
  { label: "Emergency Contact", name: "emergencyContactNo", type: "text", placeholder: "Enter Emergency Contact" }
];