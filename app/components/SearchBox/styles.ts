import { SearchAlt } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

export const SearchIcon = styled(SearchAlt)`
  color: #5f5f5f;
  margin-left: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #f6f6f6;
  border: 1px solid #d0d0d0;
  height: 40px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 250px;
  background-color: transparent;
  padding: 1rem;
  font-size: 1rem;
  color: #5f5f5f;
`;
