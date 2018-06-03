import React, { Component } from 'react'

/**
 * View
 */
export default class ListView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <image className="list_img" src={this.props.imageUrl}></image>
                <span className="list_test">{this.props.text}</span>
            </div>
        )
    }
}