import React from 'react';
import Donut_Chart from '../../components/donut_chart';
import '../../Styles.css'
import UploadButton from '../../components/upload.js'
import { Select } from 'antd';
import { InputNumber, message } from 'antd';
import { Popconfirm } from 'antd';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const delay = ms => new Promise(res => setTimeout(res, ms));

class EmployeeClaimApply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Claimtype: "",
            Amount: "",
            Doc_name: "",
            Manager: "",
        }
        this.handleInputClaim = this.handleInputClaim.bind(this);
        this.handleInputAmount = this.handleInputAmount.bind(this);
        this.handleInputManager = this.handleInputManager.bind(this);
    }

    confirm(e) {
    console.log(e);
    message.success('Click on Yes');
    }

    cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    handleInputClaim(value) {
        this.setState({
            Claimtype: value
        });
    }

    handleInputAmount(value) {
        this.setState({
            Amount: value
        });
    }

    handleInputManager(value) {
        this.setState({
            Manager: value
        });
    }

    handleButtonClicked(event) {
        var Claimtype = this.state.Claimtype;
        var Amount = this.state.Amount;
        var Doc_name = this.state.Doc_name;
        var Manager = this.state.Manager;
        
        if (Claimtype == ""){
            event.preventDefault();
            message.error(
                {
                    content: "Claim type not chosen"
                    , style: {
                        marginTop: "10vh",
                        background: "lightgray",
                        inlineSize: "100vw"
                    }
                }, 10);
        }
        else if (Amount == ""){
            event.preventDefault();
            message.error(
                {
                    content: "Amount is missing"
                    , style: {
                        marginTop: "10vh",
                        background: "lightgray",
                        inlineSize: "100vw"
                    }
                }, 10);
        }

        else if (Manager == "") {
            event.preventDefault();
            message.error(
                {
                    content: "Manager not chosen"
                    , style: {
                        marginTop: "10vh",
                        background: "lightgray",
                        inlineSize: "100vw"
                    }
                }, 10);
        }
        
        else{
            message.error(
                {
                    content: "Claim Submitted Successfully"
                    , style: {
                        marginTop: "10vh",
                        background: "lightgray",
                        inlineSize: "100vw"
                    }
                }, 10);
        }
            delay(7000);
        }

    render(){
        return (
            <div className="apply-status">

                <h1 className='features-main-text'>CLAIM</h1>
                <div class="claim-container">
                    <Stack direction="row" spacing={3}> 
                        <div class="status-left-div">
                            <h2 class="apply-status-left-div-main-text"> APPLY CLAIM </h2>
                            
                            <div class="form-container">
                                <article class="claim-apply-forms">
                                    <form id="Claimform">
                                        <Stack direction="row" spacing={4}>
                                            <label class="Apply-labels">Claim Types:</label>
                                            <Select 
                                                className="claim-types-select"
                                                name="Claimtype" 
                                                onChange={this.handleInputClaim} 
                                                placeholder={this.state.Claimtype}
                                            >
                                                <option value="Medical">Medical</option>
                                                <option value="Business">Business</option>
                                                <option value="Oversea">Oversea</option>
                                            </Select>
                                        </Stack>

                                        <Stack direction="row" spacing={9}>
                                            <label class="Apply-labels">Amount:</label>
                                            <InputNumber 
                                                className="claim-amount-select"
                                                placeholder="$20" 
                                                name="Amount" 
                                                onChange={this.handleInputAmount}
                                            />
                                        </Stack>  

                                        <Stack direction="row" spacing={2}>
                                            <label class="Apply-labels">Document:</label>
                                            <div class="uploadbutton">
                                                <UploadButton></UploadButton>
                                            </div>
                                        </Stack>

                                        <label class="Apply-labels">Manager:</label>
                                        <Select 
                                            className="claim-manager-select"
                                            name="Manager" 
                                            onChange={this.handleInputManager} 
                                            placeholder={this.state.Manager}
                                        >
                                            <option value="Alex">Alex</option>
                                            <option value="Zhang Yi">Zhang Yi</option>
                                            <option value="Elon Musk">Elon Musk</option>
                                            <option value="Pikachu">Pikachu</option>
                                        </Select>
                                        <br></br>
                                        
                                        <div className="claim-apply-btn">
                                            <Popconfirm
                                                title="Are you sure you want to submit this form?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={this.handleButtonClicked.bind(this)}
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
                                                    href='/Employee/Leave/Apply'
                                                    >
                                                    S U B M I T
                                                </Button>
                                            </Popconfirm>
                                        </div>

                                    </form>
                                </article>
                            </div>
                        </div>

                        <div className="status-right-div">
                            <h2 class="Status-right-div-main-text"> CLAIM PROFILE</h2>
                            <div className="apply-status-right-div-donut">
                                <div className="donut-figure-apply-status">
                                    <Donut_Chart></Donut_Chart>
                                </div>
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
        );
    }

}

export default EmployeeClaimApply;