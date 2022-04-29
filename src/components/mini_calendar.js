import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const events = [
    { 
        id: 1, 
        title: 'event 1', 
        description: "", 
        date: '2021-12-01', 
        color: 'red' 
    },
    { 
        id: 2, 
        title: 'event 2', 
        description: "", 
        date: '2021-12-20', 
        color: 'blue' 
    },
    { 
        id: 3, 
        title: 'event 3', 
        description: "", 
        date: '2021-12-30', 
        color: 'yellow' 
    },
    { 
        id: 4, 
        title: 'event 4', 
        description: "", 
        start: '2021-11-11', 
        end: '2021-11-13', 
        color: 'yellow' 
    },
];

function Mini_Calendar_App(){
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }

    return(
        <div class = 'body'>
            <div id = 'calendar'>
                <Calendar
                    value={dateState}
                    onChange={changeDate}
                />
                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
        </div>
    );
}

export default Mini_Calendar_App

