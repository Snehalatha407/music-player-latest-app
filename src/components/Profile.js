import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage src="path/to/profile-pic.jpg" alt="Profile" />
    </ProfileWrapper>
  );
};

export default Profile;
