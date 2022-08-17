import {ADD_JOB, DELETE_JOB, SET_JOB} from "./constant";
import {createStore,applyMiddleware} from "redux";

export const initState = {
    job: '',
    jobs: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs=[...state.jobs]
            newJobs.splice(action.payload,1)
            return {
                ...state,
                jobs:newJobs
            }
    }
}


const store = createStore(reducer)

const myMiddleware=store=>next=>action=>{
    console.log('action',action)
    action.payload='kh'
}
export default reducer