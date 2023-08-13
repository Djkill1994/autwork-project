import { Modal, Paper, Stack, TextField } from "@mui/material";
import { FC } from "react";

interface IProps {
  onClose: () => void;
}

export const TimesheetModal: FC<IProps> = ({ onClose }) => {
  return (
    <Modal open onClose={onClose} sx={{ display: "flex" }}>
      <Paper
        sx={{
          display: "flex",
          m: "10px auto",
          alignItems: "center",
          p: "20px",
        }}
      >
        <Stack gap={2}>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </Stack>
      </Paper>
    </Modal>
  );
};
