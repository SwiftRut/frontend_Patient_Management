import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import medical from "../../assets/medical-certificate.png";
import prescription from "../../assets/prescription.png";
import patientImage from "../../assets/patient-image.png";
import { useParams } from 'react-router-dom';
import { usePatient } from '../../hooks/usePatient';

const PrescriptionView = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { patientDetails, getPatientById } = usePatient();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPatientById(id);
    }
  }, [id]);

  // Fallback data if patientDetails is not available
  const fallbackData = {
    firstName: "Marcus",
    lastName: "Philips",
    phone: "99130 44537",
    age: "20",
    gender: "Male",
    address: "B-408 Swastik society, rajkot.",
    avatar: "https://via.placeholder.com/150",
    issue: "Feeling Tired",
    doctorName: "Dr. Smith",
    lastAppointmentTime: "4:30 PM",
  };

  const patient = {
    name: patientDetails ? `${patientDetails.firstName} ${patientDetails.lastName}` : `${fallbackData.firstName} ${fallbackData.lastName}`,
    phone: patientDetails?.phone || fallbackData.phone,
    age: patientDetails?.age ? `${patientDetails.age} Years` : `${fallbackData.age} Years`,
    gender: patientDetails?.gender || fallbackData.gender,
    address: patientDetails?.address || fallbackData.address,
    avatar: patientDetails?.avatar || fallbackData.avatar,
    issue: patientDetails?.patient_issue || fallbackData.issue,
    doctorName: patientDetails?.doctorName || fallbackData.doctorName,
    lastAppointmentTime: patientDetails?.appointmentTime || fallbackData.lastAppointmentTime,
  };

  // Assuming documents are fetched or stored in patientDetails
  const Alldocuments = patientDetails?.documents || [
    { createdDate: '2 Jan, 2022', imageUrl: medical, title: 'Medical Certificate 1' },
    { createdDate: '5 Feb, 2022', imageUrl: medical, title: 'Medical Certificate 2' },
    { createdDate: '15 Mar, 2022', imageUrl: medical, title: 'Medical Certificate 3' },
    { createdDate: '30 Apr, 2022', imageUrl: medical  , title: 'Medical Certificate 4' },
  ];

  // Assuming prescriptions are fetched or stored in patientDetails
  const Prescriptions = patientDetails?.prescriptions || [
    { createdDate: '2 Jan, 2022', imageUrl: prescription, title: 'Prescription 1' },
    { createdDate: '5 Feb, 2022', imageUrl: prescription, title: 'Prescription 2' },
    { createdDate: '15 Mar, 2022', imageUrl: prescription, title: 'Prescription 3' },
    { createdDate: '30 Apr, 2022', imageUrl: prescription, title: 'Prescription 4' },
  ];

  // Assuming descriptions are fetched or stored in patientDetails
  const Descriptions = patientDetails?.descriptions || [
    {
      createdDate: '2 Jan, 2022',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      createdDate: '5 Feb, 2022',
      description: 'It is a long established fact that a reader will be distracted by the content.',
    },
    {
      createdDate: '15 Mar, 2022',
      description: 'Many desktop publishing packages use Lorem Ipsum as their default model text.',
    },
    {
      createdDate: '30 Apr, 2022',
      description: 'There are many variations of passages of Lorem Ipsum available.',
    },
  ];

  return (
    <div className="p-8 bg-[#f6f8fb] min-h-screen shadow-lg rounded-lg">
      <div className="bg-white rounded-lg p-5 mb-3">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Patient Details</h1>
        </div>
        <div className="flex items-center">
          <div className="w-1/12">
            <img
              src={patient.avatar || patientImage}
              alt={patient.name}
              className="w-28 h-28 rounded-full mr-6 border-4"
            />
          </div>
          <div className="flex w-5/6">
            <div className="grid grid-cols-4 gap-0 border-r pe-16">
              <div>
                <p className="text-gray-500">Patient Name</p>
                <p className="font-medium">{patient.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Patient Number</p>
                <p className="font-medium">{patient.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Patient Issue</p>
                <p className="font-medium">{patient.issue}</p>
              </div>
              <div>
                <p className="text-gray-500">Patient Gender</p>
                <p className="font-medium">{patient.gender}</p>
              </div>
              <div>
                <p className="text-gray-500">Doctor Name</p>
                <p className="font-medium">{patient.doctorName}</p>
              </div>
              <div>
                <p className="text-gray-500">Patient Age</p>
                <p className="font-medium">{patient.age}</p>
              </div>
              <div>
                <p className="text-gray-500">Patient Address</p>
                <p className="font-medium">{patient.address}</p>
              </div>
            </div>
            <div className="ps-5">
              <div className="pb-5">
                <p className="text-gray-500 pb-1">Last Appointment Time</p>
                <p className="font-medium">{patient.lastAppointmentTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg p-5">
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <TabList className="flex border-b-2 mb-4">
            <Tab
              className={`px-4 py-2 cursor-pointer outline-none ${activeTab === 0 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                }`}
            >
              All Documents
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer outline-none ${activeTab === 1 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                }`}
            >
              All Prescriptions
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer outline-none ${activeTab === 2 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                }`}
            >
              Description
            </Tab>
          </TabList>

          {/* All Documents */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Alldocuments.map((document, index) => (
                <div key={index} className="border p-4 rounded-lg shadow">
                  <h3 className="text-gray-600">Created Date</h3>
                  <p className="text-sm text-gray-500">{document.createdDate}</p>
                  <img src={document.imageUrl} alt={document.title} />
                </div>
              ))}
            </div>
          </TabPanel>

          {/* All Prescriptions */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Prescriptions.map((document, index) => (
                <div key={index} className="border p-4 rounded-lg shadow">
                  <h3 className="text-gray-600">Created Date</h3>
                  <p className="text-sm text-gray-500">{document.createdDate}</p>
                  <img src={document.imageUrl} alt={document.title} />
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Description Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Descriptions.map((desc, index) => (
                <div key={index} className="border p-4 rounded-lg shadow">
                  <h3 className="text-gray-600">Description Date</h3>
                  <p className="text-sm text-gray-500">{desc.createdDate}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>{desc.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PrescriptionView;
