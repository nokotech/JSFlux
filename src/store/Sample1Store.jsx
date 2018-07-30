import { ReduceStore } from "flux/utils"
import AppDispatcher from "../common/AppDispatcher"
import Sample1Action from "../action/Sample1Action"
import _ from "lodash"

const store = {
    value: []
}

class Sample1Store extends ReduceStore {

    constructor() {
        super(AppDispatcher)
    }

    getInitialState() {
        return store
    }

    reduce(state, action, newState = {}) {
        console.log(`${this.constructor.name} - ${this.reduce.name}`)
        console.log(`[${action.actionType}] ${action.value}`)
        let arr = state.value
        switch (action.actionType) {

            case Sample1Action.ACTION_TYPE_TAP_BUTTON:
                arr.push(action.value)
                newState = _.merge({}, state, {
                    value: arr
                })
                console.log(`newState`, newState)
                return newState
            
            case Sample1Action.ACTION_TYPE_DEL_BUTTON:
                arr.splice(Number(action.value), 1)
                newState = _.merge({}, state, {
                    value: arr
                })
                console.log(`newState`, newState)
                return newState

            default:
                newState = state 
                console.log(`newState`, newState)
                return newState
        }
    }
}

export default new Sample1Store()