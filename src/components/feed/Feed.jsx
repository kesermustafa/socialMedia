import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from "../../dummyData.js"


const Feed = () => {
    return (
        <div className="feed">
            <div className="FeedWrapper">
                <Share/>


                {Posts && Posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}


            </div>
        </div>
    );
};

export default Feed;
