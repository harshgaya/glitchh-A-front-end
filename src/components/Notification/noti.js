import "./noti.css"
import pic from "./../../assets/images/otherPic.png"
const NotifiItem = (props) => {
    const username = "EpicEby"
    const NotiMsg = "Lorem ipsm lorem ipsm lorem ipsm Lorem ipsm lorem ipsm "
    const time = "10:00pm"
    // 
    return (<div className={(props.active=="true") ? "unreadNoti" : ""}>
        <div className="card background notiSingle">
            <div className="row" style={{"justify-content": "space-between"}}>
                <div className="col-1 notiImg">
                    <img src={pic} alt="" />
                </div>
                <div className="col-9">
                   
                        <div className="col-12">
                            <h6 className="notiUser">{username}</h6>
                        </div>
                        <div className="col-12">
                        <p className="notiMsg">{NotiMsg}</p>
                        </div>
                    
                </div>
                <div className="col-1">
                    <p className="notiTime">{time}</p>
                </div>
            </div>
        </div>
    </div>);
}

export default NotifiItem;