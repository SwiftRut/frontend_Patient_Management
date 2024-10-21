import DoctorDetailItem from "./DoctorDetailItem";

const DoctorDetails = ({ doctorId, allDoctors}) => {
    const doctor = allDoctors?.find(doc => doc._id === doctorId);
    console.log(doctor,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Doctor from doctor Details");
    if (!doctor) return null;
  
    return (
      <div className="col-span-3 px-2 py-3">
        <div className="bg-white w-full border-1 py-3 rounded-md">
          <h5 className="px-3">Doctor Details</h5>
          <hr />
          <div className="h-20 bg-custom-gradient m-2 rounded-md relative">
            <img
              src={doctor.avatar || "./image/Avatar.png"}
              alt="Doctor Avatar"
              className="w-16"
            />
            <div>
              <span className="text-white ms-1">{doctor.firstName} {doctor.lastName}</span>
              <button className="px-3 py-1 bg-btn-light rounded-full flex text-white">
                <img src="./image/vuesax.png" alt="" className="pe-1" /> {doctor.gender}
              </button>
            </div>
          </div>
          <div className="rounded-md bg-gray-100 p-3 mx-2">
            <DoctorDetailItem title="Qualification" value={doctor.qualification} />
            <DoctorDetailItem title="Specialty Type" value={doctor.speciality} />
            <DoctorDetailItem title="Years of Experience" value={`${doctor.experience} Years`} />
            <DoctorDetailItem title="Working Time" value="6 Hours" />
            <DoctorDetailItem title="Emergency Contact Number" value={doctor.contactNumber} />
          </div>
        </div>
      </div>
    );
  };

  export default DoctorDetails;