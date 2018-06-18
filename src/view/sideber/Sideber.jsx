
import React from 'react'
import { Container } from 'flux/utils';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Sample1Action from '../../action/Sample1Action'
import Sample1Store from '../../store/Sample1Store'
import styles from './Sideber.style'

/**
 * View
 */
class Sideber extends React.Component {

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
        const sideList = (
            <div className={this.classes.list}>
              <List>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
              </List>
            </div>
          );
        return (
            <Drawer open={this.props.open} onClose={() => this.props.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.props.toggleDrawer('left', false)}
                    onKeyDown={() => this.props.toggleDrawer('left', false)}
                    >
                    {sideList}
                </div>
            </Drawer>
        )
    }
}

/** make Store. */
export default withStyles(styles)(Container.create(Sideber))
