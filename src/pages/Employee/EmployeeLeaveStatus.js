import React from 'react';
import '../../Styles.css'
import Donut_Chart from '../../components/leave_donut_chart';
import { Popconfirm } from 'antd';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function EmployeeLeaveStatus (){

    const ApproveWhiteDiv1 = () => {
        var elem = document.getElementById("Status-left-div-white-1");
        elem.parentNode.removeChild(elem);
    }

    const ApproveWhiteDiv2 = () => {
        var elem = document.getElementById("Status-left-div-white-2");
        elem.parentNode.removeChild(elem);
    }

    const ApproveWhiteDiv3 = () => {
        var elem = document.getElementById("Status-left-div-white-3");
        elem.parentNode.removeChild(elem);
    }

    return (
        <div className="status-section">
            <h1 className='features-main-text'>LEAVE &nbsp; STATUS</h1>

            <div className="status">
                <Stack direction="row" spacing={1}>
                    <div className="status-left-div">
                        <h2 class="Status-left-div-main-text"> APPLICATION STATUS </h2>
                        
                        <div className="status-left-div-container">
                            <article class="Status-left-div-white" id="Status-left-div-white-1">
                                <h2 class="Status-left-div-mini-text">Start Date: 22 Oct 2020 <br></br>End Date: 23 Oct 2020 <br></br>Leave Type: Annual <br></br>Manager: Alex <br></br>Status: Pending <br></br></h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={ApproveWhiteDiv1}
                                >
                                    <Button 
                                        sx={{
                                            width: 200,
                                            float: "right",
                                            marginTop: 6,
                                            marginRight: 2,
                                            backgroundColor: "#ff857a", 
                                            '&:hover': {
                                                backgroundColor: '#ffd6d2',
                                                color: '#ff857a',
                                            },
                                            fontFamily: "Gothic A1",
                                            fontWeight: "Bold"
                                        }}
                                        variant="contained"
                                        >
                                        C A N C E L
                                    </Button>
                            </Popconfirm>
                            </article>

                            <article class="Status-left-div-white" id="Status-left-div-white-2">
                                <h2 class="Status-left-div-mini-text">Start Date: 19 Oct 2020 <br></br>End Date: 20 Oct 2020 <br></br>Leave Type: Medical <br></br>Reason:Fever <br></br>Manager: Alex <br></br>Status: Approved <br></br></h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={ApproveWhiteDiv2}
                                >
                                    <Button 
                                        sx={{
                                            width: 200,
                                            float: "right",
                                            marginTop: 6,
                                            marginRight: 2,
                                            backgroundColor: "#ff857a", 
                                            '&:hover': {
                                                backgroundColor: '#ffd6d2',
                                                color: '#ff857a',
                                            },
                                            fontFamily: "Gothic A1",
                                            fontWeight: "Bold"
                                        }}
                                        variant="contained"
                                        >
                                        C A N C E L
                                    </Button>
                                </Popconfirm>
                            </article>

                            <article class="Status-left-div-white" id="Status-left-div-white-3">
                                <h2 class="Status-left-div-mini-text">Start Date: 10 Oct 2020 <br></br>End Date: 11 Oct 2020 <br></br>Leave Type: Unpaid <br></br>Manager: Alex <br></br>Status: Approved <br></br></h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={ApproveWhiteDiv3}
                                >
                                    <Button 
                                        sx={{
                                            width: 200,
                                            float: "right",
                                            marginTop: 6,
                                            marginRight: 2,
                                            backgroundColor: "#ff857a", 
                                            '&:hover': {
                                                backgroundColor: '#ffd6d2',
                                                color: '#ff857a',
                                            },
                                            fontFamily: "Gothic A1",
                                            fontWeight: "Bold"
                                        }}
                                        variant="contained"
                                        >
                                        C A N C E L
                                    </Button>
                                </Popconfirm>                
                            </article>
                        </div>
                    </div>
                    <div className="status-right-div">
                        <h2 class="Status-right-div-main-text">LEAVE BALANCE</h2>
                        <div className="status-right-div-donut">
                            <Donut_Chart></Donut_Chart>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default EmployeeLeaveStatus;