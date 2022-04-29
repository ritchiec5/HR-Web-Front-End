import React, { useEffect } from 'react';
import Donut_Chart from '../../components/donut_chart';
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
        <p>Recommended to check the reciept and approve</p>
        <p>Claim is within claim request budget</p>
    </div>
);

const rejectcontent = (
    <div>
        <p>Recommended to reject claim</p>
        <p>Claim is not within claim request budget</p>
    </div>
);

function EmployerApprovalClaim (){
    
    const ApproveWhiteDiv1 = () => {
        var elem = document.getElementById("Claim-Manage-div-white1");
        elem.parentNode.removeChild(elem);
    }

    const ApproveWhiteDiv2 = () => {
        var elem = document.getElementById("Claim-Manage-div-white2");
        elem.parentNode.removeChild(elem);
    }

    const ApproveWhiteDiv3 = () => {
        var elem = document.getElementById("Claim-Manage-div-white3");
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
        var elem = document.getElementById("Claim-Manage-div-white1");
        try
        {elem.parentNode.removeChild(elem);}
        catch(e){}
    }

    const Submit2 = () => {
        var elem1 = document.getElementById("Leave-Reject2").style.display = "none";
        var elem = document.getElementById("Claim-Manage-div-white2");
        elem.parentNode.removeChild(elem);
    }

    const Submit3 = () => {
        var elem1 = document.getElementById("Leave-Reject3").style.display = "none";
        var elem = document.getElementById("Claim-Manage-div-white3");
        elem.parentNode.removeChild(elem);
    }

    const buttonClick = (event) =>  {
        try{
            var ID = event.target.id
            console.log(ID)
            if (ID == "Claim-Details-text1"){
                document.getElementById("Claim-Details1").innerHTML = document.getElementById("Claim-Details-text1").innerHTML;
                document.getElementById("Claim-Details2").style.display = "block";
            }
            else if (ID == "Claim-Details-text2") {
                document.getElementById("Claim-Details1").innerHTML = document.getElementById("Claim-Details-text2").innerHTML;
                document.getElementById("Claim-Details2").style.display = "block";
            }
            else if (ID == "Claim-Details-text3") {
                document.getElementById("Claim-Details1").innerHTML = document.getElementById("Claim-Details-text3").innerHTML;
                document.getElementById("Claim-Details2").style.display = "block";
            }
            // document.getElementById(when "Claim-Details").textContent = document.getElementById(event.target.id);
        }
        catch (e){}
    }

    return(
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

            <div className="claim-approve-status">
                <h1 className='features-main-text'>CLAIM &nbsp; APPROVAL</h1>

                <Stack direction="row" spacing={3}>
                    <section class="Claim-Manage-div-left">

                        <div className="status-left-div">
                            <h2 class="Status-left-div-main-text"> REQUEST </h2>
                            
                            <div className="approval-status-left-div-container">
                                <article class="Status-left-div-white" id="Claim-Manage-div-white1" onClick={(e) => buttonClick(e)}>
                                    <h2 class="Status-left-div-mini-text" id="Claim-Details-text1">Name: Peter <br></br>Claim Date: 1 Oct 2020 <br></br>Claim Type: Oversea<br></br>Amount: $20<br></br>Document: <u><a id="Receipts" href="http://localhost:3000/Claim1.png" target="_blank">Claim.pdf</a></u></h2>
                                    <Popover content={acceptcontent} title="Accept Claim">
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

                                <article class="Status-left-div-white" id="Claim-Manage-div-white2" onClick={(e) => buttonClick(e)}>
                                    <h2 class="Status-left-div-mini-text" id="Claim-Details-text2">Name: John <br></br>Claim Date: 5 Oct 2020 <br></br>Claim Type: Medical<br></br>Amount: $150<br></br>Document: <u><a id="Receipts" href="http://localhost:3000/Claim2.png" target="_blank">Claim.pdf</a></u></h2>
                                    <Popover content={rejectcontent} title="Accept Claim">
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

                                <article class="Status-left-div-white" id="Claim-Manage-div-white3" onClick={(e) => buttonClick(e)}>
                                    <h2 class="Status-left-div-mini-text" id="Claim-Details-text3">Name: Elon <br></br>Claim Date: 2 Oct 2020 <br></br>Claim Type: Business<br></br>Amount: $100<br></br>Document: <u><a id="Receipts" href="http://localhost:3000/Claim3.png" target="_blank">Claim.pdf</a></u></h2>
                                    <Popover content={rejectcontent} title="Reject Claim">
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

                    <section class="Claim-Manage-div-right">
                        <h2 class="Status-right-div-main-text">PROFILE</h2>
                        <Stack direction="column" spacing={1}>
                            <div className="claim-detail-container">
                                <h2 id="Claim-Details1" class="Claim-Detail"></h2>
                            </div>
                            <div className="Claim-Manage-div-right-donut">
                                <div className="Claim-Manage-div-donut">
                                    <Donut_Chart></Donut_Chart>
                                </div>
                            </div>
                        </Stack>
                    </section>
                </Stack>
            </div>
        </div>
    );
}

export default EmployerApprovalClaim;