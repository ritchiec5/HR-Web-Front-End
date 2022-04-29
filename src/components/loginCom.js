import React, { Component } from 'react';
import '../login_page_style.css';
import {Link} from "react-router-dom";

class LoginCom extends Component {
    render() { 
        return <div>
        <div className='border'class="container-sm border"  >
            <center>
            <h1 className="login">HR APPLICATION</h1>
                <div class='mb-3 mt-3'>
                    <input type='text' className='input' placeholder=' User ID' ></input>
                </div>
                <div>
                    <input className='input' placeholder=' Password'></input>
                    <br/><label style={{fontSize:'14px', fontFamily:'Roboto', color:'#C5C5C5'}}>Forget Password?</label>
                </div>
                <div>

                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" id="check1" name="option1"  ></input>
                        Remember Me
                    </label>
                </div>
                <div>
                   <button className="loginButton"><Link to='/Employer'>Employer</Link></button>
                   <button className="loginButton"><Link to='/Employee'>Employeee</Link></button>
                </div>
                </center>
            </div>
        </div>
    }
}
 
export default LoginCom;