import {ADD_BIRDS} from "./Action"
const initailState={
    birdsList:[]
}

export const reducer=(state=initailState,action)=>{

    switch(action.type)
    {
        case ADD_BIRDS:
            return{

            }
            default:
                return state
    }

}