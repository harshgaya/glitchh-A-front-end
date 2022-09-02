import "./PostView.css"
import postIcon from "./../../assets/images/post-icon.png"
import byteIcon from "./../../assets/images/bytes-icon.png"
import PostInProfile from "./PostinProfile"
const PostView = () => {
    return (
        <div className="alignment">
            <div className="row">
                <div className="col-6">
                <img src={postIcon} alt="" />
                <div className="selected"></div>
                </div>
                <div className="col-6">
                <img src={byteIcon} alt="" />
                {/* <div className="selected"></div> */}
                </div>
            </div>
            <hr className="hrline" />
           
            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>
            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>
            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>
            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>
            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>

            <div className="row content-post">
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
                <div className="col-4"><PostInProfile /></div>
            </div>
        </div>


    );
}

export default PostView;