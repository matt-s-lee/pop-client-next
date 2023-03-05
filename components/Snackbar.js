import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { GrFormClose } from "react-icons/gr";

export const SnackbarComponent = ({
  message,
  snackbarOpen,
  setSnackbarOpen,
}) => {
  const handleCloseSnackbar = (ev, reason) => {
    setSnackbarOpen(false);
  };

  const action = (
    <>
      <Button onClick={handleCloseSnackbar}>
        <GrFormClose fontSize="20px" color="white" />
      </Button>
    </>
  );

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        message={message}
        onClose={handleCloseSnackbar}
        action={action}
      />
    </>
  );
};
