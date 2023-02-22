import { useMyContext, useMyContextActions } from '../context/ContextProvider'
import React from 'react'

const Home = () => {
  const state=useMyContext();
  const dispatch=useMyContextActions();
  console.log(state)

  return (
    <div>
      <p>home</p>
      <button onClick={()=>dispatch({type:'activeMenu'})}>+</button>
    </div>
  )
}

export default Home