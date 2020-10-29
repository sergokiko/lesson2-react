import React, {Component} from 'react';
import UserService from "../../services/user-service";
import SingleUser from "./single-user";


class AllUsers extends Component {
    api = new UserService();

    state = {users: []}

    async componentDidMount(){
        this.setState({users: await this.api.getUsers()})
    }

    render() {

        return (
            <div>
                <h2>Users:</h2>
                {
                    this.state.users.map(user => (<SingleUser user={user} key={user.id}/>))
                }
            </div>
        );
    }
}

export default AllUsers;
