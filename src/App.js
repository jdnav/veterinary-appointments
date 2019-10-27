import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import ListAppointments from "./components/ListAppointments";

class App extends Component {
  state = {
    appointments: []
  };

  // Add appointment function
  addAppointment = data => {
    // console.log(data);
    // copy current state
    const appointments = [...this.state.appointments, data];

    // add new state
    this.setState({ appointments: appointments });
  };

  // Remove appointment function
  removeAppointment = id => {
    // console.log(data);
    // copy current state
    const appointments = [...this.state.appointments];

    // Let's get all of the appointments except the removed one
    const newAppointments = appointments.filter(obj => obj.id !== id)

    // add new state
    this.setState({ appointments: newAppointments });
  };

  render() {
    return (
      <div className="container">
        <Header title="Veterinary Clinic" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment addAppointment={this.addAppointment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListAppointments
              appointments={this.state.appointments}
              removeAppointment={this.removeAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
