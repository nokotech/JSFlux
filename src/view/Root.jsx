import React from 'react'
import { Container } from 'flux/utils';

import Sample1Action from '../action/Sample1Action'
import Sample1Store from '../store/Sample1Store'

/**
 * View
 */
export default class Root extends React.Component {

    constructor(props) {
        super(props)
        this.tap = this.tap.bind(this)
    }

    static getStores() {
        return [Sample1Store];
    }

    static calculateState(prevState) {
        return {
            sample1Store: Sample1Store.getState(),
        };
    }

    tap() {
        Sample1Action.test("aaaaa")
    }

    render() {
        return (
            <React.Fragment>
                <div>Sample Text.</div>
                <button onClick={this.tap}>Tap Please!</button>
            </React.Fragment>
        )
    }
}

/** make Store. */
const container = Container.create(Root);
