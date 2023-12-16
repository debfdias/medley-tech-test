import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TableContainer = styled.table`
  width: 100%;

  tr:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const TableHeader = styled.th`
  color: #5f5f5f;
  font-size: 1rem;
  font-weight: normal;
  text-align: left;
  padding: 1rem 2rem;
`;

export const TableRow = styled.tr`
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ebebeb;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 2rem;
  color: #5f5f5f;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const TableCellValue = styled(TableCell)`
  color: #1a1d1f;
`;

export const TableEmpty = styled.div`
  color: #5f5f5f;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 10rem;
`;

export const Label = styled.span<{ $status: string }>`
  color: #1a1d1f;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  background-color: ${({ $status }) =>
    $status === "Completed" ? "#60CA57" : "#6F767E66"};
`;
