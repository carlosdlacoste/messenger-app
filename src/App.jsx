import { NavBar } from "./components/navbar"
import { MessageCard } from "./components/messageCard"

function App() {

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
