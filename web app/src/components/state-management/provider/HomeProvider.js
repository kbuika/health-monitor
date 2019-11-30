import React, { Component } from 'react';
import { HomeContext } from '../context';
import socketIOClient from "socket.io-client";


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
            buttonDocLogin: true,
            buttonPatientLogin: true,
           
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("Data", response => this.setState({ response: response}));

        this.setState({
            buttonDocLogin: true,
            buttonPatientLogin: true
        })

    }

handleDoctorDetails = event => {
    if ( event.target.value === 'moha1234') {
        this.setState({
             buttonDocLogin: false,
            
         });
    } else {
        this.setState({ buttonDocLogin: true })
    }
}

handlePatientDetails = event => {
    if ( event.target.value === 'kimani1234') {
        this.setState({
            buttonPatientLogin: false,
        })
    } else {
        this.setState({ buttonPatientLogin: true })
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
                handleDoctorDetails: this.handleDoctorDetails,
                handlePatientDetails: this.handlePatientDetails,
                saveComment: this.saveComment
            }}
            >
                {this.props.children}
            </HomeContext.Provider>
         );
    }
}
 
export default HomeProvider;