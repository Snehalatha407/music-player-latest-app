import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props?.theme?.colors?.background};
  padding: 20px;
`;

const Logo = styled.img`
  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props?.theme?.colors?.secondary};
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo src="/assets/spotify-logo.png" alt="Spotify Logo" />
      <Profile>
        <ProfileImage src="/assets/profile-img.jpeg" alt="Profile" />
      </Profile>
    </SidebarWrapper>
  );
};

export default Sidebar;
