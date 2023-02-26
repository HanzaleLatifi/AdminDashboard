import React ,{useEffect} from "react";
import { useContext, useReducer, createContext } from "react";

interface myContext {
    activeMenu:true;
    activeColor:'#d90f52'
    screenSize:undefined
}

const MyContext = createContext<Partial<myContext>>({});
const MyContextDispatcher = createContext<any>({});

const initialState:myContext={
    activeMenu:true,
    activeColor:'#d90f52',
    screenSize:undefined

    
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
