import React, { PureComponent } from 'react';
import {Line} from 'react-chartjs-2';
// import { HomeContext } from "../state-management/context";
// import HomeProvider from "../state-management/provider/HomeProvider";
import socketIOClient from "socket.io-client";

let i = 0;

class PulseGraph extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            endpoint: "https://health-server.herokuapp.com/",
            pulseData: [0],
            // labels: ['1330 hrs', '1340 hrs', '1350 hrs',
            // '1400 hrs', '1410 hrs', '1420 hrs', '1430 hrs', '1440 hrs', '1450 hrs', '1460 hrs', '1470 hrs', '1480 hrs', '1500 hrs' ]
            labels: []
        }

    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('Data', response => this.setState({
            pulseData: [...this.state.pulseData,response.field2],
            labels: [...this.state.labels, i++]
        }));
    }
    
    render() {
        return (
            // <HomeProvider>

                // <HomeContext.Consumer>
                    //  {context => ( 
                        <div>
                        <Line
                        data={
                            {
                                labels: this.state.labels,
                                datasets: [
                                {
                                    label: 'Pulse',
                                    fill: true,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,90,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: this.state.pulseData
                                }
                                ]
                            }
                        }
                        options={{
                            title:{
                            display:true,
                            text:'Pulse Graph',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
                        

                    // )}
                    

                // </HomeContext.Consumer>

            // </HomeProvider>
            
        )
    }
}

export default PulseGraph
