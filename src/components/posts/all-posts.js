import React, {Component} from 'react';
import PostServise from "../../services/post-servise";
import SinglePost from "./single-post";

class AllPosts extends Component {
    api = new PostServise();

    state = {posts: []}

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()})
    }

    render() {

        return (
            <div>
                <h2>Posts:</h2>
                {
                    this.state.posts.map(post => <SinglePost post={post} key={post.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;
