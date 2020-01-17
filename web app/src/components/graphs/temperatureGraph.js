
import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";


class TemperatureGraph extends Component {

    render() {
        return (
            <HomeProvider>

                <HomeContext.Consumer>
                    {context => (
                        <div>
                        <Line
                        data={
                            {
                                labels: context.state.labels,
                                datasets: [
                                {
                                    label: 'Temperature',
                                    fill: true,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: context.state.temperatureData
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
                        

                    )}
                    

                </HomeContext.Consumer>

            </HomeProvider>
            
                   
                
            
            
        )
    }
}

export default TemperatureGraph


