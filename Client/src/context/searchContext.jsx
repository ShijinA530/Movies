import { createContext ,useReducer} from "react";

export const EquipmentContext=createContext()

export const EquipmentReducer=(state,action)=>{
    switch(action.type){
        case 'SET_EQP':{
            return{
                workouts:action.payload
            }
        }
        default:{
            return state
        }
    }

}

export const EquipmentContextProvider=({children})=>{

    const [state,dispatch]=useReducer(EquipmentReducer,{workouts:null})

    return(
        <EquipmentContext.Provider value={{...state,dispatch}}>
            {children}
        </EquipmentContext.Provider>
            
    )
}