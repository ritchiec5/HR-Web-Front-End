import React from 'react';
import '../calendar_styles.css'
import FullCalendar from '@fullcalendar/react'              // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'         // plugins
import dayGridPlugin from '@fullcalendar/daygrid'           // plugins
import interactionPlugin from '@fullcalendar/interaction'   // plugins
import ReactTooltip from "react-tooltip"                    // tooltip

const events = [
    { 
        id: 1, 
        title: 'Alex Leave', 
        description: "Medical Leave", 
        start: '2021-10-19T10:30:00', 
        color: 'red' 
    },
    { 
        id: 2, 
        title: 'Alex Leave', 
        description: "Unpaid Leave", 
        start: '2021-10-10T10:30:00', 
        color: 'blue' 
    },
    { 
        id: 3, 
        title: 'John Leave', 
        description: "Medical Leave",
        start: '2021-10-19T10:30:00', 
        color: 'red' 
    },
    { 
        id: 4, 
        title: 'Mary Leave', 
        description: "Parental Leave", 
        start: '2021-10-10T10:30:00', 
        color: 'yellow' 
    },
    { 
        id: 5, 
        title: 'John Leave', 
        description: "Annual Leave", 
        start: '2021-11-28T10:30:00', 
        color: 'green' 
    },
    { 
        id: 6, 
        title: 'Mary Leave', 
        description: "Unpaid Leave", 
        start: '2021-11-30T10:30:00', 
        color: 'blue' 
    },
    { 
        id: 7, 
        title: 'Alex Leave', 
        description: "Annual Leave", 
        start: '2021-12-10T10:30:00', 
        color: 'green' 
    },
    { 
        id: 7, 
        title: 'James Leave', 
        description: "Annual Leave", 
        start: '2021-10-30T10:30:00',
        color: 'green' 
    },
    { 
        id: 7, 
        title: 'Company Event', 
        description: "Customer Day Meeting", 
        start: '2021-10-30T10:30:00',
        end: '2021-11-01T11:30:00',
        color: 'purple' 
    },
];

function Calendar_App(){
    return(
        <div class = 'body'>
            <div id = 'calendar'> 
                <ReactTooltip place="top" type="dark" effect="float"/>
                <FullCalendar
                    plugins={[ 
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin
                    ]}

                    initialView = 'dayGridMonth'
                    selectable = {true}
                    aspectRatio = {1.8}
                    contentHeight = {500}
                    
                    headerToolbar={{
                        left: 'title',
                    }}
                    
                    displayEventTime = {false}
                    //eventDisplay = 'list-item' // render events with a dot
                    events={events}

                    eventMouseEnter={(e) => {
                        e.el.setAttribute("data-tip", e.event.extendedProps.description)
                        ReactTooltip.rebuild()
                    }}
                    
                    // eventClick={(e) => 
                    //     alert('Clicked on: ' + e.event.title)
                    // }

                    // dateClick={(e) => 
                    //     alert('Clicked on: ' + e.dateStr)
                    // }
                />
            </div>
        </div>
    );
}

export default Calendar_App

