import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/main/Navbar';
import ChatList from '../components/main/ChatList';
import ChatWindow from '../components/main/ChatWindow';
import '../components/main/MainMenu.css';

function MainPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: showContent ? 0 : '100vh' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="main-container"
    >
      <Navbar />
      <div className="bottom-section">
        <ChatList />
        <ChatWindow />
      </div>
    </motion.div>
  );
}

export default MainPage;