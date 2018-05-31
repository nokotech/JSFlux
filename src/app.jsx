import React from 'react'
import ReactDOM from 'react-dom';

import sample1 from "./view/sample1"
import Root from "./view/Root"

/** inject DOM. */
ReactDOM.render(< Root />, document.getElementById("root"))

/**
 * テストする関数
 * @param {String} str 
 */
function sampleMethod1(str) {
    return "-----"
}