import { ImgRenderer } from '@/shared/images';
import styled from 'styled-components';

export const Avatar = ({ img, displayName = 'RA', ...props }: any) => {
  return (
    <AvatarContainer {...props}>
      {img ? <ImgRenderer image={img} /> : <Name>{displayName}</Name>}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #b6b6b6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Name = styled.p`
  color: white;
`;
