import React, { useState } from 'react';
import './SettingsMenu.css'; 

const SettingsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="settings-icon-container">
       {/* style={{ position: 'fixed', right: '3rem', top: '3rem' }} */}
  
      <img src='./images/noun-menu-settings.svg'
        width='32px'
        height='32px'
        alt='menu icon'
        onClick={() => setIsOpen(!isOpen)}
        className='settings-img'
      />
      {isOpen && (
        <div className="settings-dropdown-options">
          <div onClick={() => setIsOpen(false)}>Feedback</div>
          <div onClick={() => setIsOpen(false)}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
