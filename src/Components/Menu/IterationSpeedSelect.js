import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

function IterationSpeedSelect(props) {
  const { iterationSpeed, handleChange } = props;
  return (
    <React.Fragment>
      <InputLabel id="iterationSpeed-label">Iteration Speed</InputLabel>
      <Select
        sx={{ width: 150 }}
        name="iterationSpeed"
        id="iterationSpeed"
        value={iterationSpeed}
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value="25">25ms</MenuItem>
        <MenuItem value="125">125ms</MenuItem>
        <MenuItem value="250">250ms</MenuItem>
        <MenuItem value="500">500ms</MenuItem>
        <MenuItem value="750">750ms</MenuItem>
        <MenuItem value="1000">1000ms</MenuItem>
      </Select>
    </React.Fragment>
  );
}

export default IterationSpeedSelect;
