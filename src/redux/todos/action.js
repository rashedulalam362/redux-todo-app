import { ADDED,TOGGLE,COLORSELECTED,DELETED,ALLCOMPLETED,CLEARCOMPLTED } from "./actionTypes";

export const added=(todoText)=>{
    return {
        type:ADDED,
        payload:todoText
    }
}

export const deleted=(todoId)=>{
    return {
        type:DELETED,
        payload:todoId
    }
}


export const toggle=(todoId)=>{
    return {
        type:TOGGLE,
        payload:todoId,
    }
}

export const colorselected=(todoId,color)=>{
    return {
        type:COLORSELECTED,
        payload:{
            todoId,
             color
        }
    }
}

export const allcompleted=(todoId,color)=>{
    return {
        type:ALLCOMPLETED,
        
    }
}

export const clearcompleted=(todoId,color)=>{
    return {
        type:CLEARCOMPLTED,
        
    }
}