import "./EditProfile.css"
import SettingsSidebar from "../SettingsSidebar";
// import down from "./../../../assets/images/down.png"
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isPossiblePhoneNumber } from 'react-phone-number-input'
const EditProfile = () => {
    const [value, setValue] = useState()      
    let currentUser = "Arabia"
    let currentName = "Andromoda"
    let currentEmail = "andromoda@aloha.com"
    let currentBio = "I like apex legends, i main wraith."
 


    return (<div className="row inSettings">
        <div className="col-3">
            <SettingsSidebar></SettingsSidebar>
        </div>
        <div className="col-8 rightSideSpace">
            <div className="card background settingRightside">
                <h3>
                    Edit Profile
                </h3>
                <form className="EditForm">
                    <div className="row ">
                        <div className="col-6">
                            <label htmlFor="username" className="custom-field-label">Username</label>
                            <input type='text' className='form-control custom-field' id="username" placeholder={currentUser} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="name" className="custom-field-label">Name</label>
                            <input type='text' className='form-control custom-field' id="name" placeholder={currentName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="Bio" className="custom-field-label">Bio</label>
                            <textarea name="Bio" className='form-control custom-field' id="Bio" cols="21" rows="8" placeholder={currentBio}></textarea>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="email" className="custom-field-label">Email</label>
                            <input type='email' className='form-control custom-field' id="email" placeholder={currentEmail} />
                        </div>
                        <div className="col-6">
                            {/* <label htmlFor="phone" className="custom-field-label">Phone Number</label>
                            <input type='phone' className='form-control custom-field' id="phone" placeholder="123" /> */}
                            <label htmlFor="phone" className="custom-field-label">Phone Number</label>
                            {/* <div className="input-group special">
                                <select className="custom-select custom-field form-control selectPhone" id="inputGroupSelect02">
                                    <option defaultValue>+91 </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="input-group-append NumberPhone">
                                    <input type='number' className='form-control custom-field' id="phone" placeholder={currentEmail} />
                                </div>
                            </div> */}
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} 
                                error={value && isPossiblePhoneNumber(value) ? 'true' : 'false'}
                                />
                             
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="dob" className="custom-field-label">Date of Birth</label>
                            <input type='date' className='form-control custom-field' id="dob" />
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                    {/* game select and primary game
                    submit */}
            <button className="edit height-but width-full">Submit</button>

                </form>
            </div>
        </div>

    </div>);
}

export default EditProfile;