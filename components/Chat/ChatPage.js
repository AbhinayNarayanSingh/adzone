import { chatLists } from '@/store/staticStore'
import React from 'react'

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
        ChatBody
      </div>
    </div>
  )
}

export default ChatPage