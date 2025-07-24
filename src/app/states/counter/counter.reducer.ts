import { createReducer, on } from "@ngrx/store"

import { count } from "rxjs"
import { decrement, increment, reset } from "./counter.actions"

export interface CounterState{
     count: number  
}


export const inialCounterState:CounterState ={
    count:0
}

export const counterReducer = createReducer(
    inialCounterState,
    on(increment ,state=>({...state , count:state.count+1})),
    on(decrement ,state=>({...state , count:state.count-1})),
    on(reset ,state=>({...state , count:0}))
)