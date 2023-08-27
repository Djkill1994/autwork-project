import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
// import { Block, CheckCircleOutline } from "@mui/icons-material";
// import { UsersTableHeader } from "./UsersTableHeader";
// import { UserActions } from "./UserActions";
import { FC } from "react";
// import { generatePath } from "react-router-dom";
// import { ROUTE_PATHS } from "../../../App";
import { TimesheetTableHeader } from "./TimesheetTableHeader.tsx";
import { useModal } from "../../../common/hooks/useModal.ts";
import { TimesheetModal } from "./TimesheetModal.tsx";
import { AUTH_TOKEN_KEY } from "../../../common/constans/localStorage.ts";
import { GoogleSpreadsheet } from "google-spreadsheet";

export const TimesheetTable: FC = () => {
  const { isOpened, open, close } = useModal();
  const token = localStorage.getItem(AUTH_TOKEN_KEY) ?? "";
  const doc = new GoogleSpreadsheet(
    "1ItdFb1i_CgulyzFoBGwxIFSlaox1XE2q/edit#gid=1037623392",
    { token: token },
  );

  (async function () {
    await doc.loadInfo();
  })();
  // loadDocum();
  // console.log(doc.title && "dok title");
  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      {isOpened && <TimesheetModal onClose={close} />}
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TimesheetTableHeader />
          <TableBody>
            <TableRow sx={{ cursor: "pointer" }} hover={true} onClick={open}>
              <TableCell>01 Пн</TableCell>
              <TableCell>8.00</TableCell>
              <TableCell>1</TableCell>
              <TableCell>19.00</TableCell>
              <TableCell>10</TableCell>
              <TableCell>Riga/datika</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
