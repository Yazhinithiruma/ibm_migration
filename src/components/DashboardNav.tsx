
import React from 'react';
import {
  HeaderContainer,
  Header,
  HeaderGlobalBar,
  HeaderGlobalAction,
  OverflowMenu,
  OverflowMenuItem,
  Button
} from '@carbon/react';
import { User } from '@carbon/icons-react';
import { useNavigate } from 'react-router-dom';

interface DashboardNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ onNavigate, currentPage }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    onNavigate('home');
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Migration Dashboard">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Button
                kind="ghost"
                onClick={handleLogoClick}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  background: 'transparent'
                }}
              >
                <img 
                  src="https://www.ibm.com/in-en"
                  alt="IBM Logo"
                  style={{ height: '24px' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png";
                  }}
                />
                <span style={{ color: '#0f62fe', fontSize: '18px', fontWeight: '600' }}>
                  Migration Dashboard
                </span>
              </Button>
            </div>
            <HeaderGlobalBar>
              <OverflowMenu
                renderIcon={User}
                flipped
                aria-label="User Profile"
              >
                <OverflowMenuItem 
                  itemText="Profile" 
                  onClick={() => {}}
                />
                <OverflowMenuItem 
                  itemText="Settings" 
                  onClick={() => {}}
                />
                <OverflowMenuItem 
                  hasDivider
                  isDelete
                  itemText="Logout" 
                  onClick={handleLogout}
                />
              </OverflowMenu>
            </HeaderGlobalBar>
          </Header>
        )}
      />
    </div>
  );
};

export default DashboardNav;
