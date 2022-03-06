import { Button } from "@mui/material";

function RunButton(props) {
  const { running, handleClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ minWidth: 200, margin: 3, mt: 6, py: 1 }}
      onClick={handleClick}
    >
      {running ? "Stop" : "Start"}
    </Button>
  );
}

export default RunButton;
