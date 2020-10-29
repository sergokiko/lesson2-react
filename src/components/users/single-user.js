import React, {Component} from 'react';

class SingleUser extends Component {

    render() {
        const user = this.props.user
        return (
            <div className='card'>
                {user.id} - {user.name} - {user.username} - {user.email}
            </div>
        );
    }
}

export default SingleUser;
