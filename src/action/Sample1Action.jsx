import AppDispatcher from "../common/AppDispatcher"

/**
 * Action Creater.
 */
class Sample1Action {

    constructor() {
        /** Action List. */
        this.ACTION_TYPE_TAP_BUTTON = "tap button"
    }

    tapButton(val) {
        console.log(`${this.constructor.name} - ${this.tapButton.name}`)
        AppDispatcher.dispatch({
            actionType: this.ACTION_TYPE_TAP_BUTTON,
            value: val
        });
    }
}

export default new Sample1Action()
