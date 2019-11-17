import React, { Component } from 'react';
import { HomeContext } from '../context';
import socketIOClient from "socket.io-client";

// const API = "https://jsonplaceholder.typicode.com/users/"

// provider component
class HomeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {},
            endpoint: "http://127.0.0.1:4000", //server endpoint here
            patients: [ {id: 1, firstName: "Kelvin", lastName: "Kimani"},
                        {id: 2, firstName: "Joyce", lastName: "Watti"}
        ],
            patientRecords: {},
            isLoading: false,
            docComment: ''
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
        
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("Data", response => this.setState({ response: response}));
        //this.setState({ response: data})
        
        

        

    }
    // handleLoadVitals = event => {
    //     event.preventDefault();
    //     const id = event.currentTarget.id;
    //     this.setState({isLoading: true});

    //     fetch(API + id)
    //         .then(response => response.json())
    //         .then(jsonRecords => {
    //             this.setState({
    //                 patientRecords: jsonRecords,
    //                 isLoading: false
    //             });
    //         })
    //         .catch(error => console.log(error))
                   
    // }

   handleComment = event => {
       const comment = event.target.value;
       this.setState({
           docComment: comment
       });

   }
   saveComment = (event) => {
       event.preventDefault();
       console.log(this.state.docComment);
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
                saveComment: this.saveComment
            }}
            >
                {this.props.children}
            </HomeContext.Provider>
         );
    }
}
 
export default HomeProvider;