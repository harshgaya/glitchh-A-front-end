import "./HelpSupport.css"
import SettingsSidebar from "../SettingsSidebar";
const HelpSupport = () => {
    return (<div className="HelpSupport row inSettings">
        <div className="col-3">
            <SettingsSidebar></SettingsSidebar>
        </div>
        <div className="col-8 rightSideSpace HelpSupportSide">
            <div className="card background settingRightside">
                <h3>
                Support
                </h3>

                <h6 className="contactHead">Contact Form</h6>
                <form>
                <div className="row SupportForm">
                        <div className="col-12">
                            <label htmlFor="keywordSupport" className="custom-field-label">Explain your issue in one sentence </label>
                            <input type='text' className='form-control custom-field' id="keywordSupport" />
                        </div>
                    
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="issue" className="custom-field-label">Explain your issue in detail</label>
                            <textarea name="issue" className='form-control custom-field' id="issue" cols="21" rows="8" ></textarea>

                        </div>
                    </div>
                    <div className="buttonHelpSupport">
                    <button className="edit height-but width-full ">Submit</button>

                    </div>
           
                </form>
            </div>
        </div>
    </div>);
}

export default HelpSupport;