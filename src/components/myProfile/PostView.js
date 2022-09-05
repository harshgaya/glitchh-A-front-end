import "./PostView.css"
import postIcon from "./../../assets/images/post-icon.png"
import byteIcon from "./../../assets/images/bytes-icon.png"
import PostInProfile from "./PostinProfile"
import post1 from "./../../assets/images/post1.png"
import post2 from "./../../assets/images/post2.png"
import post3 from "./../../assets/images/post3.png"
const PostView = (props) => {
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
                <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>
            <div className="row content-post">
            <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>
            <div className="row content-post">
            <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>
            <div className="row content-post">
            <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>
            <div className="row content-post">
            <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>

            <div className="row content-post">
            <div className="col-4"><PostInProfile url={post1} /></div>
                <div className="col-4"><PostInProfile url={post2} /></div>
                <div className="col-4"><PostInProfile url={post3} /></div>
            </div>
        </div>


    );
}

export default PostView;