import React, { Component } from "react";

class NewAppointment extends Component {
  state = {};

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill in the form to add an appointment
          </h2>
          <form>
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

export default NewAppointment;
