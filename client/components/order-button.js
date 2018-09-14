import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class OrderButton extends Component {
    handleClick = async (evt) => {
        evt.preventDefault();
        // checks if logged in 
        // if not logged in user guest user
        // else use users id
        try {
        console.log(this.props.user.id); 
        await axios.post(`/api/orders/${this.props.user.id}`);
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <button onClick={this.handleClick} type="submit">
                buy sock
            </button>
        )
    }
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
