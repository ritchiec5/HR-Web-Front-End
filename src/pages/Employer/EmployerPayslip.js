import React, { useState } from 'react';
//import { Dropdown } from "react-bootstrap";
import { Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// mui dropdown
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import "bootstrap/dist/css/bootstrap.min.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//DB
const Oct21 = {
  month: "October 21",
  file: "http://localhost:3000/alex_oct21_payslip.pdf",
};
const Nov21 = {
  month: "November 21",
  file: "http://localhost:3000/alex_nov21_payslip.pdf",
};
const Dec21 = {
  month: "December 21",
  file: "http://localhost:3000/alex_dec21_payslip.pdf",
};
const none = {
  month: "P A Y S L I P",
  file: "",
};

class EmployerPayslip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paySlip: none, numPages: null, pageNumber: 1 };
    this.setMonth = this.setMonth.bind(this);
  }

  setMonth(event) {
    if (event.target.value == "1") {
      this.setState({ paySlip: Oct21 });
    } else if (event.target.value == "2") {
      this.setState({ paySlip: Nov21 });
    } else if (event.target.value == "3") {
      this.setState({ paySlip: Dec21 });
    }else{
      this.setState({ paySlip: none });
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {

    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div className='payslip-top'>
          <Stack direction="row" spacing={24}>
            <div className='payslip-dropdown'>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="month-dropdown" 
                  sx={{
                      fontFamily: "Gothic A1"
                  }}
                >
                  Month
                </InputLabel>
                <Select
                  labelId="month-dropdown"
                  id="month-dropdown-select"
                  onChange={this.setMonth}
                  label="Month"
                  sx={{
                      backgroundColor: "#ffffff"
                  }}
                >
                  <MenuItem value="" sx={{fontFamily: "Gothic A1"}}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1" sx={{fontFamily: "Gothic A1"}}>Oct 21</MenuItem>
                  <MenuItem value="2" sx={{fontFamily: "Gothic A1"}}>Nov 21</MenuItem>
                  <MenuItem value="3" sx={{fontFamily: "Gothic A1"}}>Dec 21</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="payslipheader">
              {" "}
              {this.state.paySlip.month}
            </div>
            <div className='download'>
              <Button
                sx={{
                    width: 200,
                    height: 50,
                    backgroundColor: "#7f8ae2", 
                    '&:hover': {
                        backgroundColor: '#bdc4f5',
                        color: '#7f8ae2',
                    },
                    fontFamily: "Gothic A1",
                    fontWeight: "Bold"
                }}
                variant="contained"
                href={this.state.paySlip.file}
                download={this.state.paySlip.month}
                >
                D O W N L O A D
              </Button>
            </div>
          </Stack>
        </div>
        <div className="payslipbox-container">
          <div className="payslipbox">
            <Document
              file={this.state.paySlip.file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              noData="Please select a month"
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployerPayslip;
