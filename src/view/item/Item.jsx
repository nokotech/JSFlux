import React from 'react'
import { Container } from 'flux/utils';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Sample1Action from '../../action/Sample1Action'
import Sample1Store from '../../store/Sample1Store'
import styles from './Item.style'

/**
 * View
 */
class Item extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes
    }

    static getStores() {
        return [Sample1Store];
    }

    static calculateState(prevState) {
        return {
            sample1Store: Sample1Store.getState(),
        };
    }

    render() {
        console.log(`${this.constructor.name} - ${this.render.name}`)
        return (
            <Grid item xs={12}>
                <Paper className={this.classes.paper}>
                    <div>Sample Text.</div>
                    <div className="text">{this.state.sample1Store.value[this.props.index]}</div>
                    <Button variant="outlined" color="secondary" onClick={this.props.tap}>Tap Please!</Button>
                </Paper>
            </Grid>
        )
    }
}

/** make Store. */
export default withStyles(styles)(Container.create(Item))
