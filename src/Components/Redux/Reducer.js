
import {ADD_BIRDS,ADD_LIKES} from "./Action"
// const birdInitailState=[]
const birdInitailState=[
{
    bird:"Robin",
    likes:1
}

]
    



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
   console.log(state)
    switch(action.type)
    {
        case ADD_BIRDS:
            return [
            //     ...state,
            //    birdsList:[...state.birdsList,action.payload]
            ...state,
            {
                
             bird:action.payload,
             likes:1

            }
            
        ]

        case ADD_LIKES:
            const currentBird=state.find((bird)=>bird.bird===action.payload.bird)
            console.log(currentBird)
            return[
                // ...state,
                {
                    bird:currentBird.bird,
                    likes:currentBird.likes+1
                   
                }
                
            ]
            default:
                return state
    }

}

