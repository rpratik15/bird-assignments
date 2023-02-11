
import {ADD_BIRDS} from "./Action"
const birdInitailState=[]


const likeInitialState={
    like:1
}

export const likeReducer=(state=likeInitialState,action)=>{

    switch(action.type)
    {
        default:
            return state
    }
}

export const birdReducer=(state=birdInitailState,action)=>{
//    console.log(state)
    switch(action.type)
    {
        case ADD_BIRDS:
            return [
            //     ...state,
            //    birdsList:[...state.birdsList,action.payload]
            ...state,
            
                action.payload
            
        ]
            default:
                return state
    }

}

