import React from 'react'
import ReactDOM from 'react-dom';

import sample from "./sample"
import Root from "./view/Root"

/** inject DOM. */
const targetDOM = document.getElementById("root") || document.createElement('div');
if(targetDOM) {
    ReactDOM.render(<Root />, targetDOM)
}
