import styled from 'styled-components';

export const AvatarImage = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
  cursor: pointer;

  :not(:first-child) {
    margin-left: -20px;
  }
`;