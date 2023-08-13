import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

export const TimesheetTableHeader: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Дата</TableCell>
        <TableCell>начало работы</TableCell>
        <TableCell>обед</TableCell>
        <TableCell>конец работы</TableCell>
        <TableCell>часов</TableCell>
        <TableCell>место работы</TableCell>
      </TableRow>
    </TableHead>
  );
};
