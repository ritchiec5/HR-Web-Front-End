import React from 'react';
import Calendar from '../../components/calendar';
import '../../Styles.css'
import "antd/dist/antd.css";
import { DatePicker } from 'antd';
import { Select, message } from 'antd';
import { Popconfirm } from 'antd';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;
const delay = ms => new Promise(res => setTimeout(res, ms));

class EmployerLeaveApply extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            Leavetype: "",
            Date: "",
            Reason: "",
            Manager: "",
        }
    }

    handleInputLeave(value) {
        this.setState({
            Leavetype: value
        });
    }

    handleInputReason(event) {
        console.log(event.target.value);
        var text = event.target.value;
        if (text){
            this.setState({
                Reason: event.target.value
            });
        }
    }

    handleInputManager(value) {
        this.setState({
            Manager: value
        });
    }

    handleButtonClick(event) {
        var Leavetype = this.state.Leavetype;
        var Date = this.state.Date;
        var Reason = this.state.Reason;
        var Manager = this.state.Manager;

        if (Leavetype == "") {
            event.preventDefault();
            message.error(
                {content: "Leave type not chosen"
                ,style:{
                    marginTop: "10vh",
                    background: "lightgray",
                    inlineSize: "100vw"
                }
            }, 10);
        }
        else if (Reason == "") {
            event.preventDefault();
            message.error(
                {
                    content: "Reason is missing"
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

        else {
            message.success(
                {
                    content: "Leave Submitted Successfully"
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

                <h1 className='features-main-text'>LEAVE</h1>
                <Stack direction="row" spacing={3}> 
                    <section class="Leave-Manage-div-left">
                        <h2 class="apply-status-left-div-main-text"> APPLY &nbsp; LEAVE</h2>
                        
                        <article class="Apply-Forms">
                            <form id="claimform1">
                                <label class="Apply-labels">Type: &nbsp;</label>
                                <Select
                                    style={{ width: 200 }}
                                    placeholder=""
                                    name="Leavetype"
                                    onChange={this.handleInputLeave.bind(this)}
                                >
                                    <option value="Annual">Annual</option>
                                    <option value="Sick">Sick</option>
                                    <option value="Unpaid">Unpaid</option>
                                    <option value="Parental">Parental</option>
                                </Select>
                                <br></br>

                                <label class="Apply-labels">Date: &nbsp;</label>
                                <RangePicker
                                    // defaultValue={[moment('2021/11/12', dateFormat), moment('2021/11/12', dateFormat)]}
                                    format={dateFormat}
                                />
                                <br></br>

                                <label class="Apply-labels">Reason:</label>
                                <br></br>
                                <textarea
                                    class="Apply-Text"
                                    name="Reason"
                                    onChange={this.handleInputReason.bind(this)}
                                    value={this.state.Reason}
                                />
                                <br></br>

                                <label class="Apply-labels">Manager: &nbsp;</label>
                                <Select
                                    style={{ width: 200 }}
                                    placeholder=""
                                    name="Manager"
                                    onChange={this.handleInputManager.bind(this)}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>

                                <br></br>
                                
                                <div className="apply-btn">
                                    <Popconfirm
                                        title="Are you sure you want to submit this form?"
                                        okText="Yes"
                                        cancelText="No"
                                        onConfirm={this.handleButtonClick.bind(this)}
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
        );
    }

};

export default EmployerLeaveApply;