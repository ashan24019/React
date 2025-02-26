import Post from './Post';
import classes from './PostList.module.css';

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Ashan" body = "Hello Harsha" />
            <Post author="Harsha" body = "Hi Ashan" />
        </ul>
    )
}

export default PostsList;