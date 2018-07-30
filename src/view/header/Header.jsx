import React from 'react'
import { Container } from 'flux/utils';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Sample1Action from '../../action/Sample1Action'
import Sample1Store from '../../store/Sample1Store'
import styles from './Header.style'

/**
 * View
 */
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes;
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
        console.log(`${this.constructor.name} - ${this.tap.name}`)
    }

    render() {
        console.log(`${this.constructor.name} - ${this.render.name}`)
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={this.classes.menuButton} onClick={() => this.props.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={this.classes.flex}>
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

/** make Store. */
export default withStyles(styles)(Container.create(Header))

