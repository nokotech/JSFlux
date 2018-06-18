import React from 'react'
import { Container } from 'flux/utils';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress'
import _ from 'lodash'

import Sample1Action from '../action/Sample1Action'
import Sample1Store from '../store/Sample1Store'
import styles from './Root.style'

import Header from './header/Header';
import Item from './item/Item';
import Sideber from './sideber/Sideber';

/**
 * View
 */
class Root extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes
        this.tap = this.tap.bind(this)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    static getStores() {
        return [Sample1Store];
    }

    static calculateState(prevState) {
        return {
            sample1Store: Sample1Store.getState(),
        };
    }

    toggleDrawer(side="left", open=false) {
        this.setState({
          [side]: open,
        });
    }

    tap() {
        console.log(`${this.constructor.name} - ${this.tap.name}`)
        Sample1Action.tapButton("aaaaa")
    }

    render() {
        console.log(`${this.constructor.name} - ${this.render.name}`)
        return (
            <React.Fragment>
                <Header toggleDrawer={this.toggleDrawer} />
                <Sideber open={this.state.left} toggleDrawer={this.toggleDrawer} />
                <Grid className={this.classes.container} container spacing={8}>
                    <button onClick={this.tap}>Tap Please!</button>
                    {_.map(this.state.sample1Store.value, (v, i) => {
                        return <Item tap={this.tap} index={i}  key={i}/>
                    })}
                </Grid>
            </React.Fragment>
        )
    }
}

/** make Store. */
export default withStyles(styles)(Container.create(Root))
