import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import medical from "../../assets/medical-certificate.png";
import prescription from "../../assets/prescription.png";
import patientImage from "../../assets/patient-image.png";

const PrescriptionView = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dummy patient data
  const patient = {
    name: 'Marcus Philips',
    number: '99130 44537',
    doctorName: 'Dr. Marcus Philips',
    age: '20 Years',
    issue: 'Feeling tired',
    gender: 'Male',
    appointmentType: 'Online',
    address: 'B-408 Swastik society, Rajkot',
    lastAppointmentDate: '2 Jan, 2022',
    lastAppointmentTime: '4:30 PM',
  };

  const Alldocuments = [
    { createdDate: '2 Jan, 2022', imageUrl: medical, title: 'Medical Certificate 1' },
    { createdDate: '5 Feb, 2022', imageUrl: prescription, title: 'Medical Certificate 2' },
    { createdDate: '15 Mar, 2022', imageUrl: medical, title: 'Medical Certificate 3' },
    { createdDate: '30 Apr, 2022', imageUrl: prescription, title: 'Medical Certificate 4' },
  ];

  const Prescriptions = [
    { createdDate: '2 Jan, 2022', imageUrl: prescription, title: 'Medical Certificate 1' },
    { createdDate: '5 Feb, 2022', imageUrl: prescription, title: 'Medical Certificate 2' },
    { createdDate: '15 Mar, 2022', imageUrl: prescription, title: 'Medical Certificate 3' },
    { createdDate: '30 Apr, 2022', imageUrl: prescription, title: 'Medical Certificate 4' },
  ];

  const Descriptions = [
    {
      createdDate: '2 Jan, 2022',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
    },
    {
      createdDate: '5 Feb, 2022',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      createdDate: '15 Mar, 2022',
      description:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum.',
    },
    {
      createdDate: '30 Apr, 2022',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
  ];

  return (
    <div className="p-8 bg-[#f6f8fb] min-h-screen shadow-lg rounded-lg">
      <div className="bg-white rounded-lg p-5 mb-3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Patient Details</h1>
          </div>
          <div className="flex items-center">
            <div className="w-1/12 ">
              <img
                src={patientImage}
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
                  <p className="font-medium">{patient.number}</p>
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
                <div>
                  <p className="text-gray-500">Last Appointment Time</p>
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
