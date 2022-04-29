import './App.css';
import Login from './pages/login';
import EmployerNav from './components/employerNav';
import EmployeeNav from './components/employeeNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployerHome from './pages/Employer/EmployerHome';
import EmployerLeaveStatus from './pages/Employer/EmployerLeaveStatus';
import EmployerLeaveApply from './pages/Employer/EmployerLeaveApply';
import EmployerClaimStatus from './pages/Employer/EmployerClaimStatus';
import EmployerClaimApply from './pages/Employer/EmployerClaimApply';
import EmployerPayslip from './pages/Employer/EmployerPayslip';
import EmployerApprovalLeave from './pages/Employer/EmployerApprovalLeave';
import EmployerApprovalClaim from './pages/Employer/EmployerApprovalClaim';

import EmployeeHome from './pages/Employee/EmployeeHome';
import EmployeeLeaveStatus from './pages/Employee/EmployeeLeaveStatus';
import EmployeeLeaveApply from './pages/Employee/EmployeeLeaveApply';
import EmployeeClaimStatus from './pages/Employee/EmployeeClaimStatus';
import EmployeeClaimApply from './pages/Employee/EmployeeClaimApply';
import EmployeePayslip from './pages/Employee/EmployeePayslip';


function App() {
  return (
    <>
    <Router>
      <Switch>
        {/* Employer */}
        <Route exact path='/Employer'>
          <EmployerNav current="home"/>
          <EmployerHome />
        </Route>
        <Route exact path="/Employer/Leave/Status">
                <EmployerNav current="Leave"/>
                <EmployerLeaveStatus />
        </Route>
        <Route exact path="/Employer/Leave/Apply">
                <EmployerNav current="Leave"/>
                <EmployerLeaveApply />
        </Route>
        <Route exact path="/Employer/Claim/Status">
                <EmployerNav current="Claim"/>
                <EmployerClaimStatus />
        </Route>
        <Route exact path="/Employer/Claim/Apply">
                <EmployerNav current="Claim"/>
                <EmployerClaimApply />
        </Route>
        <Route exact path="/Employer/Claim/Apply">
                <EmployerNav current="Claim"/>
                <EmployerClaimApply />
        </Route>
        <Route exact path="/Employer/Payslip">
                <EmployerNav current="Payslip"/>
                <EmployerPayslip />
        </Route>
        <Route exact path="/Employer/Approval/Leave">
                <EmployerNav current="Approval"/>
                <EmployerApprovalLeave />
        </Route>
        <Route exact path="/Employer/Approval/Claim">
                <EmployerNav current="Approval"/>
                <EmployerApprovalClaim />
        </Route>

        {/* Employee */}
        <Route exact path='/Employee'>
          <EmployeeNav current="home"/>
          <EmployeeHome />
        </Route>
        <Route exact path="/Employee/Leave/Status">
                <EmployeeNav current="Leave"/>
                <EmployeeLeaveStatus />
        </Route>
        <Route exact path="/Employee/Leave/Apply">
                <EmployeeNav current="Leave"/>
                <EmployeeLeaveApply />
        </Route>
        <Route exact path="/Employee/Claim/Status">
                <EmployeeNav current="Claim"/>
                <EmployeeClaimStatus />
        </Route>
        <Route exact path="/Employee/Claim/Apply">
                <EmployeeNav current="Claim"/>
                <EmployeeClaimApply />
        </Route>
        <Route exact path="/Employee/Claim/Apply">
                <EmployeeNav current="Claim"/>
                <EmployeeClaimApply />
        </Route>
        <Route exact path="/Employee/Payslip">
                <EmployeeNav current="Payslip"/>
                <EmployeePayslip />
        </Route>

        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/Login'>
          <Login />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
