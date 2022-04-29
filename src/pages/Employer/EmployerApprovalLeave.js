import React, { useEffect } from 'react';
import Calendar from '../../components/calendar';
import { CheckCircleFilled } from '@ant-design/icons'
import { CloseCircleFilled } from '@ant-design/icons'
import '../../Styles.css'
import { Popconfirm } from 'antd';
import { Popover } from 'antd';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// mui icons
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const acceptcontent = (
    <div>
        <p>Recommended to approve leave</p>
        <p>Leave does not overlap with any company events</p>
        <p>Leave does not overlap with team member leaves</p>
        <p>Leave within threshold of amount of people on leave</p>
    </div>
);

const rejectcontent = (
    <div>
        <p>Recommended to reject leave</p>
        <p>Leave overlaps with company event</p>
    </div>
);

function EmployerApprovalLeave (){

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

    const RejectWhiteDiv1 = () => {
        var elem = document.getElementById("Leave-Reject1").style.display = "block";
    }

    const RejectWhiteDiv2 = () => {
        var elem = document.getElementById("Leave-Reject2").style.display = "block";
    }

    const RejectWhiteDiv3 = () => {
        var elem = document.getElementById("Leave-Reject3").style.display = "block";
    }

    const Submit1 = () => {
        var elem1 = document.getElementById("Leave-Reject1").style.display = "none";
        var elem = document.getElementById("Status-left-div-white-1");
        elem.parentNode.removeChild(elem);
    }

    const Submit2 = () => {
        var elem1 = document.getElementById("Leave-Reject2").style.display = "none";
        var elem = document.getElementById("Status-left-div-white-2");
        elem.parentNode.removeChild(elem);
    }

    const Submit3 = () => {
        var elem1 = document.getElementById("Leave-Reject3").style.display = "none";
        var elem = document.getElementById("Status-left-div-white-3");
        elem.parentNode.removeChild(elem);
    }

    return (
        <div>
            <section class="Leave-Manage-div-rejection" id="Leave-Reject1">
                <article class="Leave-Manage-div-rejection-dark-div">
                    <h1 class="Leave-Manage-div-rejection-main-text">Reason of rejection:</h1>
                    <textarea class="Leave-Manage-div-rejection-dark-div-textarea"></textarea>
                    <Button 
                        sx={{
                            width: 300,
                            marginLeft: 30,
                            marginTop: 3.5,
                            backgroundColor: "#7f8ae2", 
                            '&:hover': {
                                backgroundColor: '#bdc4f5',
                                color: '#7f8ae2',
                            },
                            fontFamily: "Gothic A1",
                            fontWeight: "Bold"
                        }}
                        variant="contained"
                        onClick={Submit1}
                        >
                        S U B M I T
                    </Button>
                </article>
            </section>

            <section class="Leave-Manage-div-rejection" id="Leave-Reject2">
                <article class="Leave-Manage-div-rejection-dark-div">
                    <h1 class="Leave-Manage-div-rejection-main-text">Reason of rejection:</h1>
                    <textarea class="Leave-Manage-div-rejection-dark-div-textarea"></textarea>
                    <Button 
                        sx={{
                            width: 300,
                            marginLeft: 30,
                            marginTop: 3.5,
                            backgroundColor: "#7f8ae2", 
                            '&:hover': {
                                backgroundColor: '#bdc4f5',
                                color: '#7f8ae2',
                            },
                            fontFamily: "Gothic A1",
                            fontWeight: "Bold"
                        }}
                        variant="contained"
                        onClick={Submit2}
                        >
                        S U B M I T
                    </Button>
                </article>
            </section>

            <section class="Leave-Manage-div-rejection" id="Leave-Reject3">
                <article class="Leave-Manage-div-rejection-dark-div">
                    <h1 class="Leave-Manage-div-rejection-main-text">Reason of rejection:</h1>
                    <textarea class="Leave-Manage-div-rejection-dark-div-textarea"></textarea>
                    <Button 
                        sx={{
                            width: 300,
                            marginLeft: 30,
                            marginTop: 3.5,
                            backgroundColor: "#7f8ae2", 
                            '&:hover': {
                                backgroundColor: '#bdc4f5',
                                color: '#7f8ae2',
                            },
                            fontFamily: "Gothic A1",
                            fontWeight: "Bold"
                        }}
                        variant="contained"
                        onClick={Submit3}
                        >
                        S U B M I T
                    </Button>
                </article>
            </section>

            <div className="apply-status">
                <h1 className='features-main-text'>LEAVE &nbsp; APPROVAL</h1> 

                <Stack direction="row" spacing={3}>
                    <section class="Leave-Manage-div-left">

                        <div className="status-left-div">
                            <h2 class="Status-left-div-main-text"> REQUEST </h2>
                            
                            <div className="approval-status-left-div-container">
                                <article class="Status-left-div-white" id="Status-left-div-white-1">
                                    <h2 class="Status-left-div-mini-text">Name: Peter <br></br> Start Date: 1 Oct 2021 <br></br>End Date: 2 Oct 2021 <br></br>Leave Type: Annual </h2>
                                    <Popover content={acceptcontent} title="Accept Leave">
                                        <Button 
                                            sx={{
                                                width: "auto",
                                                backgroundColor: "#52da96", 
                                                '&:hover': {
                                                    backgroundColor: '#dbffee',
                                                    color: '#52da96',
                                                },
                                                fontFamily: "Gothic A1",
                                                fontWeight: "Bold"
                                            }}
                                            className="help-btn"
                                            variant="contained"
                                            startIcon={<HelpCenterIcon />}
                                            >
                                            R E C O M M E N D E D
                                        </Button>
                                    </Popover>
                                    
                                    <div className="approve-btns">
                                        <Stack direction="column" spacing={1}>
                                            <Popconfirm
                                                title="Approve this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={ApproveWhiteDiv1}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
                                                        backgroundColor: "#52da96", 
                                                        '&:hover': {
                                                            backgroundColor: '#dbffee',
                                                            color: '#52da96',
                                                        },
                                                        fontFamily: "Gothic A1",
                                                        fontWeight: "Bold"
                                                    }}
                                                    variant="contained"
                                                    >
                                                    A C C E P T
                                                </Button>
                                            </Popconfirm>
                                            <Popconfirm
                                                title="Reject this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={RejectWhiteDiv1}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
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
                                                    R E J E C T
                                                </Button>
                                            </Popconfirm>
                                        </Stack>
                                    </div>

                                </article>

                                <article class="Status-left-div-white" id="Status-left-div-white-2">
                                    <h2 class="Status-left-div-mini-text">Name: John <br></br> Start Date: 20 Oct 2021 <br></br>End Date: 31 Oct 2021 <br></br>Leave Type: Medical <br></br>Reason: Fever </h2>
                                    <Popover content={acceptcontent} title="Accept Leave">
                                        <Button 
                                            sx={{
                                                width: "auto",
                                                backgroundColor: "#52da96", 
                                                '&:hover': {
                                                    backgroundColor: '#dbffee',
                                                    color: '#52da96',
                                                },
                                                fontFamily: "Gothic A1",
                                                fontWeight: "Bold"
                                            }}
                                            className="help-btn"
                                            variant="contained"
                                            startIcon={<HelpCenterIcon />}
                                            >
                                            R E C O M M E N D E D
                                        </Button>
                                    </Popover>

                                    <div className="approve-btns">
                                        <Stack direction="column" spacing={1}>
                                            <Popconfirm
                                                title="Approve this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={ApproveWhiteDiv2}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
                                                        backgroundColor: "#52da96", 
                                                        '&:hover': {
                                                            backgroundColor: '#dbffee',
                                                            color: '#52da96',
                                                        },
                                                        fontFamily: "Gothic A1",
                                                        fontWeight: "Bold"
                                                    }}
                                                    variant="contained"
                                                    >
                                                    A C C E P T
                                                </Button>
                                            </Popconfirm>
                                            <Popconfirm
                                                title="Reject this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={RejectWhiteDiv2}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
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
                                                    R E J E C T
                                                </Button>
                                            </Popconfirm>
                                        </Stack>
                                    </div>

                                </article>

                                <article class="Status-left-div-white" id="Status-left-div-white-3">
                                    <h2 class="Status-left-div-mini-text">Name: Elon <br></br> Start Date: 30 Oct 2021 <br></br>End Date: 31 Oct 2021 <br></br>Leave Type: Unpaid </h2>
                                    <Popover content={rejectcontent} title="Reject Leave">
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
                                            className="help-btn"
                                            variant="contained"
                                            startIcon={<HelpCenterIcon />}
                                            >
                                            {/* R E J E C T */}
                                            N O T &nbsp; R E C O M M E N D E D
                                        </Button>
                                    </Popover>

                                    <div className="approve-btns">
                                        <Stack direction="column" spacing={1}>
                                            <Popconfirm
                                                title="Approve this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={ApproveWhiteDiv3}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
                                                        backgroundColor: "#52da96", 
                                                        '&:hover': {
                                                            backgroundColor: '#dbffee',
                                                            color: '#52da96',
                                                        },
                                                        fontFamily: "Gothic A1",
                                                        fontWeight: "Bold"
                                                    }}
                                                    variant="contained"
                                                    >
                                                    A C C E P T
                                                </Button>
                                            </Popconfirm>
                                            <Popconfirm
                                                title="Reject this leave?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={RejectWhiteDiv3}
                                            >
                                                <Button 
                                                    sx={{
                                                        width: 200,
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
                                                    R E J E C T
                                                </Button>
                                            </Popconfirm>
                                        </Stack>
                                    </div>

                                </article>
                            </div>
                        </div>
                    </section>

                    <section class="Leave-Manage-div-right">
                        <Stack direction="column" spacing={0.5}>
                            <Calendar></Calendar>
                            <div className="legend-container">
                                <div class='my-legend'>
                                    <div class='legend-title'>Legend</div>
                                    <div class='legend-scale'>
                                        <ul class='legend-labels'>
                                            <li><span style={{background: "green"}}></span>Annual Leave</li>
                                            <li><span style={{background: "red"}}></span>Medical Leave</li>
                                            <li><span style={{background: "blue"}}></span>Unpaid Leave</li>
                                            <li><span style={{background: "yellow"}}></span>Parental Leave</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </section>
                </Stack>
            </div>
        </div>
    );
};

export default EmployerApprovalLeave;