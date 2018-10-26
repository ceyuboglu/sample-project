import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers, onSelectUser, getPosts } from "../actions/users";
import PropTypes from 'prop-types';
import UserList from './UserList';
class Usertablecontainer extends Component {
    state = {
        selectedusers:[]
    };
    deletefromarray = (arr,e) => {
        const item = arr.indexOf(e);
        arr.remove(item);
    };
    onSelectRow = (e) => {
        const { selectedusers } = this.state;
        !selectedusers.includes(e)?selectedusers.push(e):this.deletefromarray(selectedusers,e);
        this.props.onSelectUser(selectedusers);
        this.props.getPosts(selectedusers);
    };

    static propTypes = {
        users: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchUsers();
    };
    render() {
        return (
            <div className='Usertablecontainer'>
                <h1 style={{margin:0}}>USER TABLE</h1>
                <hr/>
                <UserList
                    data={this.props.users}
                    onSelectUser={this.props.onSelectUser}
                    getPosts={this.props.getPosts}
                    onselectrow={this.onSelectRow}
                />
            </div>
        );
    }
}
const mapStateToProps = ({users}) => {
    return{
        users
    }
};
const mapDispatchToProps = {
    fetchUsers,
    onSelectUser,
    getPosts
};


export default connect(mapStateToProps,mapDispatchToProps)(Usertablecontainer);
