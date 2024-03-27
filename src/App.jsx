import { NavBar } from "./components/navbar"
import { MessageCard } from "./components/messageCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMessages } from "./redux/messageSlice"

function App() {

  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)

  useEffect(() =>{

    dispatch(getMessages())
    
  }, [])
  console.log(messages)

  return (
    <>
      <NavBar/>
      <div className="container mx-auto lg:w-10/12 sm:w-11/12 mt-10">

        <MessageCard/>
      </div>
    </>
  )
}

export default App
