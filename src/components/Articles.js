import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import uniqid from 'uniqid';
import Article from './Article';
import { Row, Col, Grid } from 'react-bootstrap';

class Articles extends Component {
    state = {
        articles: [],
        error: false
    }
       
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_ARTICLES_URL, {
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
            this.setState({articles: response.data, error: false});

        })
        .catch((error) => {
            console.log(error);
            this.setState({articles: [], error: true});
        });
    }
    
    getData() {
            axios.get(process.env.REACT_APP_API_ARTICLES_URL, {
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
            .then(function(response) {
                console.log(response);

            })
            .catch(function(error) {
                console.log(error);
            });


    }

    /*
        <div className = "container">
            { _.map(articles, article => <Article key={uniqid()} {...article} />) }   
        </div>
    */
    render() {
        const { articles } = this.state;
        return ( 
            (!articles) ? 
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <p> NO ARTICLES </p>        
                    </Col>
                </Row>      
            </Grid>
            : 
            <Grid fluid>
                <Row>
                    { _.map(articles, article => <Article key={uniqid()} {...article} />) }                       
                </Row>      
            </Grid>    
        );
    }
}

export default Articles;