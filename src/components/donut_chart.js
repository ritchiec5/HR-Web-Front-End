import React from 'react';
import '../donut_styles.css'
import DonutChart from 'react-donut-chart';

function Donut_Chart(){
    return(
        <div id = "chart-diagrams">
            <section class = "donutchart1">
                <h3 class="donut-text">BUSINESS</h3>
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
                    formatValues = {(values, total) => `$${(values).toFixed(0)}`}
                    
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 95
                    },
                    {
                        label: 'Used',
                        value: 5,
                        isEmpty: true
                    }]} 
                />
            </section>
        
            <section class = "donutchart2">
                <h3 class="donut-text">OVERSEA</h3>
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
                    formatValues = {(values, total) => `$${(values).toFixed(0)}`}
                    
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 500
                    },
                    {
                        label: 'Used',
                        value: 300,
                        isEmpty: true
                    }]} 
                />
            </section>

            <section class = "donutchart3">
                <h3 class="donut-text">MEDICAL</h3>
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
                    formatValues = {(values, total) => `$${(values).toFixed(0)}`}
                            
                    colors = {['#9c27b0', '#acaaaa']}
                    data={[{
                        label: 'Remaining',
                        value: 300
                    },
                    {
                        label: 'Used',
                        value: 200,
                        isEmpty: true
                    }]} 
                />
            </section>
            
        </div>
    );
}

export default Donut_Chart