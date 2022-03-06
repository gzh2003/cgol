import { Button } from "@mui/material";

function RandomGridButton(props) {
  const { handleClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ minWidth: 200, margin: 3, py: 1 }}
      onClick={handleClick}
    >
      Random
    </Button>
  );
}

export default RandomGridButton;