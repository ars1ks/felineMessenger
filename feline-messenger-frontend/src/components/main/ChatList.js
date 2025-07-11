import React from 'react';

function ChatList() {
  const contacts = [
    { name: 'ars1ks', icon: '/img/icons/user.png' },
    { name: 'kefir_twtch', icon: '/img/icons/user.png' },
    { name: '2007 (вротенд)', icon: '/img/icons/user.png' }
  ];

  return (
    <div className="side-bar">
      <ul>
        <li>
          <img src="/img/icons/discussion.png" alt="Чаты" />
          <a href="#">Чаты</a>
        </li>
        <li>
          <img src="/img/icons/group.png" alt="Группы" />
          <a href="#">Группы</a>
        </li>
        <li>
          <img src="/img/icons/logout.png" alt="Выйти" />
          <a href="#">Выйти</a>
        </li>
      </ul>

      <div className="chat-sec">
        {contacts.map((contact, index) => (
          <div className="chat" key={index}>
            <img src={contact.icon} alt={contact.name} />
            <p>{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;