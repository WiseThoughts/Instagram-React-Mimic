import { FaRegComment, FaRegPaperPlane, FaRegHeart } from "react-icons/fa";

const Posts = ({ author, url }) => {
    return (
    <div className="coloumn2">
        <h4>{author}</h4>
        <img className="imgFeed" src={url} alt={"pulled from Lorem Picsum"} />
        <div className="feedIcons">
        <FaRegHeart className="feedIcons"/>
        <FaRegComment className="feedIcons"/>
        <FaRegPaperPlane className="feedIcons"/>
        </div>
        
    </div>
    );
};

export default Posts;