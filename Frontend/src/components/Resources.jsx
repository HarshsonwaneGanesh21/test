import React, { useState } from 'react';
import "../App.css";
const Resources = () => {


  const [selectedTab, setSelectedTab] = useState('videos');


  const pdf = [
    {
      title: 'Welcome Video',
      description: 'A short video introducing the app, its features, and its purpose.',
      videoUrl: 'https://example.com/welcome-video'
    },
    {
      title: 'How To Use the App',
      description: 'A video tutorial showing users how to navigate the app, find resources, and access content.',
      videoUrl: 'https://example.com/how-to-use-the-app'
    },
    // Add more videos here
  ];

  const videos = [
    {
      title: 'Welcome Video',
      description: 'A short video introducing the app, its features, and its purpose.',
      videoUrl: 'https://example.com/welcome-video'
    },
    {
      title: 'How To Use the App',
      description: 'A video tutorial showing users how to navigate the app, find resources, and access content.',
      videoUrl: 'https://example.com/how-to-use-the-app'
    },
    // Add more videos here
  ];

  const faqs = [
    {
      question: 'What is yoga?',
      answer: 'A brief explanation of yoga, its origins, and its benefits.'
    },
    {
      question: 'Is yoga right for me?',
      answer: 'A discussion about yoga\'s suitability for different people, including those with injuries or physical limitations.'
    },
    // Add more FAQs here
  ];

  return (
    <div className='nav1'>
      <nav className='nav2'>
        <button className='nav' onClick={() => setSelectedTab('videos')}>VIDEOS</button>
        <button className='nav' onClick={() => setSelectedTab('faqs')}>FAQs</button>
        <button className='nav' onClick={() => setSelectedTab("pdf")}>PDF</button>
      </nav>
      {selectedTab === 'videos' && (
        <div className='nav3'>
          <h2>VIDEOS</h2>
          <ul>
            {videos.map((video, index) => (
              <li key={index}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video src={video.videoUrl} controls />
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedTab === 'faqs' && (
        <div className='nav3'>
          <h2>FAQs</h2>
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}




export default Resources;