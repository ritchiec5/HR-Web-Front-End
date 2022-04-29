import React from 'react';
import Donut_Chart from '../../components/donut_chart';
import '../../Styles.css'
import { Popconfirm } from 'antd';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function EmployeeClaimStatus (){
    const Cancel1 = () => {
        var elem = document.getElementById("Status-left-div-white1");
        elem.parentNode.removeChild(elem);
    }
    const Cancel2 = () => {
        var elem = document.getElementById("Status-left-div-white2");
        elem.parentNode.removeChild(elem);
    }
    const Cancel3 = () => {
        var elem = document.getElementById("Status-left-div-white3");
        elem.parentNode.removeChild(elem);
    }

    return (
        <div className="status-section">
            <h1 className='features-main-text'>CLAIM &nbsp; STATUS</h1>

            <div className="status">
                <Stack direction="row" spacing={1}>
                    <div className="status-left-div">
                        <h2 class="Status-left-div-main-text"> APPLICATION STATUS</h2>
                        
                        <div className="status-left-div-container">
                            <article class="Status-left-div-white" id="Status-left-div-white1">
                                <h2 class="Status-left-div-mini-text" id="Claim-Details-text1">Claim Date: 1 Oct 2020 <br></br>Claim Type: Oversea<br></br>Amount: $20 <br></br>Document: <u> <a id="Receipts" href="http://localhost:3000/Claim1.png" target="_blank">Claim.pdf</a> </u> <br></br>Manager: Alex<br></br>Status: Pending</h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={Cancel1}
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

                            <article class="Status-left-div-white" id="Status-left-div-white2" >
                                <h2 class="Status-left-div-mini-text" id="Claim-Details-text2">Claim Date: 5 Oct 2020 <br></br>Claim Type: Medical<br></br>Amount: $150<br></br>Document: <u> <a id="Receipts" href="http://localhost:3000/Claim2.png" target="_blank">Claim.pdf</a> </u> <br></br>Manager: Alex<br></br>Status: Rejected</h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={Cancel2}
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

                            <article class="Status-left-div-white" id="Status-left-div-white3">
                                <h2 class="Status-left-div-mini-text" id="Claim-Details-text3">Claim Date: 2 Oct 2020 <br></br>Claim Type: Business<br></br>Amount: $100<br></br>Document: <u> <a id="Receipts" href="http://localhost:3000/Claim3.png" target="_blank">Claim.pdf</a> </u> <br></br>Manager: Alex<br></br>Status: Approved</h2>
                                <Popconfirm
                                    title="Are you sure you want cancel this leave?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={Cancel3}
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
                        <h2 class="Status-right-div-main-text"> CLAIM PROFILE</h2>
                        <div className="status-right-div-donut">
                            <Donut_Chart></Donut_Chart>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default EmployeeClaimStatus;