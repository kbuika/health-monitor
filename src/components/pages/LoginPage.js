import React from 'react';
import { Link} from "react-router-dom";
import { Form, Button, Tabs, Tab } from "react-bootstrap";
import {HomeContext} from '../state-management/context';
import HomeProvider from "../state-management/provider/HomeProvider";


function LoginPage() { 
    
    const kibuika = "hello kibuika";
    localStorage.setItem('name', kibuika);
    
        return ( 
            <HomeProvider>

                <HomeContext.Consumer>
                                {context => (
                                <div className="login-container">
                                <div className="header">
                                <i className="fas fa-heartbeat"></i>
                                <i style={{fontFamily: "Roboto", fontSize: "28px"}}>Login as</i>
                                
                            
                                    
                                </div>
                                
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="doctor" title="Doctor">
                                    <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Doctor's email</Form.Label>
                                        <br/>
                                        <Form.Control type="Email" placeholder="Enter Email" className="input"/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <br/>
                                        <Form.Control type="password" placeholder="Password" className="input"/>
                                    </Form.Group>
                                    
                                    
                                        <Link to="/home" style={{color: "white"}}>
                                        <Button variant="success" type="submit" classname="submit" block>
                                            Login
                                        </Button>
                                            </Link>
                                        
                                    
                                    </Form>
                                        
                                    </Tab>
                                    <Tab eventKey="patient" title="Patient">
                                    <Form>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>Username</Form.Label>
                                        <br/>
                                        <Form.Control type="text" placeholder="Enter Username" className="input"/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <br/>
                                        <Form.Control type="password" placeholder="Password" className="input"/>
                                    </Form.Group>
                                    
                                    
                                        <Link to="/your-vitals" style={{color: "white"}} >
                                        <Button  variant="success" type="submit" classname="submit" block >
                                            Login
                                        </Button>
                                            </Link>
                                        
                                    
                                    </Form>
                                        
                                    </Tab>
                                    
                                </Tabs>
                                
                                
                            </div>
                                )}

                    </HomeContext.Consumer>

            </HomeProvider>
                
            
         );
    
}
 
export default LoginPage;