import React, { Component } from 'react';
import { Input } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class UploadButton extends Component {

    state = {

        // Initially, no file is selected
        selectedFile: null
    };

    Upload = () => {
        var elem = document.getElementById("Apply-input").placeholder = "Claim.pdf";
    }

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        
        if (this.state.selectedFile) {
            var elem = document.getElementById("Apply-input").placeholder = this.state.selectedFile.name;
        }
    };

    render() {

        return (
            <div>
                <form>
                    <Input id="Apply-input" disabled style={{ height: 33, color: 'lightgray', marginLeft: -5}} placeholder="" />
                    <div class="uploadbuttondiv">
                        <label for="file-upload" class="uploadbutton2">
                            <UploadOutlined/>
                        </label>
                        <input id="file-upload" type="file" onChange={this.onFileChange} class="uploadbutton2" />
                    </div>
                    {this.fileData()}
                </form>
            </div>
        );
    }
}

export default UploadButton;
