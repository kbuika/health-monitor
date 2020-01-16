// STEPS TO FOLLOW

// Load the data from the context provider.
// Put the data in an array such that the new data is pushed into the array in intervals
// The data should be split..
    // the temperature data
    // the time labels
// Get the data at the graph component.
// Set up the graph and test it.
import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";


class TemperatureGraph extends Component {

    render() {
        return (
            
                    <div>
                        <Line
                        data={
                            {
                                labels: ['1330 hrs', '1340 hrs', '1350 hrs',
                                        '1400 hrs', '1410 hrs'],
                                datasets: [
                                {
                                    label: 'Temperature',
                                    fill: true,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: [65, 59, 80, 81, 56]
                                }
                                ]
                            }
                        }
                        options={{
                            title:{
                            display:true,
                            text:'Sample Graph',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
                
            
            
        )
    }
}

export default TemperatureGraph
