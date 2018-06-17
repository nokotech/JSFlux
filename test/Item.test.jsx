import React from 'react'
import ReactDOM from 'react-dom'
// import ReactTestUtils from 'react-addons-test-utils'
import ReactTestRenderer from 'react-test-renderer'
import { expect } from 'chai'
import sinon from 'sinon'

import Item from '../src/view/item/Item'
import Sample1Action from '../src/action/Sample1Action'

describe('Item', () => {
    it('propsが正しく設定できる', () => {
        const callback = () => {} //sinon.spy();
        console.log(Item)
        // CREATE DOM.
        const component = ReactTestRenderer.create(<Item tap={callback} classes={{}} index={0} key={0} />)
        Sample1Action.tapButton("test text")
        // EXPECT.      
        const text = component.root.findByProps({className: "text"}).props.children
        expect("test text").to.equal(text)
    })
})