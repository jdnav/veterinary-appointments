import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

const initialState = {
  appointment: {
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  },
  error: false
};

class NewAppointment extends Component {
  state = { ...initialState };

  handleChange = e => {
    //console.log( "you are typing in" + e.target.name + " the value: " + e.target.value);
    // add what user is typing in state...
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Extract values from state
    const { pet, owner, date, time, symptoms } = this.state.appointment;

    // Validate all fields
    if (!pet || !owner || !date || !time || !symptoms) {
      this.setState({
        error: true
      });

      //console.log('there are fields empty!');
      return;
    }

    // generate object
    const newAppointment = { ...this.state.appointment };
    newAppointment.id = uuid();
    // Add appointment to state
    this.props.addAppointment(newAppointment);

    // Set initial state to restore form values
    this.setState({
      ...initialState
    });
  };

  render() {
    // Let's get if there is an error
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill in the form to add an appointment
          </h2>

          {/* Error message */}
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              All fields are required
            </div>
          ) : null}

          {/* Form */}
          <form onSubmit={this.handleSubmit}>
            {/* pet name */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="pet"
                  onChange={
                    this.handleChange
                  } /* Every change in the input... */
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            {/* owner name */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Owner Name"
                  name="owner"
                  onChange={
                    this.handleChange
                  } /* Every change in the input... */
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            {/* Appointment date */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Owner Name"
                  name="date"
                  onChange={
                    this.handleChange
                  } /* Every change in the input... */
                  value={this.state.appointment.date}
                />
              </div>
              {/* Appointment Time */}
              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Owner Name"
                  name="time"
                  onChange={
                    this.handleChange
                  } /* Every change in the input... */
                  value={this.state.appointment.time}
                />
              </div>
            </div>
            {/* Symptoms or appointment description */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Symptoms"
                  onChange={
                    this.handleChange
                  } /* Every change in the input... */
                  value={this.state.appointment.symptoms}
                ></textarea>
              </div>
            </div>
            {/* Submit */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add new appointment"
            />
          </form>
        </div>
      </div>
    );
  }
}

NewAppointment.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default NewAppointment;
