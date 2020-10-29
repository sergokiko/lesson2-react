import React, {Component} from 'react';
import CommentService from "../../services/comment-service";
import SingleComment from "./single-comment";

class AllComments extends Component {
    api = new CommentService()
    state = {comments: []}

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()})
    }

    render() {
        console.log(this.state.comments);
        return (
            <div>
                <h2>Comments:</h2>
                {this.state.comments.map( comment => (<SingleComment comment={comment} key={comment.id}/>))}
            </div>
        );
    }
}

export default AllComments;
