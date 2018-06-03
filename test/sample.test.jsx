import { expect } from 'chai'

import { sampleMethod1 } from '../src/sample'

/**
 * テストケース
 */
describe("test", () => {
    it("test1", () => {
        expect(sampleMethod1("aaaaa")).equal("-----");
    })
})