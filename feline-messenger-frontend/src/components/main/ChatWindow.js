import React from 'react';

function ChatWindow() {
  const messages = [
    { sender: 'ars1ks', text: 'нового года не будет.', isMe: false },
    { sender: 'kefir_twtch', text: 'дед мороз сгорел.', isMe: true }
  ];

  return (
    <div className="chat-section">
      <div className="chat-header">
        <div className="user-header">
          <span className="user-main">
            <p>ars1ks</p>
          </span>
        </div>
        <a href="#">
          <img src="/img/icons/dots-horizontal.png" alt="Settings" className="setting-dots" />
        </a>
      </div>

      <div className="all-chat">
        {messages.map((msg, index) => (
          <div className={`chat-box ${msg.isMe ? 'my-message' : ''}`} key={index}>
            <div className="chat-txt">
              <h4>{msg.sender}</h4>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-type">
        <a href="#">
          <img src="/img/icons/plus-square.png" alt="Add" />
        </a>
        <form className="message-type">
          <input type="text" placeholder="Введите сообщение" />
          <a href="#">
            <img src="/img/icons/emoji.png" alt="Emoji" />
          </a>
        </form>
        <a href="#">
          <img src="/img/icons/send.png" alt="Send" />
        </a>
      </div>
    </div>
  );
}

export default ChatWindow;