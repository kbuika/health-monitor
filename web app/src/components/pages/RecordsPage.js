import React, { Component } from "react";
import { Navbar, Nav, Card, CardDeck, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";
// import TemperatureGraph from "../graphs/temperatureGraph";
// import BloodPressureGraph from "../graphs/bloodPressureGraph";
// import PulseGraph from "../graphs/pulseGraph";


class RecordsPage extends Component {
    
    render() { 
        return ( 
            <HomeProvider>

                <HomeContext.Consumer>
                    {context => (
                        <div>
                        <Navbar collapseOnSelect expand="lg" bg="green" variant="white" >
                        <Navbar.Brand href="/" className="logo">
                        <i className="fas fa-heartbeat logo-heart"></i>
                                        <i style={{fontSize: "20px"}}>Health Monitor</i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                        <Nav style={{marginLeft: "40%"}}>
                                <Nav.Link eventKey={2} href="/login">
                                    Dr. Bashir
                                </Nav.Link>
                            </Nav>
                            <Nav style={{ marginLeft: '10%'}}>
                                <Link eventKey={2} to="/about-us" >
                                    About us
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                        <div>
                            <h2 className="records-head">Patient Vitals</h2>
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
                                {/* <i className="fas fa-arrow-down status"></i> */}
                            </p>
                            {context.state.response.field1
                                ? <p className="status-blood-pressure">
                                <i className="h5">{context.state.response.field1} </i> <i>mm Hg</i>               

                            </p>
                            : <p className="status-blood-pressure">
                                <h5 style={{color: 'green'}}>Loading...</h5>
                            </p>
                            }
                            
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
                                {/* <i className="fas fa-thumbs-down status"></i> */}

                            </p>
                            
                        {context.state.response.field2
                                ? <p className="status-blood-pressure">
                                <i className="h5">{context.state.response.field2} </i> <i>bpm</i>               

                        </p>
                            : <p className="status-blood-pressure">
                                <h5 style={{color: 'green'}}>Loading...</h5>
                            </p>
                            }
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
                            {/* <i className="fas fa-arrow-down status"></i> */}

                        </p>
                        
                        {context.state.response.field3
                                ? <p className="status-blood-pressure">
                                <i className="h5">{context.state.response.field3} </i>  <i>°C</i>              
        
                                </p>
                            : <p className="status-blood-pressure">
                                <h5 style={{color: 'green'}}>Loading...</h5>
                            </p>
                            }
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
                            <h4 classname="graph-header" style={{marginBottom: "5%"}}>Graphical Representation Of Vitals</h4>
                            {/* <TemperatureGraph /> */}
                            <Link to="/vitals/graphs/temperatureGraph">Temp</Link>
                            <hr />
                            {/* <BloodPressureGraph /> */}
                            <Link to='/vitals/graphs/bloodpressureGraph'>Blood</Link>
                            <hr />
                            {/* <PulseGraph /> */}
                            <Link to='/vitals/graphs/pulseGraph'>Pulse</Link>
                            
                            <div style={{marginTop: "10%"}}>
                                <Link  style={{color: "white"}} >
                                        <Button variant="success" type="submit"  block style={{marginBottom: "10%"}}>
                                            Clear Storage
                                        </Button>
                                </Link>
                            </div>
                            

                </div>   
                         
                
                    
                </div>

                    )}
                    

                </HomeContext.Consumer>

            </HomeProvider>
            
                
         
            
         );
    }
}
 
export default RecordsPage;