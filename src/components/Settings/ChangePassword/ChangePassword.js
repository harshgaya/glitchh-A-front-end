import "./ChangePassword.css"
import SettingsSidebar from "../SettingsSidebar";
const ChangePassword = () => {
    return ( <div className="ChangePassword row inSettings">
<div className="col-3">
            <SettingsSidebar></SettingsSidebar>
        </div>
        <div className="col-8 rightSideSpace">
        <div className="card background settingRightside">
                <h3>
                    Change Password
                </h3>
                <form>
                <div className="row ">
                        <div className="col-6">
                            <label htmlFor="CurrentPassword" className="custom-field-label">Current Password</label>
                            <input type='text' className='form-control custom-field' id="CurrentPassword" />
                        </div>
                    
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            <label htmlFor="NewPassword" className="custom-field-label">New Password</label>
                            <input type='text' className='form-control custom-field' id="NewPassword" />
                        </div>
                    
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            <label htmlFor="NewConfirmPassword" className="custom-field-label">Confirm Password</label>
                            <input type='text' className='form-control custom-field' id="NewConfirmPassword" />
                        </div>
                    
                    </div>
                    <div className="row buttonRowChange">
                        <div className="col-6">
                            <div className="row pb-0">
                                <div className="col-6">
                                <button className="edit height-but width-full">Submit</button>
                                </div>
                                <div className="col-6">
                                <button className="edit secondaryButton height-but width-full">Forget Password</button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </form>
        </div>
        </div>
    </div> );
}
 
export default ChangePassword;