import { BACK_BTN_ICON } from '@/Environment'
import Icon from '@/hoc/image/Icon'
import useIsMobile from '@/hooks/useIsMobile'
import { chat, chatLists } from '@/store/staticStore'
import { useState } from 'react'

const ChatPage = () => {

  const isMobile = useIsMobile()
  const [showingChatList, setShowingChatList] = useState(true)
  const [activeFilter, setActiveFilter] = useState("All")
  const [openChatId, setOpenChatId] = useState("")

  // if !isMobile = true then show both section, otherwise show only one section as per showPage state
  const showChatListScreen = !isMobile || (isMobile && showingChatList);
  const showChatBodyScreen = !isMobile || (isMobile && !showingChatList);

  const getChatMessagesHandler = () => {
    // start loader
    // call api
    // stop loader

    // show chat body
    setShowingChatList(false)
  }

  const goBackPageHandler = () => setShowingChatList(true)


  const chatFilterBtns = [
    {
      name: "All"
    },
    {
      name: "Buy"
    },
    {
      name: "Sell"
    },
    {
      name: "Wanted"
    },
    {
      name: "Swap/Trade"
    },
    {
      name: "Free Stuff"
    },
  ]

  return (
    <div className='main-section-outer-container min-body-section-container chat-outer-container'>

      {showChatListScreen && <div className="col-30 chat-lists-outer-container hide-scrollbar">
        <div className='chat-filter-btn-container hide-scrollbar'>
          {chatFilterBtns.map((btn, i) => <button
            key={"fillterBtn_" + i}
            className={`chat-filter-btn ${activeFilter === btn.name ? "active-filter" : ""}`}
            onClick={() => setActiveFilter(btn.name)}
          >
            {btn.name}
          </button>)}
        </div>
        {chatLists.map((item, i) => {
          return (
            <div 
              className={`chat-list-container ${i === 0 && " active-chat"}`} 
              key={item.chat_id} 
              onClick={getChatMessagesHandler}
            >
              <div className='chat-list_image'><img src={item.cover_image} alt="" /></div>
              <div>
                <h2>{item.user}</h2>
                <p><span>{item.type}</span>{item.listing}</p>
              </div>
            </div>)
        })}
      </div>}






      {showChatBodyScreen && <div className="col-70">
        <div className="chat-body-container">

          <div className='chat-header-container' key={chat.chat_id}>
            <button className='back-button-container' onClick={goBackPageHandler}>
              <Icon src={BACK_BTN_ICON} size="2rem"/>
            </button>
            
            <h2>{chat.user}</h2>
            <p><span>{chat.type}</span>{chat.listing}</p>
          </div>

          <div className="messages-outer-container">
            <div className="messages-inner-container hide-scrollbar">
              {chat?.messages?.map((msg) => {
                const { message_id, message } = msg
                return (
                  <div key={message_id}
                    className={(message?.from?.id === 518057868 ? "you" : "user") + " message"}
                  >
                    <p>{message?.text}</p>
                    <span>{(!message?.isSent) ? "Sending..." : message.date}</span>
                  </div>

                )
              })}
            </div>
          </div>

          <div className="chat-input-box">
            <input type="text" placeholder='Write something' />
            <button>Send</button>
          </div>

        </div>
      </div>}
    </div>
  )
}

export default ChatPage