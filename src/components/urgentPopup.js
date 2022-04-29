import React, { Component } from 'react';
import '../login_page_style.css';

function UrgentPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='popup-close-btn' onClick={() => props.setTrigger(false)}>Cancel</button>
                <button className='yes-popup-close-btn' onClick={() => props.setTrigger(false)}>Record voice</button>
                { props.children }
            </div>
        </div>
    ):"";
}

export default UrgentPopup;