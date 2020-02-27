import React from 'react';
import { Link} from "react-router-dom";
import { Button, Form, Tabs, Tab } from "react-bootstrap";

import {HomeContext} from '../state-management/context';
import HomeProvider from "../state-management/provider/HomeProvider";


function LoginPage() { 
    
        return ( 
            <HomeProvider>

                <HomeContext.Consumer>
                                {context => (
                            <div style={{ backgroundColor: "grey"}}>
                                   
                                        
                                   <Link to='/about-us' style={{ textDecoration: 'none', color: 'green', float: "right", margin: '4em 3em 0em 0em'}}>About us</Link>
                                <div className="login-container">
                                    
                                    
                                   
                                <div className="header" style={{marginBottom: '50px'}}>
                                <i className="fas fa-heartbeat animated pulse infinite"></i>
                                <i style={{fontFamily: "Roboto", fontSize: "32px", color: 'green'}}>Login</i>
                                
                            
                                    
                                </div>
                                
                                    <Tabs defaultActiveKey="doctor" id="uncontrolled-tab-example">
                                    <Tab eventKey="doctor" title="Doctor">
                                    <Form >
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Doctor's email</Form.Label>
                                        <br/>
                                        <Form.Control type="Email" name='email' placeholder="Enter Email" className="input" onChange={context.handleDoctorEmail}/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <br/>
                                        <Form.Control type="password" placeholder="Password" className="input" onChange={context.handleDoctorPassword}/>
                                    </Form.Group>
                                    
                                    
                                        {/* <Link to="/home" style={{color: "white"}}> */}
                                        <Button variant="success" type="submit" classname="submit" block onClick={context.handleDoctorVerification}>
                                            Login
                                        </Button>
                                            {/* </Link> */}

                                {context.state.doctorAuthError ? <h6>Wrong credentials!</h6> : <h6>{}</h6>}

                                            
                                    
                                    </Form>
                                    
                                    
                                        
                                    </Tab>
                                    <Tab eventKey="patient" title="Patient">
                                    <Form >
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>Username</Form.Label>
                                        <br/>
                                        <Form.Control type="text" placeholder="Enter Username" className="input" onChange={context.handlePatientUsername}/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <br/>
                                        <Form.Control type="password" placeholder="Password" className="input" onChange={context.handlePatientPassword}/>
                                    </Form.Group>
                                    
                                    
                                        {/* <Link to="/your-vitals" style={{color: "white"}} > */}
                                        <Button  variant="success" type="submit" classname="submit" block onClick={context.handlePatientVerification}>
                                            Login
                                        </Button>
                                            {/* </Link> */}

                                            {context.state.patientAuthError ? <h6>Wrong credentials!</h6> : <h6>{}</h6>}

                                        
                                    
                                    </Form>
                                        
                                    </Tab>
                                    
                                </Tabs>
                                
                                
                            </div>
                            </div>
                                )}

                    </HomeContext.Consumer>

            </HomeProvider>
                
            
         );
    
}
 
export default LoginPage;