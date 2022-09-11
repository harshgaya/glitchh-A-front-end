import "./notifiFin.css"
import NotifiItem from "./noti";
const NotificationFinal = () => {
    return ( <div className="container">
        <div className="card background notiCard">
            <h3 className="notiHead">Notifications</h3>
            <hr className="notiHr"/>
            <h6 className='notiSub'>Recent</h6>
            <div className="itemNoti">
                <div>
                <NotifiItem active="true"></NotifiItem>
                </div>
                <div>
                <NotifiItem active="false"></NotifiItem>

                </div>
            </div>
            <h6 className='notiSub'>Yesterday</h6>
            <div className="itemNoti">
                <div>
                <NotifiItem active="false"></NotifiItem>
                </div>
                <div>
                <NotifiItem active="false"></NotifiItem>

                </div>
            </div>
        </div>
    </div> );
}
 
export default NotificationFinal;