import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

function CellSizeSelect(props) {
  const { cellSize, handleChange } = props;
  return (
    <React.Fragment>
      <InputLabel id="cellSize-label">Cell Size</InputLabel>
      <Select
        sx={{ width: 150 }}
        name="cellSize"
        id="cellSize"
        labelId="cellSize-label"
        value={cellSize}
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value="4">4px</MenuItem>
        <MenuItem value="6">6px</MenuItem>
        <MenuItem value="8">8px</MenuItem>
        <MenuItem value="10">10px</MenuItem>
        <MenuItem value="12">12px</MenuItem>
        <MenuItem value="14">14px</MenuItem>
        <MenuItem value="16">16px</MenuItem>
        <MenuItem value="18">18px</MenuItem>
      </Select>
    </React.Fragment>
  );
}

export default CellSizeSelect;
