import { ArrowLeft, ArrowRight } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const NextIcon = styled(ArrowRight)`
  color: #5f5f5f;
  margin-left: 1rem;
  cursor: pointer;
  transition: background-color 0.5s;
  padding: 0.25rem;
  border-radius: 6px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PrevIcon = styled(ArrowLeft)`
  color: #5f5f5f;
  margin-right: 1rem;
  cursor: pointer;
  transition: background-color 0.5s;
  padding: 0.25rem;
  border-radius: 6px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PrevIconDisabled = styled(PrevIcon)`
  color: #d2d2d2;
  cursor: not-allowed;
`;

export const NextIconDisabled = styled(NextIcon)`
  color: #d2d2d2;
  cursor: not-allowed;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #5f5f5f;
  cursor: pointer;
  background-color: transparent;
  padding: 0.4rem 0.65rem;
  margin: 0.25rem;
  border: 0;
  border-radius: 6px;
  transition: background-color 0.5s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonActive = styled(Button)`
  background-color: #60ca57;
`;
