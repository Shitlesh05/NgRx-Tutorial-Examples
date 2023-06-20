import { createReducer, on} from "@ngrx/store";
import { customIncrement, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

export const _counterReducer = createReducer(
    initialState ,
    on(increment , (state) => {
        return {
            ...state ,              // fetching the old state
            counter: state.counter + 1,    // changing the state
        };
    }) , 
    on(decrement , (state) => {
        return {
            ...state ,              // fetching the old state
            counter: state.counter - 1,    // changing the state
        };
    }) ,
    on(reset , (state) => {
        return {
            ...state ,              // fetching the old state
            counter: 0,    // changing the state
        };
    }) ,

    on(customIncrement , (state , action) => {
        console.log(action);
        return {
            ...state , 
            counter : state.counter + action.value,   // providing custom value to the counter from here
        }
    })
);

// export function createReducer(state: any , action: any){
//     return _counterReducer(state , action)
// }