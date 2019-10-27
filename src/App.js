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

  addAppointment = data => {
    console.log(data);
    // copy current state
    const appointments = [...this.state.appointments, data];

    // add new state
    this.setState({ appointments: appointments });
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
            <ListAppointments appointments={this.state.appointments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
