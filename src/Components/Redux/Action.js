export const ADD_BIRDS="ADD_BIRDS"
export const ADD_LIKES="ADD_LIKES"

export const addBirds=(data)=>({
    type:ADD_BIRDS, 
    payload:data
})

export const addLikes=(bird,likes)=>({
    type:ADD_LIKES,
    payload:{
        bird:bird,
        likes:likes
    }
})

