import React  from "react";
import { useContext, useReducer, createContext } from "react";

interface myContext {
    activeMenu:boolean;
    activeColor:string
    screenSize:undefined
    activeSetting:boolean
}

const MyContext = createContext<Partial<myContext>>({});
const MyContextDispatcher = createContext<any>({});

const initialState:myContext={
    activeMenu:true,
    activeColor:'#d90f52',
    screenSize:undefined , 
    activeSetting: false

    
}

const reducer = (state:any=initialState, action:any) => {
    switch (action.type) {
      case "activeMenu": {
        return {
          ...state,activeMenu:true 
        };
      }
      case "hideMenu": {
        return {
          ...state,activeMenu:false 
        };
      }
      case "toggleMenu":{
        return {
          ...state,activeMenu:!state.activeMenu 
        };
      }
      case "toggleSetting":{
        return {
          ...state,activeSetting:!state.activeSetting 
        };
      }
      
      case "setScreenSize":{
        return {
          ...state , screenSize:action.payload
        }
      }
  
      default:
        return state;
    }
  };

type propsTypes={
    children:React.ReactNode
}

const ContextProvider = ({children}:propsTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 
  

  return (
    <>
    <MyContext.Provider value={state}>
      <MyContextDispatcher.Provider value={dispatch}>
        {children}
      </MyContextDispatcher.Provider>
    </MyContext.Provider>
  </>
  )
}

export default ContextProvider;

export const useMyContext = () => useContext(MyContext);
export const useMyContextActions = () => useContext(MyContextDispatcher);
