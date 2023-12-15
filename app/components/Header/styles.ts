import styled from "styled-components";

export const Wrapper = styled.div`
  display: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c2c2c;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Subtitle = styled.h1`
  display: flex;
  color: #1a1d1f;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const PurpleSquare = styled.div`
  background-color: #cf9fff;
  border-radius: 4px;
  width: 1rem;
  height: 2rem;
`;
