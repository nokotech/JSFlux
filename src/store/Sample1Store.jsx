import { ReduceStore } from "flux/utils"
import AppDispatcher from "../common/AppDispatcher"
import Sample1Action from "../action/Sample1Action"

const store = {
    value: null
}

class Sample1Store extends ReduceStore {

    constructor() {
        super(AppDispatcher)
    }

    getInitialState() {
        return store
    }

    reduce(state, action) {
        console.log("Sample1Store.reduce")
        switch (action.tytpe) {

            case Sample1Action.ACTION_TYPE_TEST:
                state.set({
                    value: action.value
                })
                return state

            default:
                return state
        }
    }
}

export default new Sample1Store()