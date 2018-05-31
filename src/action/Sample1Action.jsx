import AppDispatcher from "../common/AppDispatcher"

/**
 * Action Creater.
 */
class Sample1Action {

    constructor() {
        /** Action List. */
        this.ACTION_TYPE_TEST = "test"
    }

    test(val) {
        console.log("Sample1Action.test")
        AppDispatcher.dispatch({
            actionType: this.ACTION_TYPE_TEST,
            value: val
        });
    }
}

export default new Sample1Action()
