import React, { PureComponent } from 'react';
import {Line} from 'react-chartjs-2';
import { HomeContext } from "../state-management/context";
import HomeProvider from "../state-management/provider/HomeProvider";

class PulseGraph extends PureComponent {
    
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
                                    label: 'Pulse',
                                    fill: true,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,90,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: context.state.pulseData
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
                        

                    )}
                    

                </HomeContext.Consumer>

            </HomeProvider>
            
        )
    }
}

export default PulseGraph
