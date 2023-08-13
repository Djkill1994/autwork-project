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

export const TimesheetTable: FC = () => {
  const { isOpened, open, close } = useModal();
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
          {/*<TableBody>*/}
          {/*  {usersData?.map(({ userName, id, avatarSrc, banned, role }) => (*/}
          {/*    <TableRow*/}
          {/*      sx={{ cursor: "pointer" }}*/}
          {/*      hover={true}*/}
          {/*      key={id}*/}
          {/*      onClick={() =>*/}
          {/*        navigate(*/}
          {/*          generatePath(ROUTE_PATHS.Collection, { userId: id }),*/}
          {/*          {*/}
          {/*            replace: true,*/}
          {/*          },*/}
          {/*        )*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <TableCell scope="row">{id}</TableCell>*/}
          {/*      <TableCell>*/}
          {/*        <Avatar src={avatarSrc} />*/}
          {/*      </TableCell>*/}
          {/*      <TableCell>{userName}</TableCell>*/}
          {/*      <TableCell>*/}
          {/*        {banned ? (*/}
          {/*          <Block color="error" />*/}
          {/*        ) : (*/}
          {/*          <CheckCircleOutline color="success" />*/}
          {/*        )}*/}
          {/*      </TableCell>*/}
          {/*      <TableCell>*/}
          {/*        {role === "admin"*/}
          {/*          ? t("features.Admin.UsersTable.role.admin")*/}
          {/*          : t("features.Admin.UsersTable.role.user")}*/}
          {/*      </TableCell>*/}
          {/*      <TableCell onClick={(e) => e.stopPropagation()}>*/}
          {/*        {authData?.id !== id && (*/}
          {/*          <UserActions userId={id} role={role} banned={banned} />*/}
          {/*        )}*/}
          {/*      </TableCell>*/}
          {/*    </TableRow>*/}
          {/*  ))}*/}
          {/*</TableBody>*/}
        </Table>
      </TableContainer>
    </Paper>
  );
};
