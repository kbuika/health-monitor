import React, { Component } from "react";
import { Navbar, Nav, Card, CardDeck, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";

class RecordsPage extends Component {
    
    render() { 
        return ( 
            <HomeProvider>

                <HomeContext.Consumer>
                    {context => (
                        <div>
                        <Navbar collapseOnSelect expand="lg" bg="green" variant="white">
                        <Navbar.Brand href="#" className="logo">
                        <i className="fas fa-heartbeat logo-heart"></i>
                                        <i style={{fontSize: "20px"}}>Health Monitor</i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                            <Nav style={{marginLeft: "60%"}}>
                            <Link to="/home" style={{marginTop: "10px"}}>Patient Lists</Link>
                            <Nav.Link eventKey={2} to="/login">
                                Dr. Christopher
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                        <div>
                            <h2 className="records-head">Patient X Vitals</h2>
                        </div>
                    
                        <div className="vitals-container">
                
                    <CardDeck>
                    <Card border="secondary" className="vitals-card">
                        <Card.Header>
                            <div><i className="fas fa-heartbeat animated pulse infinite heart-vital"></i>
                        <i className="h4">Blood Pressure (mm Hg)</i></div></Card.Header>
                        <Card.Body>
                            <div className="sys">
                                <span className="sys-dys">SYS</span>
                                <span className="sys-line">|</span> 

                                <span className="sys-dys">DYS</span>
                            </div>
                            <p className="status-blood-pressure">
                                <strong>Status: </strong>
                                <i className="fas fa-arrow-down status"></i>
                            </p>
                            {/* <p>{record.name}</p> */}
                        <Card.Text>
                        
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card border="secondary" className="vitals-card">
                        <Card.Header>
                            <div>
                                <i className="fas fa-file-medical-alt"></i>
                                <i className="h4">Pulse Reading ( bpm )</i>

                                </div>                
                        </Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <p className="status-blood-pressure">
                                <strong>Status: </strong>
                                <i className="fas fa-thumbs-down status"></i>
                            </p>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="secondary" className="vitals-card">
                        <Card.Header>
                            <div>
                                <i className="fas fa-thermometer"></i>
                                <i className="h4">Temperature ( °C )</i>                   
                            </div>
                        </Card.Header>
                        <Card.Body>
                        <Card.Text>
                        <p className="status-blood-pressure">
                            <strong>Status: </strong>
                            <i className="fas fa-arrow-down status"></i>
                        </p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                </div>
                        <div className="graphs">
                            <h4>Give a comment</h4>
                            <Form.Control type="text" placeholder="Your comments" onChange={context.handleComment}/>
                            <button type='submit' className="btn btn-success" style={{marginTop: "5px"}} onClick={context.saveComment}>Save</button>
                        </div>
                        

                
                <div className="graphs">
                            <h4 classname="graph-header" style={{marginBottom: "40%"}}>Graphical Representation Of Vitals</h4>
                            <Link  style={{color: "white"}} >
                                    <Button variant="success" type="submit"  block style={{marginBottom: "10%"}}>
                                        Clear Storage
                                    </Button>
                            </Link>

                </div>            
                
                    
                </div>

                    )}
                    

                </HomeContext.Consumer>

            </HomeProvider>
            
                
         
            
         );
    }
}
 
export default RecordsPage;