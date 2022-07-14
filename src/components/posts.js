import { FaRegComment, FaRegPaperPlane, FaRegHeart } from "react-icons/fa";
import { faker } from '@faker-js/faker';


const Posts = ({ author, url }) => {

    const words = faker.random.words(25)

    return (
    <div className="coloumn2 postBox">
        <h4 className="author">{author}</h4>
        <img className="imgFeed" src={url} alt={"pulled from Lorem Picsum"} />
        <div className="feedIconsLeft">
        <FaRegHeart className="feedIcons"/>
        <FaRegComment className="feedIcons"/>
        <FaRegPaperPlane className="feedIcons"/>
        </div>
        <div className="words">
            <p className="coloumn">{words}</p>
        </div>
    </div>
    );
};

export default Posts;