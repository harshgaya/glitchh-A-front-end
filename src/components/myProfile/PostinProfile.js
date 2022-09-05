import "./PostinProfile.css"

const PostInProfile = (props) => {
    return ( 
        <div className="postinProfile">
            <img src={props.url} alt="" />
        </div>
     );
}
 
export default PostInProfile;