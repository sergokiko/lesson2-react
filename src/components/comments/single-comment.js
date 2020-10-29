import React, {Component} from 'react';

class SingleComment extends Component {
    render() {
        const comment = this.props.comment;
        return (
            <div className='card'>
              Post Id:  {comment.postId} <br/>
              ID: {comment.id} <br/>
              name: {comment.name} <br/>
              email:{comment.email}<br/>
              body: {comment.body}
            </div>
        );
    }
}

export default SingleComment;
