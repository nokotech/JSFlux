import React from 'react'
import { Container } from 'flux/utils';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
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
        this.handleChange = this.handleChange.bind(this);
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

    toggleDrawer(side = "left", open = false) {
        this.setState({
            [side]: open,
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    tap() {
        console.log(`${this.constructor.name} - ${this.tap.name}`)
        Sample1Action.tapAddButton(this.state.value)
        this.setState({ value: "" });
    }

    del(index) {
        console.log(`${this.constructor.name} - ${this.del.name}`)
        Sample1Action.tapDelButton(index)
    }

    render() {
        console.log(`${this.constructor.name} - ${this.render.name}`)
        return (
            <React.Fragment>
                <Header toggleDrawer={this.toggleDrawer} />
                <Sideber open={this.state.left} toggleDrawer={this.toggleDrawer} />
                <Grid className={this.classes.container} container spacing={16}>
                    {_.map(this.state.sample1Store.value, (v, i) => {
                        return <Grid item xs={4} key={i}><Item tap={() => this.del(i)} index={i} /></Grid>
                    })}
                </Grid>
                <Card className={this.classes.card} >
                    <Input className={this.classes.input} placeholder="Text" inputProps={{ 'aria-label': 'Description' }} value={this.state.value || ""} onChange={this.handleChange} />
                    <div className={this.classes.empty}></div>
                    <Grid container justify={`flex-end`}>
                        <Button className={this.classes.tap} variant="outlined" color="primary" onClick={this.tap}>Tap Please!</Button>
                    </Grid>
                </Card>
            </React.Fragment>
        )
    }
}

/** make Store. */
export default withStyles(styles)(Container.create(Root))
