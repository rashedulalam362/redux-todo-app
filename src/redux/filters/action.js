import {COLORCHANGED,STATUSCHANGED} from './actionTypes';

export const colorcahnged=(color,changetype)=>{
    return{
        type:COLORCHANGED,
        payload:{
            color,
            changetype
        }
    }
}

export const statuschanged=(status)=>{
    return{
        type:STATUSCHANGED,
        payload:{
            status
        }
    }
}