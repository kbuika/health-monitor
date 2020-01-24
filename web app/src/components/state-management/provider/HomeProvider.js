import React, { Component } from 'react';
import { HomeContext } from '../context';
import socketIOClient from "socket.io-client";
import {
    withRouter
} from 'react-router-dom';


// provider component
class HomeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {},
            endpoint: "https://health-server.herokuapp.com/", //server endpoint here
            patients: [ {id: 1, firstName: "Kelvin", lastName: "Kimani"},
                        {id: 2, firstName: "Joyce", lastName: "Watti"}
        ],
            docComment: '',
            doctorEmail: '',
            doctorPassword: '',
            patientUsername: '',
            patientPassword: '',
            doctorAuthError: false,
            patientAuthError: false,
            docLoggedin: false,
            patientLoggedin: false,
            temperatureData: [15, 22],
            bloodPressureData: [65, 90],
            pulseData: [60, 40],
            labels: ['1330 hrs', '1340 hrs', '1350 hrs',
            '1400 hrs', '1410 hrs', '1420 hrs', '1430 hrs', '1440 hrs', '1450 hrs', '1460 hrs', '1470 hrs', '1480 hrs', '1500 hrs' ]
           
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("Data", response => this.setState({
             response: response,
             temperatureData: [...this.state.temperatureData, response.field3],
             bloodPressureData: [...this.state.bloodPressureData, response.field1],
             pulseData: [...this.state.pulseData, response.field2],
            }));
        

        this.setState({
            buttonDocLogin: true,
            buttonPatientLogin: true
        })

    }

handleDoctorEmail = event => {
    event.preventDefault();
    this.setState({ doctorEmail: event.target.value})
    
}

handleDoctorPassword = event => {
    event.preventDefault();
    this.setState({ doctorPassword: event.target.value})
    
}

handlePatientUsername = event => {
    event.preventDefault();
    this.setState({ patientUsername: event.target.value})
    
}

handlePatientPassword = event => {
    event.preventDefault();
    this.setState({ patientPassword: event.target.value})
    
}

handleDoctorVerification = event => {
    event.preventDefault();
    if ( this.state.doctorEmail === 'hamisibash198@gmail.com' && this.state.doctorPassword === 'moha1234') {
        this.setState({ docLoggedin: true});
        this.props.history.push("/home");
    } else {
        this.setState({ doctorAuthError: true})
    }
}

handlePatientVerification = event => {
    event.preventDefault();
    if ( this.state.patientUsername === 'kimani' && this.state.patientPassword === 'kimani1234') {
        this.setState({ patientLoggedin: true});
        this.props.history.push("/your-vitals");
    } else {
        this.setState({ patientAuthError: true})
    }
}
    


   handleComment = event => {
       const comment = event.target.value;
       this.setState({
           docComment: comment
       });

   }
   saveComment = (event) => {
       event.preventDefault();
       localStorage.setItem('comment', this.state.docComment);
   }

    

    render() { 
        return ( 
            <HomeContext.Provider
            value={{
                state: this.state,
                handleLoadVitals: this.handleLoadVitals,
                handlePatient: this.handlePatient,
                handleComment: this.handleComment,
                handleDoctorEmail: this.handleDoctorEmail,
                handleDoctorPassword: this.handleDoctorPassword,
                handlePatientUsername: this.handlePatientUsername,
                handlePatientPassword: this.handlePatientPassword,
                handleDoctorVerification: this.handleDoctorVerification,
                handlePatientVerification: this.handlePatientVerification,
                saveComment: this.saveComment
            }}
            >
                {this.props.children}
            </HomeContext.Provider>
         );
    }
}
 
export default withRouter(HomeProvider);