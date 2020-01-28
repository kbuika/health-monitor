
import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";
import socketIOClient from "socket.io-client";


let i = 0;

class TemperatureGraph extends Component {
    constructor(props){
        super(props);

        this.state = {
            endpoint: "https://health-server.herokuapp.com/",
            temperatureData: [0],
            // 
            labels: []
        }

    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('Data', response => this.setState({
            temperatureData: [...this.state.temperatureData,response.field3],
            labels: [...this.state.labels, i++]

        }));
    }

    render() {
        return (
            // <HomeProvider>

                // <HomeContext.Consumer>
                    // {context => (
                        <div>
                        <Line
                        data={
                            {
                                labels: this.state.labels,
                                datasets: [
                                {
                                    label: 'Temperature',
                                    fill: true,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: this.state.temperatureData
                                }
                                ]
                            }
                        }
                        options={{
                            title:{
                            display:true,
                            text:'Temperature Graph',
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

export default TemperatureGraph


