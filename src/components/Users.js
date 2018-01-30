import React, { Component } from 'react';
import axios from 'axios';

class Pages extends Component {

    state = {
        userdata: [],
        error: false
    }
       
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_USERS_URL, {
            params: {},
            auth: {
                username: process.env.REACT_APP_API_USER,
                password: process.env.REACT_APP_API_PASS
            },
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            this.setState({userdata: response.data, error: false});

        })
        .catch((error) => {
            console.log(error);
            this.setState({userdata: [], error: true});
        });
    }

    render() {
        const { userdata } = this.state;
        return ( 
            (!userdata) ? 
            <div className = "container">
                <p> NO USER </p>                 
            </div>
            : 
            <div className = "container">
                <ul>
                    <li>USER DATA!</li>
                </ul>
            </div>
        );
    }
}

export default Pages;