import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Article extends Component {

    setHTML(html) {
        return {__html: html};
    }
    
    render() {
        const {nid, title, body, changed, comment_count} = this.props;
        return ( 
            (!nid) ? 
            <Col xs={12} sm={6} md={6} lg={4}>
                <p> NO Data for Article </p>                 
            </Col>
            : 
            <Col xs={12} sm={6} md={6} lg={4}>
                <div className="card border-primary mb-3">
                    <div className="card-body">
                        <h4 className="card-title" dangerouslySetInnerHTML={this.setHTML(title)}></h4>
                        <h6 className="card-subtitle text-muted" dangerouslySetInnerHTML={this.setHTML(changed)}></h6>
                        <p className="card-text text-limited" dangerouslySetInnerHTML={this.setHTML(body)}></p>
                        <small dangerouslySetInnerHTML={this.setHTML(comment_count)}></small>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Article;