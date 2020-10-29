import React, {Component} from 'react';

class SinglePost extends Component {
    render() {
        const post = this.props.post
        return (
            <div className='card'>
               UserID: {post.userId} <br/>
               postId: {post.id} <br/>
               Post title: {post.title} <br/>
               Post body: {post.body}

            </div>
        );
    }
}

export default SinglePost;
