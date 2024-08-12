import styled from 'styled-components';
import { colors } from './variables';
import { Link } from 'react-router-dom';

export const GameSelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: ${colors.backGray};
`;

export const GameBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  background-color: ${colors.white};
  margin-top: -100px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
`;