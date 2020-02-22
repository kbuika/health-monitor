import React from "react";
import { Navbar, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";

let i = 1;


function HomePage() {
    
    return (
        <HomeProvider>
            <HomeContext.Consumer>
                {context => (
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="green" variant="black">
                        <Navbar.Brand href="/" className="logo">
                        <i className="fas fa-heartbeat"></i>
                                        <i style={{fontSize: "20px"}}>Health Monitor</i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        {/* <Navbar.Collapse id="responsive-navbar-nav" > */}
                            
                        <Nav style={{marginLeft: "20%"}}>
                                <Nav.Link eventKey={2} to="/login">
                                    Dr. Bashir
                                </Nav.Link>
                            </Nav>
                            <Nav style={{ marginLeft: '10%'}}>
                                <Link eventKey={2} to="/about-us" >
                                    About us
                                </Link>
                            </Nav>
                        {/* </Navbar.Collapse> */}
                    </Navbar>
                    <div className="patient-list">
                        <h2>All Patients</h2>
                        <Table responsive>
                            <thead>
                                <tr style={{backgroundColor: "#00ab6c"}}> 
                                <th style={{color: "white"}}>#</th>
                                <th style={{color: "white"}}>First Name</th>
                                <th style={{color: "white"}}>Last Name</th>
                                <th style={{color: "white"}}> <i className="fas fa-folder-open" style={{color: "white"}}></i>View records</th>
                                
                                
                                </tr>
                            </thead>
                            {context.state.patients.map(patient => (
                                <tbody key={patient.id}>
                                <tr>
                                <td>{i++}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td><Link to="/records" id={patient.id} onClick={context.handleLoadRecords}>view records<i className="fas fa-arrow-right" style={{fontSize: "12px", marginLeft: "5px"}}></i></Link>
                                </td>
                                </tr>  
                            </tbody>
                            ))}
                            
                         </Table>
                    </div>
               </div>
                )}
            

            </HomeContext.Consumer>
        </HomeProvider>
        
    );
}

export default HomePage;