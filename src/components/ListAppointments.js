import React from "react";
import Appointment from "./Appointment";
import PropTypes from "prop-types";

//sfc = Stateless Functional Component
const ListAppointments = ({ appointments, removeAppointment }) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">Manage your appointments here</h2>

      <div className="lista-citas">
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            removeAppointment={removeAppointment}
          />
        ))}
      </div>
    </div>
  </div>
);

ListAppointments.propTypes = {
    appointments: PropTypes.array.isRequired,
    removeAppointment: PropTypes.func.isRequired
}

export default ListAppointments;
