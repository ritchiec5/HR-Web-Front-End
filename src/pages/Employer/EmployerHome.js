import React, { Component } from 'react';
import '../../Styles.css';
import { Alert } from 'antd';
import 'antd/dist/antd.css';
import Calendar from '../../components/mini_calendar';
import Attendance from '../../assets/attendance.png';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function EmployerHome (){
    return(
        <>
        <div className='home'>
            <div>
                <h1 className='homepage-main-text '>Welcome Back!</h1>
                <h3 className='homepage-sub-text '>Have a nice day at work!</h3>
                <Alert
                    message="Urgent Leave"
                    description="Elon John has taken urgent leave"
                    type="error"
                    closable
                />
            </div>

            <div className="features">

                <Stack direction="column">
                    <div className='top'>
                        <Stack direction="row" spacing={3}>
                            <div className='left-column'>

                                <div className='homepage-div'>
                                    <p className='homepage-div-text'>L E A V E</p>
                                    <div className='homepage-div-details'>
                                        <h3 style={{ fontFamily: "Playfair Display" }}>Pending: 1 | Approved: 2 | Reject: 0 </h3>
                                    </div>
                                    <div className='homepage-div-btn'>
                                        <Stack direction="column" spacing={1}>
                                            <Button 
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#ffbb62", 
                                                    '&:hover': {
                                                        backgroundColor: '#ffeacf',
                                                        color: '#ffbb62',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                href='/Employer/Leave/Status'
                                                >
                                                S T A T U S
                                            </Button>
                                            <Button 
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#ff857a", 
                                                    '&:hover': {
                                                        backgroundColor: '#ffd6d2',
                                                        color: '#ff857a',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                href='/Employer/Leave/Apply'
                                                >
                                                A P P L Y
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>

                                <div className='homepage-div'>
                                    <p className='homepage-div-text'>C L A I M</p>
                                    <div className='homepage-div-details'>
                                        <h3 style={{ fontFamily: "Playfair Display" }}>Pending: 1 | Approved: 1 | Reject: 1 </h3>
                                    </div>
                                    <div className='homepage-div-btn'>
                                        <Stack direction="column" spacing={1}>
                                            <Button 
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#ffbb62", 
                                                    '&:hover': {
                                                        backgroundColor: '#ffeacf',
                                                        color: '#ffbb62',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                href='/Employer/Claim/Status'
                                                >
                                                S T A T U S
                                            </Button>
                                            <Button 
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#ff857a", 
                                                    '&:hover': {
                                                        backgroundColor: '#ffd6d2',
                                                        color: '#ff857a',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                href='/Employer/Claim/Apply'
                                                >
                                                A P P L Y
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div>

                            <div className='middle'>
                                <div className='homepage-smaller-div'>
                                    <p className='homepage-div-text'>P A Y S L I P</p>
                                    <div className='homepage-div-details'>
                                        <h3 style={{ fontFamily: "Playfair Display" }}>Latest Processed Month: December</h3>
                                    </div>
                                    <div className='homepage-div-smaller-btn'>
                                        <Stack direction="column" spacing={1}>
                                            <Button 
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#7f8ae2", 
                                                    '&:hover': {
                                                        backgroundColor: '#bdc4f5',
                                                        color: '#7f8ae2',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                href='/Employer/Payslip'
                                                >
                                                V I E W
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                                <div className='homepage-attendance-div'>
                                    <p className='homepage-div-text'>A T T E N D A N C E</p>
                                    <div className='attendance-table'>
                                        <img src={Attendance}/>
                                    </div>
                                    <div className='homepage-div-smaller-btn'>
                                        <Stack direction="column" spacing={1}>
                                            <Button disabled
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#7f8ae2", 
                                                    '&:hover': {
                                                        backgroundColor: '#bdc4f5',
                                                        color: '#7f8ae2',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                >
                                                V I E W
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div>

                            <div className='right-column'>
                                <div className='homepage-calendar-div'>
                                    <p className='homepage-div-text'>C A L E N D A R</p>
                                    <div className='mini-calendar'>
                                        <Calendar></Calendar>
                                    </div>
                                    <div className='homepage-div-calendar-btn'>
                                        <Stack direction="column" spacing={1}>
                                            <Button disabled
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#7f8ae2", 
                                                    '&:hover': {
                                                        backgroundColor: '#bdc4f5',
                                                        color: '#7f8ae2',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                >
                                                E D I T
                                            </Button>
                                            <Button disabled
                                                sx={{
                                                    width: "auto",
                                                    backgroundColor: "#7f8ae2", 
                                                    '&:hover': {
                                                        backgroundColor: '#bdc4f5',
                                                        color: '#7f8ae2',
                                                    },
                                                    fontFamily: "Gothic A1",
                                                    fontWeight: "Bold"
                                                }}
                                                variant="contained"
                                                >
                                                V I E W
                                            </Button>
                                        </Stack>
                                    </div>
                                </div>
                                
                            </div>
                        </Stack>
                    </div>
                    <div className='bottom'>
                        <div className='homepage-approval-div'>
                            <p className='homepage-div-text'>A P P R O V A L</p>
                            <div className='homepage-div-details'>
                                <h3 style={{ fontFamily: "Playfair Display" }}>Pending Leaves To Approve: 3</h3>
                                <h3 style={{ fontFamily: "Playfair Display" }}>Pending Claims To Approve: 3</h3>
                            </div>
                            <div className='homepage-div-approval-btn'>
                                <Stack direction="column" spacing={1}>
                                    <Button 
                                        sx={{
                                            width: "auto",
                                            backgroundColor: "#b89ac9", 
                                            '&:hover': {
                                                backgroundColor: '#f5e3ff',
                                                color: '#b89ac9',
                                            },
                                            fontFamily: "Gothic A1",
                                            fontWeight: "Bold"
                                        }}
                                        variant="contained"
                                        href="/Employer/Approval/Leave"
                                        >
                                        L E A V E
                                    </Button>
                                    <Button 
                                        sx={{
                                            width: "auto",
                                            backgroundColor: "#b89ac9", 
                                            '&:hover': {
                                                backgroundColor: '#f5e3ff',
                                                color: '#b89ac9',
                                            },
                                            fontFamily: "Gothic A1",
                                            fontWeight: "Bold"
                                        }}
                                        variant="contained"
                                        href="/Employer/Approval/Claim"
                                        >
                                        C L A I M
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
        </>
    );
}

export default EmployerHome;