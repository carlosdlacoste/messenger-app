import { NavBar } from "./components/navbar"
import { MessageCard } from "./components/messageCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMessages } from "./redux/messageSlice"

function App() {

  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages.data)

  useEffect(() =>{

    dispatch(getMessages())
    
  }, [])
  console.log(messages)

  return (
    <>
      <NavBar/>
      <div className="container mx-auto lg:w-10/12 sm:w-11/12 my-10">
        <div className="grid grid-cols-3 gap-6">
          {
            messages.map(message => (
              
              <MessageCard
                senderNumber={message.sender_number}
                senderName={message.sender_name}
                receivedNumber={message.received_number}
                platform={message.platform}
                description={message.message_text}
                date={message.message_date}
                key={message.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
