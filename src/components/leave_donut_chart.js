import React from 'react';
import '../donut_styles.css'
import DonutChart from 'react-donut-chart';

function Donut_Chart(){
    return(
        <div id = "chart-diagrams">
            <section class = "donutchart1">
                <h3 class="donut-text">ANNUAL</h3>
                <DonutChart
                    // height = {220}
                    // width = {220}
                    responsive = {true}
                    maintainAspectRatio = {true}
                    innerRadius = {0.58}
                    outerRadius = {0.95}
                    emptyOffset = {0.12}
                    selectedOffset = {0}
                    startAngle = {-90}
                    legend = {false}
                    clickToggle = {false}
                    formatValues = {(values, total) => `${(values).toFixed(0)} days`}
                    
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 5
                    },
                    {
                        label: 'Used',
                        value: 7,
                        isEmpty: true
                    }]} 
                />
            </section>
        
            <section class = "donutchart2">
                <h3 class="donut-text">SICK</h3>
                <DonutChart
                    // height = {220}
                    // width = {220}
                    responsive = {true}
                    maintainAspectRatio = {true}
                    innerRadius = {0.58}
                    outerRadius = {0.95}
                    emptyOffset = {0.12}
                    selectedOffset = {0}
                    startAngle = {-90}
                    legend = {false}
                    clickToggle = {false}
                    formatValues = {(values, total) => `${(values).toFixed(0)} days`}
                    
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 1
                    },
                    {
                        label: 'Used',
                        value: 7,
                        isEmpty: true
                    }]} 
                />
            </section>

            <section class = "donutchart1">
                <h3 class="donut-text">UNPAID</h3>
                <DonutChart
                    // height = {220}
                    // width = {220}
                    responsive = {true}
                    maintainAspectRatio = {true}
                    innerRadius = {0.58}
                    outerRadius = {0.95}
                    emptyOffset = {0.12}
                    selectedOffset = {0}
                    startAngle = {-90}
                    legend = {false}
                    clickToggle = {false}
                    formatValues = {(values, total) => `${(values).toFixed(0)} days`}
                            
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 7
                    },
                    {
                        label: 'Used',
                        value: 1,
                        isEmpty: true
                    }]} 
                />
            </section>
            <section class = "donutchart2">
                <h3 class="donut-text">PARENTAL</h3>
                <DonutChart
                    // height = {220}
                    // width = {220}
                    responsive = {true}
                    maintainAspectRatio = {true}
                    innerRadius = {0.58}
                    outerRadius = {0.95}
                    emptyOffset = {0.12}
                    selectedOffset = {0}
                    startAngle = {-90}
                    legend = {false}
                    clickToggle = {false}
                    formatValues = {(values, total) => `${(values).toFixed(0)} days`}
                    
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 10
                    },
                    {
                        label: 'Used',
                        value: 0,
                        isEmpty: true
                    }]} 
                />
            </section>
            
        </div>
    );
}

export default Donut_Chart