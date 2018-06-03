import React from 'react'
import ReactDOM from 'react-dom'
// import ReactTestUtils from 'react-addons-test-utils'
import ReactTestRenderer from 'react-test-renderer'
import { expect } from 'chai'

import ListView from '../src/view/sample1'

describe('ListView', () => {
    it('propsが正しく設定できる', () => {
        // CREATE DOM.
        const component = ReactTestRenderer.create(<ListView imageUrl="http://example.com/" text="sample" />);
        // EXPECT.
        const expectUrl = component.root.findByProps({className: "list_img"}).props.src
        expect("http://example.com/").to.equal(expectUrl)
        const expectText = component.root.findByProps({className: "list_test"}).children[0]
        expect("sample").to.equal(expectText)
    })
})