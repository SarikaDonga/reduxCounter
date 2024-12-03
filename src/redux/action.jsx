export const INCREEMENT='INCREEMENT';
export const DECREEMENT='DECREEMENT';

export const increement=(number)=>({
    type: INCREEMENT,
    payload:number
})
export const decreement=(number)=>({
    type: DECREEMENT,
    payload:number
})