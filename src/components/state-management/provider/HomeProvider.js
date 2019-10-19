import React, { Component } from 'react';
import { HomeContext } from '../context';

const API = "https://jsonplaceholder.typicode.com/users/"

// provider component
class HomeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        // load data from the api
        this.setState({ isLoading: true});

        // fetch(API)
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             patients: json,
        //             isLoading: false
        //         });
        //         console.log(this.state.patients)
        //     })
        //     .catch(error => console.log(error))
            

    }
    handleLoadVitals = event => {
        event.preventDefault();
        const id = event.currentTarget.id;
        this.setState({isLoading: true});

        fetch(API + id)
            .then(response => response.json())
            .then(jsonRecords => {
                this.setState({
                    patientRecords: jsonRecords,
                    isLoading: false
                });
            })
            .catch(error => console.log(error))
                   
    }

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