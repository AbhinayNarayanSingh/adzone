import { chat, chatLists } from '@/store/staticStore'

const ChatPage = () => {
  return (
    <div className='main-section-outer-container min-body-section-container chat-outer-container'>

      <div className="col-30 chat-lists-outer-container hide-scrollbar">
        <div className='chat-filter-btn-container hide-scrollbar'>
          <button className='chat-filter-btn active-filter'>All</button>
          <button className='chat-filter-btn'>Buy</button>
          <button className='chat-filter-btn'>Sell</button>
          <button className='chat-filter-btn'>Wanted</button>
          <button className='chat-filter-btn'>Swap/Trade</button>
          <button className='chat-filter-btn'>Free Stuff</button>
        </div>
        {chatLists.map((item) => {
          return (
            <div className='chat-list-container' key={item.chat_id}>
              <div className='chat-list_image'><img src={item.cover_image} alt="" /></div>
              <div>
                <h2>{item.user}</h2>
                <p><span>{item.type}</span>{item.listing}</p>
              </div>
            </div>)
        })}
      </div>

      <div className="col-70">
        <div className="chat-body-container">

          <div className='chat-header-container' key={chat.chat_id}>
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
      </div>
    </div>
  )
}

export default ChatPage