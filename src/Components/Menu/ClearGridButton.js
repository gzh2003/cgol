import { Button } from "@mui/material";

function ClearGridButton(props) {
  const { handleClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ minWidth: 200, margin: 3, py: 1 }}
      onClick={handleClick}
    >
      Clear
    </Button>
  );
}

export default ClearGridButton;