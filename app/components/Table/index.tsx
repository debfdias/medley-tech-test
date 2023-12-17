import { IPayout } from "@/app/interfaces/IPayout";
import { format } from "date-fns";
import {
  Label,
  TableCell,
  TableCellValue,
  TableContainer,
  TableEmpty,
  TableHeader,
  TableRow,
  Wrapper,
} from "./styles";

interface TableProps {
  data: IPayout[];
}

export default function Table({ data }: TableProps) {
  return (
    <>
      <Wrapper>
        {data?.length === 0 ? (
          <TableEmpty>Nothing found!</TableEmpty>
        ) : (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Username</TableHeader>
                <TableHeader>Date & Time</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Value</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data?.map((entry: IPayout, index: number) => (
                <TableRow key={index}>
                  <TableCell>{entry.username}</TableCell>
                  <TableCell>
                    {format(new Date(entry.dateAndTime), "E, PP, p")}
                  </TableCell>
                  <TableCell>
                    <Label $status={entry.status}>
                      {entry.status === "Completed" ? "Paid" : entry.status}
                    </Label>
                  </TableCell>
                  <TableCellValue>{entry.value}</TableCellValue>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        )}
      </Wrapper>
    </>
  );
}
