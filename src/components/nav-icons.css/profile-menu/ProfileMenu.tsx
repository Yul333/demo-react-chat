import React, { useEffect, useRef, useState } from 'react';
import './ProfileMenu.css'; 

const ProfileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="icon-container" style={{ position: 'fixed', left: '3rem', bottom: '3rem' }}>
      <img 
        src='./images/noun-menu-profile.svg' 
        width='26px' 
        height='26px' 
        alt='profile menu icon' 
        color='rgb(60, 60, 60, 0.3)'
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="dropdown-options">
          <div onClick={() => setIsOpen(false)}>My Memories</div>
          <div onClick={() => setIsOpen(false)}>My Sessions</div>
          <div onClick={() => setIsOpen(false)}>My Biometrics</div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
