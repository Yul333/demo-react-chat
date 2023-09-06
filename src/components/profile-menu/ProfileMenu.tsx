import React, { useEffect, useRef, useState } from 'react';
import './ProfileMenu.css'; 

const ProfileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
 useEffect(() => {
    if (containerRef.current) {
      setMenuHeight(containerRef.current.clientHeight);
    }
  }, []);

  return (
    <div ref={containerRef} className="icon-container" style={{ position: 'fixed', left: '3rem', bottom: '3rem' }}>
      <img 
        src='./images/noun-menu-profile.svg' 
        width='26px' 
        height='26px' 
        alt='profile menu icon' 
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="dropdown-options" style={{ bottom: `${menuHeight}px`}}>
          <div onClick={() => setIsOpen(false)}>My Memories</div>
          <div onClick={() => setIsOpen(false)}>My Sessions</div>
          <div onClick={() => setIsOpen(false)}>My Biometrics</div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
