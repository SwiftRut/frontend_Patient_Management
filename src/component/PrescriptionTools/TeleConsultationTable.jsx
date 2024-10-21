import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function TeleConsultationTable({ patient }) {
    const navigate = useNavigate();

    return (
        <tr className="border-t">
            <td className="p-3">{patient.patientName}</td>
            <td className="p-3">{patient.diseaseName}</td>
            <td className="p-3">{patient.patientIssue}</td>
            <td className="p-3">{patient.lastAppointmentDate}</td>
            <td className="p-3 text-blue-600">{patient.lastAppointmentTime}</td>
            <td className="p-3">{patient.age}</td>
            <td className="p-3 gender">
                <span className={patient.gender === 'Male' ? 'text-blue-500' : 'text-pink-500'}>
                    {patient.gender === 'Male' ? '♂' : '♀'}
                </span>
            </td>
            <td className="p-3">
                <IconButton color="primary">
                    <Visibility onClick={() => navigate(`/doctor/patientDetail/${patient.id}`)} />
                </IconButton>
            </td>
        </tr>
    )
}

// Add PropTypes validation
TeleConsultationTable.propTypes = {
    patient: PropTypes.shape({
        patientName: PropTypes.string.isRequired,
        diseaseName: PropTypes.string.isRequired,
        patientIssue: PropTypes.string.isRequired,
        lastAppointmentDate: PropTypes.string.isRequired,
        lastAppointmentTime: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};
