import React,{useState} from 'react'
import "./App.css"
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useStateValue } from './StateProvider'
import Login from './Login'
function App() {
  const [{user},dispatch]=useStateValue()

  return (
    <div className="app">

      {
        !user?(
          <Login/>
        ):(
          <>
          <Header/>
          <div className="app__body">
          <Sidebar/>
          <Feed/>
          </div>
          </>
        )
      }
     
 
      
    </div>
  )
}

export default App
