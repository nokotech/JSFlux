import AppDispatcher from "../common/AppDispatcher"

/**
 * Action Creater.
 */
class Sample1Action {

    constructor() {
        /** Action List. */
        this.ACTION_TYPE_TAP_BUTTON = "tap button"
        this.ACTION_TYPE_DEL_BUTTON = "del button"
    }

    tapAddButton(val) {
        console.log(`${this.constructor.name} - ${this.tapAddButton.name}`)
        AppDispatcher.dispatch({
            actionType: this.ACTION_TYPE_TAP_BUTTON,
            value: val
        });
    }

    tapDelButton(val) {
        console.log(`${this.constructor.name} - ${this.tapDelButton.name}`)
        AppDispatcher.dispatch({
            actionType: this.ACTION_TYPE_DEL_BUTTON,
            value: val
        });
    }
}

export default new Sample1Action()
