import React, { useState } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [duration, setDuration] = useState('');
  const [activity, setActivity] = useState('');
  const [musicChoice, setMusicChoice] = useState('');

  const handleStartSession = () => {
    console.log({
      duration,
      activity,
      musicChoice
    });
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <span className="brand-name">DeepWork.io</span>
        
        <div className="header">
          <h1>Prepare Deep Work Session</h1>
          <div className="divider" />
        </div>

        <div className={`section ${duration ? 'completed' : ''}`}>
          <h2>Session Duration</h2>
          <div className="duration-buttons">
            {['10', '20', '30'].map((time) => (
              <button
                key={time}
                onClick={() => setDuration(time)}
                className={duration === time ? 'active' : ''}
              >
                {time}m
              </button>
            ))}
          </div>
        </div>

        <div className={`section ${activity ? 'completed' : ''}`}>
          <h2>Activity Name</h2>
          <select 
            value={activity} 
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="">Choose your activity</option>
            <option value="write">Write</option>
            <option value="code">Code</option>
            <option value="produce-music">Produce Music</option>
          </select>
        </div>

        <div className={`section ${musicChoice ? 'completed' : ''}`}>
          <h2>Background Music</h2>
          <div className="music-options">
            {[
              { value: 'none', label: 'No music' },
              { value: 'white-noise', label: 'White noise' },
              { value: 'lofi', label: 'Lo-fi' }
            ].map((option) => (
              <label 
                key={option.value}
                className={musicChoice === option.value ? 'selected' : ''}
              >
                <input
                  type="radio"
                  name="music"
                  value={option.value}
                  checked={musicChoice === option.value}
                  onChange={(e) => setMusicChoice(e.target.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="divider" />
        
        <button
          className="start-button"
          onClick={handleStartSession}
          disabled={!duration || !activity || !musicChoice}
        >
          Start Deep Work Session
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;