import {
  Button,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
        <Stack alignItems="center" gap={1}>
          <Button variant="contained" sx={{ color: "red" }}>
            Выходной
          </Button>
          <Typography>Введите данные</Typography>
          <Typography>Дата 21.01.2023</Typography>
          <Stack gap={2}>
            <TextField color="secondary" label="Время начала работы" />
            <TextField color="secondary" label="Время обеда" />
            <TextField color="secondary" label="Время окончания работы" />
            <TextField color="secondary" label="Место работы" />
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
};
